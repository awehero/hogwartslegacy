//route_maker.js

document.querySelectorAll(".folderContent").forEach(el => {
    new Sortable(el, {
        group: {
            name: "blocks",
            pull: "clone",
            put: false
        },
        draggable: ".libraryBlock",
        filter: ".disabled",
        sort: false,
        animation: 150
    });
});

new Sortable(routeContainer, {
    group: "blocks",
    animation: 150,

    onAdd() {
        updateLibraryBlocks();
        validateRoute();
    },

    onRemove() {
        updateLibraryBlocks();
        validateRoute();
    },

    onSort() {
        updateLibraryBlocks();
        validateRoute();
    }
});

function updateLibraryBlocks() {

    const usedPaths = [];

    routeContainer.querySelectorAll(".libraryBlock").forEach(el => {
        usedPaths.push(el.dataset.path);
    });

    libraryRoot.querySelectorAll(".libraryBlock").forEach(el => {

        if (el.dataset.repeatable === "true") {
            el.classList.remove("disabled");
            return;
        }

        if (usedPaths.includes(el.dataset.path)) {
            el.classList.add("disabled");
        } else {
            el.classList.remove("disabled");
        }

    });

}
updateLibraryBlocks();
validateRoute();