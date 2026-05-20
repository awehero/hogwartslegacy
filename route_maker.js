let libraryRoot = document.getElementById("blockLibrary");
let routeContainer = document.getElementById("routeContainer");


// -----------------------------
// Render Library (recursive)
// -----------------------------
function renderNode(node, parent, idPath = "") {

    let currentPath = idPath + "/" + (node.name || "");

    // FOLDER
    if (node.type === "folder") {

        let folder = document.createElement("div");
        folder.className = "folder";

        let header = document.createElement("div");
        header.className = "folderHeader";
        header.innerText = node.name || "Folder";

        let content = document.createElement("div");
        content.className = "folderContent";

        folder.appendChild(header);
        folder.appendChild(content);
        parent.appendChild(folder);

        for (let key in node.children) {
            renderNode(node.children[key], content, currentPath);
        }

        return;
    }

    // BLOCK
    if (node.type === "block") {

        let block = document.createElement("div");
        block.className = "libraryBlock";

        block.innerText = node.name;
        block.dataset.id = node.id || currentPath;
        block.dataset.name = node.name;

        parent.appendChild(block);
    }
}


// -----------------------------
// Build full library UI
// -----------------------------
function buildLibrary() {
    renderNode(libraryData, libraryRoot);
}

buildLibrary();


// -----------------------------
// Route renderer (simple)
// -----------------------------
function renderRouteBlock(data) {

    if (!data) return "<b>Unknown Block</b>";

    return `<b>${data.name}</b>`;
}


// -----------------------------
// Make ONLY blocks draggable
// -----------------------------
function initLibraryDrag() {

    document.querySelectorAll(".libraryBlock").forEach(block => {

        new Sortable(block.parentElement, {
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

        let name = block.dataset.name;

        block.innerHTML = renderRouteBlock({ name });
    }
});