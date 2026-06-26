//build_library.js
function buildLibrary(data, name, path = "") {
    let html = "";
    let fullPath = "";
    switch (path) {
        case "":
        case "Custom":
            fullPath = name;
            break;
        default:
            fullPath = `${path} - ${name}`;
    }
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
        <button
            class="libraryBlock"
            data-name="${name}"
            data-path="${fullPath}"
            data-repeatable="${data.repeatable === true}"
            data-split="${data.split === true}"
        >
            ${fullPath}
            <div class="routeBlockNotes"></div>
            <div class="routeBlockDuration"></div>
        </button>
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

//Block Lookup Table
const blockLookup = {};

function buildBlockLookup(data, name, path = "") {

    const fullPath =
        path === ""
        ? name
        : `${path} - ${name}`;

    if (data.type === F) {

        for (const k in data.items) {
            buildBlockLookup(data.items[k], k, fullPath);
        }

    } else {

        blockLookup[fullPath] = data;

    }
}

for (const k in libraryData) {
    buildBlockLookup(libraryData[k], k);
}