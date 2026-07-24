// settings.js
//new file after delete?
//keyboard shortcuts for spawning blocks?
//blank lines after each note? slider?
//display prefixes like quest - ?
//scroll speed
//display time on block?
//newBlankBlock code
//redo route system to make each route a separate thing in localStorage and phase out store (maybe)?
//make each route in localStorage start with a keyword

store = JSON.parse(localStorage.getItem("route_system") || '{}');
store.currentId ??= "";
store.saves ??= {};
store.settings ??= {};

function setting(path, defaultValue) {
    let obj = store.settings;
    for (let i = 0; i < path.length - 1; i++) {
        obj[path[i]] ??= {};
        obj = obj[path[i]];
    }
    obj[path.at(-1)] ??= defaultValue;
}

setting(["notes", "numberStyle"], ".");
setting(["notes", "blankLines"], 1);
setting(["notes", "showNotesLabel"], true);
setting(["notes", "pathStyle"], " - ");
setting(["notes", "pathOptions"], "Full");
setting(["notes", "titleSpacing"], 2);
setting(["notes", "showRouteTitle"], true);
setting(["notes", "notesFormat"], "New Line");
setting(["notes", "notesFormatNewLinePrefix"], "    - ");
setting(["editor", "scrollSpeed"], false);
setting(["editor", "showDurations"], true);
setting(["editor", "showNotes"], true);
setting(["editor", "displayPrefixes"], true);
setting(["editor", "durationDisplayStyle"], true);
setting(["notes", "pathStyle"], " - ");
setting(["notes", "pathOptions"], "Full");
setting(["shortcuts", "jumpToSearchKey"], "/");
setting(["shortcuts", "emptySearchOnJump"], true);
setting(["shortcuts", "emptySearchKey"], ".");
setting(["shortcuts", "newBlankBlockKey"], "b");
setting(["shortcuts", "deleteBlockKey"], "Delete");

localStorage.setItem("route_system", JSON.stringify(store));

document.addEventListener("keydown", (e) => {
    const active = document.activeElement;
    const isTyping =
        active &&
        (active.tagName === "INPUT" ||
         active.tagName === "TEXTAREA" ||
         active.isContentEditable);

    if (isTyping) return;

    if (e.key === store.settings.shortcuts.jumpToSearchKey) {
        e.preventDefault();
        librarySearch.focus();
        if (store.settings.shortcuts.emptySearchOnJump == true) {
            librarySearch.value = "";
        }
    }
    if (e.key === store.settings.shortcuts.emptySearchKey) {
        e.preventDefault();
        librarySearch.value = "";
        librarySearch.dispatchEvent(new Event("input", { bubbles: true }));
    }
    if (e.key === store.settings.shortcuts.newBlankBlockKey) {
        e.preventDefault();
        //somethingChanged();
    }
    if (e.key === store.settings.shortcuts.deleteBlockKey) {
        e.preventDefault();
        if (selectedRouteBlock != null) {
            document.getElementById("deleteBtn").click();
        }
    }
});