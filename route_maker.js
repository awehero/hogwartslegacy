const libraryRoot = document.getElementById("blockLibrary");
const routeContainer = document.getElementById("routeContainer");
const errorPanel = document.getElementById("errorPanel");

const usedBlocks = new Set();

// =============================
// ERROR SYSTEM
// =============================
function updateErrors() {
    const blocks = Array.from(routeContainer.children);
    const errors = validateRoute(blocks);

    errorPanel.innerHTML = "";

    if (errors.length === 0) {
        errorPanel.innerHTML = "<div>No errors</div>";
        return;
    }

    for (const e of errors) {
        const div = document.createElement("div");
        div.className = "errorItem";
        div.innerText = e.message;
        errorPanel.appendChild(div);
    }
}

// =============================
// RENDER LIBRARY
// =============================
function renderNode(node, parent, key, path = []) {
    if (!node) return;

    // -------- FOLDER --------
    if (node.type === F) {
        const folder = document.createElement("div");
        folder.className = "folder";

        const header = document.createElement("div");
        header.className = "folderHeader";
        header.innerText = key;

        const content = document.createElement("div");
        content.className = "folderContent";

        folder.dataset.collapsed = "true";
        content.style.display = "none";

        header.onclick = () => {
            const c = folder.dataset.collapsed === "true";
            folder.dataset.collapsed = c ? "false" : "true";
            content.style.display = c ? "block" : "none";
        };

        folder.appendChild(header);
        folder.appendChild(content);
        parent.appendChild(folder);

        // ONLY library blocks allowed here
        new Sortable(content, {
            group: {
                name: "blocks",
                pull: "clone",
                put: false
            },
            sort: false
        });

        for (const k in node.items || {}) {
            renderNode(node.items[k], content, k, [...path, key]);
        }

        return;
    }

    // -------- BLOCK --------
    if (node.type === B) {
        const block = document.createElement("div");
        block.className = "libraryBlock";

        const fullPath = [...path, key].filter(Boolean);
        const name = fullPath.join(" - ");

        block.innerText = name;

        block.dataset.name = name;
        block.dataset.origin = "library";
        block.dataset.repeatable = node.repeatable ? "true" : "false";

        if (node.after) {
            block.dataset.after = JSON.stringify(node.after);
        }

        parent.appendChild(block);
    }
}

// =============================
// BUILD LIBRARY
// =============================
function buildLibrary() {
    libraryRoot.innerHTML = "";

    for (const k in libraryData) {
        renderNode(libraryData[k], libraryRoot, k);
    }
}

buildLibrary();

// =============================
// FINALIZE BLOCK
// =============================
function finalize(block) {
    block.className = "routeBlock";
    block.dataset.origin = "route";

    block.innerHTML = `<b>${block.dataset.name}</b>`;
}

// =============================
// ROUTE SYSTEM
// =============================
new Sortable(routeContainer, {
    group: {
        name: "blocks",
        pull: true,
        put: true
    },

    animation: 150,

    onAdd(evt) {
        const block = evt.item;

        // HARD GUARD
        if (!block.dataset.name || block.dataset.name === "undefined") {
            block.remove();
            return;
        }

        const id = block.dataset.name;
        const repeatable = block.dataset.repeatable === "true";

        if (!repeatable && usedBlocks.has(id)) {
            block.remove();
            return;
        }

        if (!repeatable) {
            usedBlocks.add(id);
            document.querySelectorAll(`[data-name="${id}"]`).forEach(el => {
                if (el.dataset.origin === "library") {
                    el.classList.add("disabledBlock");
                }
            });
        }

        finalize(block);
        updateErrors();
    },

    onRemove(evt) {
        const block = evt.item;

        const id = block.dataset.name;
        const repeatable = block.dataset.repeatable === "true";

        if (!repeatable) {
            usedBlocks.delete(id);
            document.querySelectorAll(`[data-name="${id}"]`).forEach(el => {
                el.classList.remove("disabledBlock");
            });
        }

        updateErrors();
    }
});