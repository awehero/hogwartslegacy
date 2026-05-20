let libraryRoot = document.getElementById("blockLibrary");
let routeContainer = document.getElementById("routeContainer");

let usedBlocks = new Set();


// =============================
// Recursive renderer
// =============================
function renderNode(node, parent, key = null, path = []) {

    if (!node) return;

    // ================= FOLDER =================
    if (node.type === F) {

        let folder = document.createElement("div");
        folder.className = "folder";

        let header = document.createElement("div");
        header.className = "folderHeader";
        header.innerText = node.name || key || "Folder";

        let content = document.createElement("div");
        content.className = "folderContent";

        // start collapsed
        folder.dataset.collapsed = "true";
        content.style.display = "none";

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

        // attach drag to this folder only
        new Sortable(content, {
            group: {
                name: "shared",
                pull: "clone",
                put: false
            },
            sort: false,
            animation: 150
        });

        let newPath = [...path, node.name || key || "Folder"];

        if (node.items) {
            for (let k in node.items) {
                renderNode(node.items[k], content, k, newPath);
            }
        }

        return;
    }


    // ================= BLOCK =================
    if (node.type === B) {

        let block = document.createElement("div");
        block.className = "libraryBlock";

        let fullPath = [...path, node.name || key].filter(Boolean);
        let displayName = fullPath.join(" - ");

        block.innerText = displayName;

        block.dataset.name = displayName;
        block.dataset.origin = "library";
        block.dataset.repeatable = node.repeatable ? "true" : "false";

        parent.appendChild(block);
    }
}


// =============================
// Build library
// =============================
function buildLibrary() {

    libraryRoot.innerHTML = "";

    for (let key in libraryData) {
        renderNode(libraryData[key], libraryRoot, key, []);
    }
}

buildLibrary();


// =============================
// Route renderer
// =============================
function renderRouteBlock(data) {
    return `<b>${data.name}</b>`;
}


// =============================
// ROUTE SYSTEM
// =============================
new Sortable(routeContainer, {

    group: {
        name: "shared",
        pull: true,
        put: true
    },

    animation: 150,


    // ================= ADD TO ROUTE =================
    onAdd: function (evt) {

        let block = evt.item;

        let id = block.dataset.name;
        let repeatable = block.dataset.repeatable === "true";

        // reject duplicates if not repeatable
        if (!repeatable && usedBlocks.has(id)) {
            block.remove();
            return;
        }

        if (!repeatable) {
            usedBlocks.add(id);

            document.querySelectorAll('[data-origin="library"]').forEach(el => {
                if (el.dataset.name === id) {
                    el.classList.add("disabledBlock");
                }
            });
        }

        block.classList.remove("libraryBlock");
        block.classList.add("routeBlock");

        block.dataset.origin = "route";

        block.innerHTML = renderRouteBlock({
            name: block.dataset.name
        });
    },


    // ================= REMOVE FROM ROUTE =================
    onRemove: function (evt) {

        let block = evt.item;

        let id = block.dataset.name;
        let repeatable = block.dataset.repeatable === "true";

        if (!repeatable) {

            usedBlocks.delete(id);

            document.querySelectorAll('[data-origin="library"]').forEach(el => {
                if (el.dataset.name === id) {
                    el.classList.remove("disabledBlock");
                }
            });
        }
    }
});