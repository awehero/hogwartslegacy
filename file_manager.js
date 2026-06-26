// file_manager.js

function importRoute(save) {
    routeContainer.innerHTML = "";
    routeTitle.value = save.title || "";
    const route = save.route || [];
    route.forEach(item => {
        const el = document.createElement("button");
        el.className = "libraryBlock";
        for (const key in item) {
            if (key === "position") continue;
            el.dataset[key] = item[key];
        }
        //el.textContent = item.custom || item.path;
        const nameEl = document.createElement("div");
        nameEl.className = "routeBlockName";
        nameEl.textContent = item.name || item.path || "";

        const notesEl = document.createElement("div");
        notesEl.className = "routeBlockNotes";
        notesEl.textContent = item.notes || "";

        const durationEl = document.createElement("div");
        durationEl.className = "routeBlockDuration";
        durationEl.textContent = item.duration || "";

        el.append(nameEl, notesEl, durationEl);
        routeContainer.appendChild(el);
    });
    store.lastActiveId = save.id;
    selectedRouteBlock = null;
    blockEditor.innerHTML = "Select a route block";
    somethingChanged();
    closePopup();
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
    closePopup();
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
        id: store.lastActiveId,
        title: routeTitle.value.trim() || "Untitled Route",
        route: route,
        timestamp: Date.now()
    };
}
function autosave() {
    const save = buildRouteSnapshot();
    store.saves[store.lastActiveId] = save;
    localStorage.setItem("route_system", JSON.stringify(store));
}
function somethingChanged() {
    updateLibraryBlocks();
    validateRoute();
    autosave();
    if (routesMenu.style.display == "flex") {
        displayRoutes();
    }
}
function buildNotes(save) {
    const s = store.settings.notes;
    let text = "";
    text += save.title.trim();
    text += "\n".repeat(s.titleSpacing);
    save.route.forEach((itm, index) => {
        let line = "";
        if (s.numbered) {
            line += `${index + 1}. `;
        }
        line += itm.custom || itm.path;
        text += line + "\n";
        if (itm.notes) {
            if (s.showNotesLabel) {
                text += "Notes: ";
            }
            text += itm.notes + "\n";
        }
        text += "\n".repeat(s.blockSpacing);
    });
    return text;
}
async function copyNotes(save) {
    const text = buildNotes(save);
    try {
        await navigator.clipboard.writeText(text);
        alert("Copied!");
    } catch (error) {
        try {
            const textarea = document.createElement("textarea");
            textarea.value = text;
            textarea.style.position = "fixed";
            textarea.style.left = "-9999px";
            document.body.appendChild(textarea);
            textarea.select();
            const success = document.execCommand("copy");
            document.body.removeChild(textarea);
            if (success) {
                alert("Copied!");
            } else {
                throw new Error();
            }
        } catch {
            alert("Failed to copy.");
        }
    }
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
function exportNotes(save) {
    downloadFile(
        buildNotes(save),
        `${save.title}.txt`,
        "text/plain"
    );
}
function exportRoute(save) {
    downloadFile(
        JSON.stringify(save, null, 4),
        `${save.title}.json`,
        "application/json"
    );
}
function deleteRoute(save) {
    let previousId = store.lastActiveId;
    importRoute(save);
    permanentDelete.style.display = "flex";
    cancelDelete.style.display = "flex";
    permanentDelete.dataset.previousId = previousId;
    permanentDelete.dataset.deleteId = save.id;
    alert("Please double check that this is the route you want to delete.\nCancel - Yellow ⊗\nDelete - Red 🗑️");
}
permanentDelete.onclick = function() {
    let ans = prompt("Are you sure you want to delete? This cannot be undone.\nType y to delete.");
    if ((ans || "").toLowerCase() === "y") {
        let deleteId = permanentDelete.dataset.deleteId;
        let previousId = permanentDelete.dataset.previousId;
        delete store.saves[deleteId];
        if (store.saves[previousId]) {
            importRoute(store.saves[previousId]);
        } else {
            newRoute();
        }
        permanentDelete.dataset.previousId = "";
        permanentDelete.dataset.deleteId = "";
        permanentDelete.style.display = "none";
        cancelDelete.style.display = "none";
    }
};
cancelDelete.onclick = function() {
    let previousId = permanentDelete.dataset.previousId;
    permanentDelete.style.display = "none";
    cancelDelete.style.display = "none";
    importRoute(store.saves[previousId]);
    permanentDelete.dataset.previousId = "";
    permanentDelete.dataset.deleteId = "";
};
function loadFiles(accept, maxFiles, callback) {
    const input = document.getElementById("fileLoader");
    input.accept = accept;
    input.multiple = maxFiles > 1;
    input.onchange = async () => {
        const files = [...input.files];
        if (files.length === 0) {
            return;
        }
        if (files.length > maxFiles) {
            alert(`Select at most ${maxFiles} JSON file(s).`);
            input.value = "";
            return;
        }
        try {
            const data = await Promise.all(
                files.map(file => file.text())
            );
            callback(maxFiles === 1 ? data[0] : data);
        } catch (error) {
            console.error(error);
            alert("Failed to read file(s).");
        }
        input.value = "";
    };
    input.click();
}

function routeDisplayFunction(type, saveId) {
    let save = store.saves[saveId];
    switch (type) {
        case "openRoute":
            importRoute(save);
            break;
        case "exportRoute":
            exportRoute(save)
            break;
        case "exportNotes":
            exportNotes(save);
            break;
        case "copyNotes":
            copyNotes(save);
            break;
        case "deleteRoute":
            deleteRoute(save);
            break;
        default:
            alert("Unknown route function!");
            break;
    }
}

routeTitle.onchange=()=>{
    somethingChanged();
};
document.getElementById("importRouteBtn").onclick = function() {
    loadFiles(".json", 79, texts => {
        texts.forEach(text => {
            let save = JSON.parse(text);
            store.saves[save.id] = save;
        });
        somethingChanged();
    });
};
document.getElementById("importEverything").onclick = function() {
    loadFiles(".json", 1, text => {
        let data = JSON.parse(text);
        store.settings = data.settings;
        store.lastActiveId = data.lastActiveId;
        store.saves = {
            ...store.saves,
            ...data.saves
        };
        somethingChanged();
    });
};
document.getElementById("exportEverything").onclick = function() {
    downloadFile(
        JSON.stringify(store, null, 4),
        "awehero_route_maker_data.json",
        "application/json"
    );
};

if (store.lastActiveId != "" && store.saves[store.lastActiveId]) {
    importRoute(store.saves[store.lastActiveId]);
} else {
    newRoute();
}
somethingChanged();