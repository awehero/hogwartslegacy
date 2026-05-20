let libraryRoot = document.getElementById("blockLibrary");
let routeContainer = document.getElementById("routeContainer");

const F = "folder";
const B = "block";


// -----------------------------
// Recursive renderer
// -----------------------------
function renderNode(node, parent, name = null, path = []) {

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

        folder.dataset.collapsed = "false";

        header.style.cursor = "pointer";

        header.addEventListener("click", () => {

            let collapsed = folder.dataset.collapsed === "true";

            if (collapsed) {
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
            let newPath = [...path, node.name || name || "Folder"];
            for (let key in node.items) {
                renderNode(node.items[key], content, key, newPath);
            }
        }

        return;
    }

    // ---------------- BLOCK ----------------
    if (node.type === B) {

        let block = document.createElement("div");
        block.className = "libraryBlock";

        let fullPath = [...path, node.name || name].filter(Boolean);

        let displayName = fullPath.join(" - ");

        block.innerText = displayName;

        block.dataset.name = displayName;

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