import { validateRoute } from "./routeValidator.js";
const libraryRoot = document.getElementById("blockLibrary");
const routeContainer = document.getElementById("routeContainer");

// track used non-repeatable blocks
const usedBlocks = new Set();

const errorPanel = document.getElementById("errorPanel");

function updateErrors() {

    const blocks = Array.from(routeContainer.children);

    const errors = validateRoute(blocks);

    errorPanel.innerHTML = "";

    if (errors.length === 0) {
        errorPanel.innerHTML = "<div>No errors</div>";
        return;
    }

    for (const err of errors) {
        const div = document.createElement("div");
        div.className = "errorItem";
        div.innerText = err.message;
        errorPanel.appendChild(div);
    }
}

// =============================
// Recursive renderer
// =============================
function renderNode(node, parent, key = null, path = []) {
    if (!node) return;

    // ================= FOLDER =================
    if (node.type === "F") {

        const folder = document.createElement("div");
        folder.className = "folder";

        const header = document.createElement("div");
        header.className = "folderHeader";
        header.innerText = key || "Folder";

        const content = document.createElement("div");
        content.className = "folderContent";

        folder.dataset.collapsed = "true";
        content.style.display = "none";

        header.addEventListener("click", () => {
            const collapsed = folder.dataset.collapsed === "true";
            folder.dataset.collapsed = collapsed ? "false" : "true";
            content.style.display = collapsed ? "block" : "none";
        });

        folder.appendChild(header);
        folder.appendChild(content);
        parent.appendChild(folder);

        // IMPORTANT: library must allow dragging OUT AND BACK IN
        new Sortable(content, {
            group: {
                name: "libraryBlocks",
                pull: "clone",
                put: false   // IMPORTANT: cannot drop folders or route items here
            },
            sort: false,
            animation: 150
        });

        const newPath = [...path, key || "Folder"];

        for (const k in node.items || {}) {
            renderNode(node.items[k], content, k, newPath);
        }

        return;
    }

    // ================= BLOCK =================
    if (node.type === "B") {

        const block = document.createElement("div");
        block.className = "libraryBlock";

        const fullPath = [...path, key].filter(Boolean);
        const displayName = fullPath.join(" - ");

        block.innerText = displayName;

        block.dataset.name = displayName;
        block.dataset.origin = "library";
        block.dataset.repeatable = node.repeatable ? "true" : "false";
        if (node.after) {
            block.dataset.after = JSON.stringify(node.after);
        }

        parent.appendChild(block);
    }
}

// =============================
// Build library
// =============================
function buildLibrary() {
    libraryRoot.innerHTML = "";

    for (const key in libraryData) {
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
        name: "libraryBlocks",
        pull: true,
        put: true
    },
    animation: 150,

    // ================= ADD TO ROUTE =================
    onAdd(evt) {
        const block = evt.item;
        if (!block.dataset.name || block.dataset.name === "undefined") {
            block.remove();
            return;
        }
        const id = block.dataset.name;
        const repeatable = block.dataset.repeatable === "true";

        // prevent duplicates
        if (!repeatable && usedBlocks.has(id)) {
            block.remove();
            return;
        }

        // mark used + disable library copy
        if (!repeatable) {
            usedBlocks.add(id);
            updateLibraryDisabledState(id, true);
        }

        finalizeRouteBlock(block);
        updateErrors();
    },

    // ================= REMOVE FROM ROUTE =================
    onRemove(evt) {
        const block = evt.item;

        const id = block.dataset.name;
        const repeatable = block.dataset.repeatable === "true";

        if (!repeatable) {
            usedBlocks.delete(id);
            updateLibraryDisabledState(id, false);
        }
        updateErrors();
    }
});

// =============================
// Helpers
// =============================

function updateLibraryDisabledState(id, disabled) {
    document.querySelectorAll('[data-origin="library"]').forEach(el => {
        if (el.dataset.name === id) {
            el.classList.toggle("disabledBlock", disabled);
        }
    });
}

function finalizeRouteBlock(block) {
    block.classList.remove("libraryBlock");
    block.classList.add("routeBlock");

    block.dataset.origin = "route";

    block.innerHTML = renderRouteBlock({
        name: block.dataset.name
    });
}