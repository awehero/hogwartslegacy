//route_maker.js

new Sortable(libraryRoot, {
    group: {
        name: "blocks",
        pull: "clone",
        put: false
    },
    draggable: ".libraryBlock",
    sort: false,
    animation: 150
});
// document.querySelectorAll(".folderContent").forEach(el => {
//     new Sortable(el, {
//         group: {
//             name: "blocks",
//             pull: "clone",
//             put: false
//         },
//         draggable: ".libraryBlock",
//         sort: false,
//         animation: 150
//     });
// });
new Sortable(routeContainer, {
    group: "blocks",
    animation: 150
});
/*const usedBlocks = new Set();

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

function makeLibrarySortable(el) {
    new Sortable(el, {
        group: {
            name: "blocks",
            pull: "clone",
            put: false
        },

        sort: false,

        filter: ".disabledBlock, .folder",

        onMove(evt) {

            if (evt.dragged.classList.contains("folder")) {
                return false;
            }

            if (evt.dragged.classList.contains("disabledBlock")) {
                return false;
            }
        }
    });
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
        folder.draggable = false;

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
        makeLibrarySortable(content);

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

        // Invalid block protection
        if (!block.dataset.name || block.dataset.name === "undefined") {
            block.remove();
            return;
        }

        const id = block.dataset.name;
        const repeatable = block.dataset.repeatable === "true";

        // Prevent duplicate non-repeatables
        if (!repeatable) {

            // Count how many already exist in route
            const existing = Array.from(routeContainer.children)
                .filter(el =>
                    el !== block &&
                    el.dataset.name === id
                );

            if (existing.length > 0) {
                block.remove();
                return;
            }

            usedBlocks.add(id);

            // Disable ONLY library versions
            document.querySelectorAll(".libraryBlock").forEach(el => {
                if (el.dataset.name === id) {
                    el.classList.add("disabledBlock");
                }
            });
        }

        finalize(block);
        updateErrors();
    },

    onRemove(evt) {
        const block = evt.item;

        // Ignore removals from library clone source
        if (block.dataset.origin !== "route") {
            return;
        }

        const id = block.dataset.name;
        const repeatable = block.dataset.repeatable === "true";

        if (!repeatable) {

            // Check if another copy still exists
            const stillExists = Array.from(routeContainer.children)
                .some(el => el.dataset.name === id);

            if (!stillExists) {
                usedBlocks.delete(id);

                document.querySelectorAll(".libraryBlock").forEach(el => {
                    if (el.dataset.name === id) {
                        el.classList.remove("disabledBlock");
                    }
                });
            }
        }

        updateErrors();
    },

    onEnd() {
        updateErrors();
    }
});*/