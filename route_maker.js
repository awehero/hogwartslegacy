let library = document.getElementById("blockLibrary");
let routeContainer = document.getElementById("routeContainer");

new Sortable(library, {
    group: {
        name: "shared",
        pull: "clone",
        put: false
    },

    sort: false,

    animation: 150
});

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

        let type = block.dataset.type;

        if (type == "quest") {

            block.innerHTML = `
                <b>Main Quest</b>
                <br>
                Duration: 300s
            `;
        }

        if (type == "travel") {

            block.innerHTML = `
                <b>Travel Segment</b>
                <br>
                Duration: 45s
            `;
        }

        if (type == "item") {

            block.innerHTML = `
                <b>Item Pickup</b>
                <br>
                Duration: 10s
            `;
        }

        if (type == "enemy") {

            block.innerHTML = `
                <b>Enemy Encounter</b>
                <br>
                Duration: 20s
            `;
        }
    }
});