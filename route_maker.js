let libraryRoot = document.getElementById("blockLibrary");
let routeContainer = document.getElementById("routeContainer");


// -----------------------------
// Recursive renderer (FIXED)
// -----------------------------
function renderNode(node, parent) {

    if (!node) return;

    // FOLDER
    if (node.type === "folder") {
        let folder = document.createElement("div");
        folder.className = "folder";

        let header = document.createElement("div");
        header.className = "folderHeader";
        header.innerText = node.name || "Folder";

        let content = document.createElement("div");
        content.className = "folderContent";

        // default: expanded
        folder.dataset.collapsed = "false";

        header.style.cursor = "pointer";

        header.addEventListener("click", () => {

            let isCollapsed = folder.dataset.collapsed === "true";

            if (isCollapsed) {
                content.style.display = "block";
                folder.dataset.collapsed = "false";
            } else {
                content.style.display = "none";
                folder.dataset.collapsed = "true";
            }
        });

        folder.appendChild(header);
        folder.appendChild(content);
        parent.appendChild(folder);

        if (node.children) {
            for (let key in node.children) {
                renderNode(node.children[key], content);
            }
        }

        return;
    }

    // BLOCK
    if (node.type === "block") {

        let block = document.createElement("div");
        block.className = "libraryBlock";

        block.innerText = node.name;

        block.dataset.name = node.name;

        parent.appendChild(block);
    }
}


// -----------------------------
// Build library
// -----------------------------
function buildLibrary() {
    libraryRoot.innerHTML = "";
    for (let key in libraryData.children) {
        renderNode(libraryData.children[key], libraryRoot);
    }
}

buildLibrary();


// -----------------------------
// Route render (simple)
// -----------------------------
function renderRouteBlock(data) {
    return `<b>${data.name}</b>`;
}


// -----------------------------
// Drag setup (FIXED)
// -----------------------------
function initDrag() {

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

initDrag();


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