// file_manager.js

function downloadFile(content, filename, type) {

    const blob = new Blob([content], { type: type });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = filename;

    a.click();

    URL.revokeObjectURL(url);
}

function exportRoute() {

    const route = [];

    routeContainer.querySelectorAll(".libraryBlock").forEach((el, index) => {

        route.push({
            position: index,
            path: el.dataset.path,
            notes: el.dataset.notes || "",
            custom: el.dataset.custom || "",
            instanceId: el.dataset.instanceId || "",
            splitParent: el.dataset.splitParent || ""
        });

    });

    const save = {
        version: 1,
        title: routeTitle.value || "Untitled Route",
        route: route,
        timestamp: Date.now()
    };

    downloadFile(
        JSON.stringify(save, null, 2),
        "route.json",
        "application/json"
    );
}

function buildNotes() {

    let text = "";

    const title = (routeTitle.value || "").trim();

    if (title) {
        text += title + "\n\n";
    }

    routeContainer.querySelectorAll(".libraryBlock").forEach((el, index) => {

        text += `${index + 1}. ${el.dataset.custom || el.dataset.path}\n`;

        if (el.dataset.notes) {
            text += `Notes: ${el.dataset.notes}\n`;
        }

        text += "\n";

    });

    return text;
}

function exportNotes() {

    downloadFile(
        buildNotes(),
        "route_notes.txt",
        "text/plain"
    );
}

async function copyNotes() {

    try {

        await navigator.clipboard.writeText(buildNotes());

        alert("Copied!");

    } catch {

        alert("Failed to copy.");
    }
}

const exportFunctions = {
    route: exportRoute,
    notes: exportNotes,
    copy: copyNotes
};

document.querySelectorAll("#exportButtons button").forEach(button => {

    button.addEventListener("click", () => {

        const type = button.dataset.export;

        exportFunctions[type]?.();

    });

});

function getSaveId() {

    const title = (routeTitle.value || "untitled route")
        .trim()
        .toLowerCase()
        .replaceAll(" ", "_");

    return "route_" + title;
}

function buildRouteSnapshot() {

    const route = [];

    routeContainer.querySelectorAll(".libraryBlock").forEach((el, index) => {

        const item = {
            position: index
        };

        for (const key in el.dataset) {
            item[key] = el.dataset[key];
        }

        route.push(item);

    });

    return {
        id: getSaveId(),
        title: routeTitle.value || "Untitled Route",
        route: route,
        timestamp: Date.now()
    };
}

function autosave() {

    const save = buildRouteSnapshot();

    localStorage.setItem(
        save.id,
        JSON.stringify(save)
    );

    localStorage.setItem(
        "route_latest",
        save.id
    );
}

function loadLatest() {

    const id = localStorage.getItem("route_latest");

    if (!id) return;

    const raw = localStorage.getItem(id);

    if (!raw) return;

    importRoute(JSON.parse(raw));
}

function findSaveByTitle(title) {

    const target = title.toLowerCase().trim();

    for (let key in localStorage) {

        if (!key.startsWith("route_")) continue;

        try {

            const data = JSON.parse(localStorage.getItem(key));

            if ((data.title || "").toLowerCase().trim() === target) {
                return data;
            }

        } catch (e) {
            continue;
        }
    }

    return null;
}

function importRoute(save) {

    routeContainer.innerHTML = "";

    routeTitle.value = save.title || "";

    const route = save.route || [];

    route.forEach(item => {

        const el = document.createElement("div");

        el.className = "libraryBlock";

        // copy EVERYTHING dynamically
        for (const key in item) {

            if (key === "position") continue;

            el.dataset[key] = item[key];

        }

        el.textContent = item.custom || item.path;

        routeContainer.appendChild(el);

    });

    selectedRouteBlock = null;
    blockEditor.innerHTML = "Select a route block";

    updateLibraryBlocks();
    validateRoute();
    autosave();
}

const importBtn = document.getElementById("importBtn");
const importFile = document.getElementById("importFile");

importBtn.onclick = () => importFile.click();

importFile.addEventListener("change", async () => {

    const file = importFile.files[0];
    if (!file) return;

    const text = await file.text();
    const data = JSON.parse(text);

    importRoute(data);

    importFile.value = "";
});

document.getElementById("loadRecentBtn").onclick = () => {

    const id = localStorage.getItem("route_latest");

    if (!id) {
        alert("No recent route found");
        return;
    }

    const raw = localStorage.getItem(id);

    if (!raw) return;

    importRoute(JSON.parse(raw));
};