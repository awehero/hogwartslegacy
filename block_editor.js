//block_editor.js
function openBlockEditor(block) {
    blockEditor.innerHTML = `
    <div>${block.dataset.path}</div>
    <label>Custom name</label>
    <input id="custom">
    <label>Notes</label>
    <textarea id="notes"></textarea>
    <button id="splitBtn">Split</button>
    <button id="deleteBtn" style="margin-top:10px;background:#a33;color:white;">Delete</button>
    `;

    const notes = document.getElementById("notes");
    const custom = document.getElementById("custom");

    notes.value = block.dataset.notes || "";
    custom.value = block.dataset.custom || "";

    notes.oninput = () => {
        block.dataset.notes = notes.value;
        somethingChanged();
    };

    custom.oninput = () => {
        block.dataset.custom = custom.value;
        block.textContent = custom.value || block.dataset.path;
        somethingChanged();
    };

    document.getElementById("splitBtn").onclick = function() {

        const clone = block.cloneNode(true);

        clone.dataset.instanceId = makeId();
        clone.dataset.splitParent = block.dataset.instanceId;

        block.after(clone);

        openBlockEditor(block);
        somethingChanged();
    };

    document.getElementById("deleteBtn").onclick = function() {
        block.remove();
        selectedRouteBlock = null;
        blockEditor.innerHTML = "Select a route block";
        somethingChanged();
    };
}

routeContainer.addEventListener("click", e => {
    const block = e.target.closest(".libraryBlock");
    if (!block) return;

    selectedRouteBlock = block;

    document.querySelectorAll(".routeSelected").forEach(el => {
        el.classList.remove("routeSelected");
    });

    block.classList.add("routeSelected");

    openBlockEditor(block);
});