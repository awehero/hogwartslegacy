let library = document.getElementById("blockLibrary");
let routeContainer = document.getElementById("routeContainer");

function buildLibrary() {

    for (let category in libraryData) {

        let folder = document.createElement("div");
        folder.className = "folder";

        let header = document.createElement("div");
        header.className = "folderHeader";
        header.innerText = category;

        let content = document.createElement("div");
        content.className = "folderContent";

        libraryData[category].forEach(block => {

            let div = document.createElement("div");
            div.className = "libraryBlock";

            div.dataset.id = block.id;
            div.dataset.type = category;

            div.innerText = block.name;

            content.appendChild(div);
        });

        folder.appendChild(header);
        folder.appendChild(content);
        library.appendChild(folder);
    }
}

buildLibrary();

function renderRouteBlock(type, block) {

    let title = block.name || "Unknown";

    let duration = block.duration || 0;

    if (type == "quest") {
        return `<b>${title}</b><br>Quest<br>${duration}s`;
    }

    if (type == "travel") {
        return `<b>${title}</b><br>Travel<br>${duration}s`;
    }

    if (type == "item") {
        return `<b>${title}</b><br>Item Pickup<br>${duration}s`;
    }

    if (type == "enemy") {
        return `<b>${title}</b><br>Enemy Encounter<br>${duration}s`;
    }

    return `<b>${title}</b>`;
}

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
        let id = block.dataset.id;

        // find quest in library
        let quest = libraryData.quests.find(q => q.id === id);

        block.classList.remove("libraryBlock");
        block.classList.add("routeBlock");

        // clear original content
        block.innerHTML = "";

        // if it's a quest, expand it
        if (quest) {

            let title = document.createElement("div");
            title.innerHTML = "<b>" + quest.name + "</b>";
            block.appendChild(title);

            quest.steps.forEach(step => {
                let stepDiv = document.createElement("div");
                stepDiv.className = "stepBlock";
                stepDiv.innerText = step;
                block.appendChild(stepDiv);
            });
        }
    }
});