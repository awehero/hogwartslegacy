//block_editor.js
function openBlockEditor(block) {
    blockEditor.innerHTML = `
    <div>${block.dataset.path}</div>
    <br>
    <label>Name</label>
    <input id="name">
    <label>Notes</label>
    <textarea id="notes" rows="4"></textarea>
    <label>Duration (s)</label>
    <input id="duration" type="number">
    <button id="splitBtn">Split</button>
    <button id="deleteBtn" style="margin-top:10px;background:#a33;color:white;">Delete</button>
    `;

    const notes = document.getElementById("notes");
    const name = document.getElementById("name");
    const duration = document.getElementById("duration");

    notes.value = block.dataset.notes || "";
    name.value = [...block.children].find(el => el.classList.contains("routeBlockName")).innerText;
    duration.value = block.dataset.duration || "";

    notes.oninput = () => {
        block.dataset.notes = notes.value;
        [...block.children].find(el => el.classList.contains("routeBlockNotes")).innerText = notes.value
        somethingChanged();
    };

    name.oninput = () => {
        block.dataset.name = name.value;
        [...block.children].find(el => el.classList.contains("routeBlockName")).innerText = name.value;
        somethingChanged();
    };

    duration.oninput = () => {
        block.dataset.duration = duration.value;
        [...block.children].find(el => el.classList.contains("routeBlockDuration")).innerText = formatDuration(duration.value);
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