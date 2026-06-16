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
        const el = evt.item;
        el.dataset.instanceId = makeId();
        el.dataset.splitParent = el.dataset.splitParent || "";
        el.dataset.splitIndex = el.dataset.splitIndex || "0";
        somethingChanged();
    },

    onRemove() {
        somethingChanged();
    },

    onSort() {
        somethingChanged();
    }
});

new Sortable(trashZone, {
    group: {
        name: "blocks",
        pull: false,
        put: function(to, from) {
            return from.el === routeContainer;
        }
    },
    animation: 150,

    onAdd: function(evt) {
        evt.item.remove();

        if (selectedRouteBlock === evt.item) {
            selectedRouteBlock = null;
            blockEditor.innerHTML = "Select a route block";
        }
        somethingChanged();
        trashZone.classList.remove("hovering");
    },

    onOver: function() {
        trashZone.classList.add("hovering");
    },

    onOut: function() {
        trashZone.classList.remove("hovering");
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
function renderSearchResults(search){
    let html="";
    Object.keys(blockLookup).forEach(path=>{
        if(!path.toLowerCase().includes(search.toLowerCase()))return;
        const data=blockLookup[path];
        html += `
        <button
            class="libraryBlock"
            data-name="${path}"
            data-path="${path}"
            data-repeatable="${data.repeatable===true}"
            data-split="${data.split===true}"
        >
            ${path}
        </button>
        `;
    });

    libraryRoot.innerHTML = html;

    new Sortable(libraryRoot,{
        group:{
            name:"blocks",
            pull:"clone",
            put:false
        },
        draggable: ".libraryBlock",
        filter: ".disabled",
        sort: false,
        animation: 150
    });

    somethingChanged();
}
librarySearch.addEventListener("input",()=>{
    const value=librarySearch.value.trim();
    if(value===""){
        libraryRoot.innerHTML=finalHTML;
        document.querySelectorAll(".folderContent").forEach(el=>{
            new Sortable(el,{
                group:{
                    name:"blocks",
                    pull:"clone",
                    put:false
                },
                draggable:".libraryBlock",
                filter:".disabled",
                sort:false,
                animation:150
            });
        });
        somethingChanged();
        return;
    }
    renderSearchResults(value);
});
somethingChanged();