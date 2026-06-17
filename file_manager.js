// file_manager.js

store = JSON.parse(localStorage.getItem("route_system") || '{}');
store.settings = store.settings || {};
store.lastActiveId = store.lastActiveId || null;
store.saves = store.saves || {};
//store.settings.numbered = store.settings.numbered || true;
localStorage.setItem("route_system", JSON.stringify(store));

function importRoute(save) {
    routeContainer.innerHTML = "";
    routeTitle.value = save.title || "";
    const route = save.route || [];
    route.forEach(item => {
        const el = document.createElement("div");
        el.className = "libraryBlock";
        for (const key in item) {
            if (key === "position") continue;
            el.dataset[key] = item[key];
        }
        el.textContent = item.custom || item.path;
        routeContainer.appendChild(el);
    });
    selectedRouteBlock = null;
    blockEditor.innerHTML = "Select a route block";
    somethingChanged();
}
function newRoute() {
    const id = crypto.randomUUID();
    store.lastActiveId = id;
    store.saves[id] = {
        id: id,
        title: "Untitled Route",
        route: [],
        timestamp: Date.now()
    };
    routeContainer.innerHTML = "";
    routeTitle.value = "Untitled Route";
    selectedRouteBlock = null;
    blockEditor.innerHTML = "Select a route block";
    somethingChanged();
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
        id: lastActiveId,
        title: routeTitle.value.trim() || "Untitled Route",
        route: route,
        timestamp: Date.now()
    };
}
function autosave() {
    const save = buildRouteSnapshot();
    store.saves[lastActiveId] = save;
    localStorage.setItem("route_system", JSON.stringify(store));
}
function somethingChanged() {
    updateLibraryBlocks();
    validateRoute();
    autosave();
}

routeTitle.onchange=()=>{
    somethingChanged();
};

if (store.lastActiveId != null && store.saves != {} && store.saves[lastActiveId]) {
    importRoute(store.saves[lastActiveId]);
} else {
    newRoute();
}
somethingChanged();







function getStore() {
    return JSON.parse(localStorage.getItem("route_system") || '{"saves":{}, "lastActiveId":"", "settings":{}}');
}

function setStore(store) {
    localStorage.setItem("route_system", JSON.stringify(store));
}

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
            custom: el.dataset.custom || "",
            instanceId: el.dataset.instanceId || "",
            name: el.dataset.name || "",
            notes: el.dataset.notes || "",
            path: el.dataset.path,
            repeatable: el.dataset.repeatable || "",
            splitIndex: el.dataset.splitIndex || "",
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
        JSON.stringify(save, null, 4),
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

document.getElementById("loadRouteBtn").onclick = () => {
    openPopup();
    renderSaveList();
};

function getAllSaves() {

    const saves = [];

    for (let key in localStorage) {

        if (!key.startsWith("route_")) continue;

        try {

            const data = JSON.parse(localStorage.getItem(key));

            saves.push(data);

        } catch (e) {
            continue;
        }
    }

    return saves.sort((a, b) => b.timestamp - a.timestamp);
}