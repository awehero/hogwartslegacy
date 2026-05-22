//build_library.js
function buildLibrary(data, name, path = "") {
    let html = "";
    const fullPath =
        path === ""
        ? name
        : `${path} - ${name}`;
    if (data.type === F) {
        html += `
        <div class="libraryFolder">
            <button class="folderButton">
                ${name}
            </button>
            <div class="folderContent">
        `;
        for (const k in data.items) {
            html += buildLibrary(
                data.items[k],
                k,
                fullPath
            );
        }
        html += `
            </div>
        </div>
        `;
    } else {
        html += `
        <div
            class="libraryBlock"
            data-name="${name}"
            data-path="${fullPath}"
        >
            ${name}
        </div>
        `;
    }
    return html;
}

let finalHTML = "";
for (const k in libraryData) {
    finalHTML += buildLibrary(libraryData[k], k);
}
libraryRoot.innerHTML = finalHTML;

document.querySelectorAll(".folderButton").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        content.style.display =
            content.style.display === "none"
            ? "block"
            : "none";
    });
});
libraryRoot.querySelectorAll("button").forEach(btn=>btn.click());