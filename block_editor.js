//block_editor.js
function openBlockEditor(block) {

    blockEditor.innerHTML = `
        <h2>${block.dataset.path}</h2>

        <label>
            Notes
        </label>

        <textarea id="blockNotes"></textarea>

        <label>
            Custom Name
        </label>

        <input id="blockCustomName" type="text">
    `;

    const notesInput =
        document.getElementById("blockNotes");

    const customNameInput =
        document.getElementById("blockCustomName");

    notesInput.value =
        block.dataset.notes || "";

    customNameInput.value =
        block.dataset.customName || "";

    notesInput.addEventListener("input", () => {

        block.dataset.notes =
            notesInput.value;

    });

    customNameInput.addEventListener("input", () => {

        block.dataset.customName =
            customNameInput.value;

        block.textContent =
            customNameInput.value || block.dataset.path;

    });

}

routeContainer.addEventListener("click", e => {

    const block = e.target.closest(".libraryBlock");

    if (!block) return;

    selectedRouteBlock = block;

    openBlockEditor(block);

});