let libraryRoot = document.getElementById("blockLibrary");
let routeContainer = document.getElementById("routeContainer");


// -----------------------------
// Build Library UI
// -----------------------------
function buildLibrary() {

    for (let category in libraryData) {

        let folder = document.createElement("div");
        folder.className = "folder";

        let header = document.createElement("div");
        header.className = "folderHeader";
        header.innerText = category;

        let content = document.createElement("div");
        content.className = "folderContent";

        libraryData[category].forEach(block => {

            let div = document.createElement("div");
            div.className = "libraryBlock";

            div.dataset.id = block.id;
            div.dataset.type = category;

            div.innerText = block.name;

            content.appendChild(div);
        });

        folder.appendChild(header);
        folder.appendChild(content);
        libraryRoot.appendChild(folder);
    }
}


// -----------------------------
// Find block in library data
// -----------------------------
function findBlock(id) {

    for (let category in libraryData) {

        let found = libraryData[category].find(b => b.id === id);

        if (found) {
            return {
                category,
                data: found
            };
        }
    }

    return null;
}


// -----------------------------
// Route renderer
// -----------------------------
function renderRouteBlock(type, data) {

    if (!data) return "<b>Unknown Block</b>";

    let title = data.name;

    if (type === "quests") {
        return `<b>${title}</b><br>Quest`;
    }

    if (type === "travel") {
        return `<b>${title}</b><br>Travel`;
    }

    if (type === "collect") {
        return `<b>${title}</b><br>Collect`;
    }

    if (type === "enemy") {
        return `<b>${title}</b><br>Enemy`;
    }

    return `<b>${title}</b>`;
}


// -----------------------------
// Init library
// -----------------------------
buildLibrary();


// -----------------------------
// Make ONLY blocks draggable (not folders)
// -----------------------------
function initLibraryDrag() {

    document.querySelectorAll(".folderContent").forEach(container => {

        new Sortable(container, {
            group: {
                name: "shared",
                pull: "clone",
                put: false
            },
            sort: false,
            animation: 150
        });

    });
}

initLibraryDrag();


// -----------------------------
// Route container drag/drop
// -----------------------------
new Sortable(routeContainer, {

    group: {
        name: "shared",
        pull: true,
        put: true
    },

    animation: 150,

    onAdd: function (evt) {

        let block = evt.item;
        let id = block.dataset.id;
        let type = block.dataset.type;

        let result = findBlock(id);

        block.classList.remove("libraryBlock");
        block.classList.add("routeBlock");

        block.innerHTML = renderRouteBlock(type, result ? result.data : null);
    }
});