//block_editor.js
function openBlockEditor(block){
    blockEditor.innerHTML=`
        <div>${block.dataset.path}</div>
        <label>Notes</label>
        <textarea id="notes"></textarea>
        <label>Custom name</label>
        <input id="custom">
    `;

    const notes=document.getElementById("notes");
    const custom=document.getElementById("custom");

    notes.value=block.dataset.notes||"";
    custom.value=block.dataset.custom||"";

    notes.oninput=()=>block.dataset.notes=notes.value;

    custom.oninput=()=>{
        block.dataset.custom=custom.value;
        block.textContent=custom.value||block.dataset.path;
    };
}

routeContainer.addEventListener("click",e=>{
    const block=e.target.closest(".libraryBlock");
    if(!block)return;

    selectedRouteBlock=block;

    document.querySelectorAll(".routeSelected").forEach(el=>{
        el.classList.remove("routeSelected");
    });

    block.classList.add("routeSelected");

    openBlockEditor(block);
});