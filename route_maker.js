//route_maker.js

function makeId(){
    return Math.random().toString(36).slice(2);
}

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

    onAdd: function(evt){
        const el=evt.item;
        el.dataset.instanceId=makeId();
        el.dataset.splitParent=el.dataset.splitParent||"";
        el.dataset.splitIndex=el.dataset.splitIndex||"0";
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

function updateLibraryBlocks(){
    const used={};

    routeContainer.querySelectorAll(".libraryBlock").forEach(el=>{
        const path=el.dataset.path;
        used[path]=true;
    });

    libraryRoot.querySelectorAll(".libraryBlock").forEach(el=>{
        const path=el.dataset.path;
        const repeatable=el.dataset.repeatable==="true";

        if(repeatable){
            el.classList.remove("disabled");
            return;
        }

        if(used[path]){
            el.classList.add("disabled");
        }else{
            el.classList.remove("disabled");
        }
    });
}
updateLibraryBlocks();
validateRoute();