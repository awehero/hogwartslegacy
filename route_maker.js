let libraryRoot = document.getElementById("blockLibrary");
let routeContainer = document.getElementById("routeContainer");

const F = "folder";
const B = "block";


// -----------------------------
// Recursive renderer
// -----------------------------
function renderNode(node, parent, name = null) {

    if (!node) return;

    // ---------------- FOLDER ----------------
    if (node.type === F) {

        let folder = document.createElement("div");
        folder.className = "folder";

        let header = document.createElement("div");
        header.className = "folderHeader";
        header.innerText = node.name || name || "Folder";

        let content = document.createElement("div");
        content.className = "folderContent";

        folder.appendChild(header);
        folder.appendChild(content);
        parent.appendChild(folder);

        // attach drag to THIS folder ONLY
        new Sortable(content, {
            group: {
                name: "shared",
                pull: "clone",
                put: false
            },
            sort: false,
            animation: 150
        });

        if (node.items) {
            for (let key in node.items) {
                renderNode(node.items[key], content, key);
            }
        }

        return;
    }

    // ---------------- BLOCK ----------------
    if (node.type === B) {

        let block = document.createElement("div");
        block.className = "libraryBlock";

        block.innerText = node.name || name || "Block";

        // IMPORTANT: store name for route
        block.dataset.name = node.name || name;

        parent.appendChild(block);
    }
}


// -----------------------------
// Build library
// -----------------------------
function buildLibrary() {
    libraryRoot.innerHTML = "";

    for (let key in libraryData) {
        renderNode(libraryData[key], libraryRoot, key);
    }
}

buildLibrary();


// -----------------------------
// Route renderer
// -----------------------------
function renderRouteBlock(data) {
    return `<b>${data.name}</b>`;
}


// -----------------------------
// Route container
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

        block.classList.remove("libraryBlock");
        block.classList.add("routeBlock");

        block.innerHTML = renderRouteBlock({
            name: block.dataset.name
        });
    }
});