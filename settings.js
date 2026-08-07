// settings.js
//new file after delete?
//keyboard shortcuts for spawning blocks?
//blank lines after each note? slider?
//display prefixes like quest - ?
//scroll speed
//newBlankBlock code

const SETTINGS_SCHEMA = {
    notes: {
        numberStyle: ".",
        blankLines: 1,
        showNotesLabel: true,
        pathStyle: " - ",
        pathOptions: "Full",
        titleSpacing: 2,
        showRouteTitle: true,
        notesFormat: "New Line",
        notesFormatNewLinePrefix: "    - "
    },
    editor: {
        scrollSpeed: false,
        showDurations: true,
        showNotes: true,
        displayPrefixes: true,
        durationDisplayStyle: true
    },
    shortcuts: {
        jumpToSearchKey: "/",
        emptySearchOnJump: true,
        emptySearchKey: ".",
        newBlankBlockKey: "b",
        deleteBlockKey: "Delete"
    }
};

settings = JSON.parse(localStorage.getItem("routeSettings") || '{}');
if (!validateSettingsAgainstSchema(settings, SETTINGS_SCHEMA)) {
    console.warn("Corrupted settings detected, resetting.");
    settings = JSON.parse(JSON.stringify(SETTINGS_SCHEMA));
} else {
    applySettingsDefaults(settings, SETTINGS_SCHEMA);
}

function saveSettings() {
    if (!validateSettingsAgainstSchema(settings, SETTINGS_SCHEMA)) {
        console.warn("Refusing to save corrupted settings:", settings);
        return;
    }
    localStorage.setItem("routeSettings", JSON.stringify(settings));
}

function validateSettingsAgainstSchema(target, schema) {
    for (const key in schema) {
        const expected = schema[key];
        const actual = target[key];
        if (typeof expected === "object" && !Array.isArray(expected)) {
            if (typeof actual !== "object" || actual === null) return false;
            if (!validateSettingsAgainstSchema(actual, expected)) return false;
        } else {
            if (typeof actual !== typeof expected) return false;
        }
    }
    return true;
}

function applySettingsDefaults(target, schema) {
    for (const key in schema) {
        const expected = schema[key];
        if (typeof expected === "object" && !Array.isArray(expected)) {
            target[key] ??= {};
            applySettingsDefaults(target[key], expected);
        } else {
            target[key] ??= expected;
        }
    }
}

document.addEventListener("keydown", (e) => {
    const active = document.activeElement;
    const isTyping =
        active &&
        (active.tagName === "INPUT" ||
         active.tagName === "TEXTAREA" ||
         active.isContentEditable);

    if (isTyping) return;

    if (e.key === settings.shortcuts.jumpToSearchKey) {
        e.preventDefault();
        librarySearch.focus();
        if (settings.shortcuts.emptySearchOnJump == true) {
            librarySearch.value = "";
        }
    }
    if (e.key === settings.shortcuts.emptySearchKey) {
        e.preventDefault();
        librarySearch.value = "";
        librarySearch.dispatchEvent(new Event("input", { bubbles: true }));
    }
    if (e.key === settings.shortcuts.newBlankBlockKey) {
        e.preventDefault();
        let thing = document.createElement("button");
        thing.className = "libraryBlock";
        thing.setAttribute("data-name", "Blank");
        thing.setAttribute("data-path", "Custom - Blank");
        thing.setAttribute("data-repeatable", "true");
        thing.setAttribute("data-split", "false");
        thing.setAttribute("draggable", "false");
        thing.setAttribute("data-instance-id", makeId());
        thing.setAttribute("data-split-parent", "");
        thing.setAttribute("data-split-index", "0");

        // 3. Inject the inner HTML structure
        thing.innerHTML = `
            <div class="routeBlockName"></div>
            <div class="routeBlockNotes"></div>
            <div class="routeBlockDuration"></div>
            <div class="routeBlockXp"></div>
            <div class="routeBlockGold"></div>
        `;
        if (selectedRouteBlock != null) {
            selectedRouteBlock.after(thing);
        } else {
            routeContainer.appendChild(thing);
        }
        somethingChanged();
        thing.click();
        document.getElementById("name").focus();
    }
    if (e.key === settings.shortcuts.deleteBlockKey) {
        e.preventDefault();
        if (selectedRouteBlock != null) {
            document.getElementById("deleteBtn").click();
        }
    }
});