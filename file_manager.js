//file_manager.js

function downloadFile(content, filename, type) {
    const blob = new Blob([content], {
        type: type
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = filename;

    a.click();

    URL.revokeObjectURL(url);
}

function exportRoute() {
    const route = [];

    routeContainer.querySelectorAll(".libraryBlock").forEach((el, index) => {

        route.push({
            position: index,
            path: el.dataset.path,
            notes: el.dataset.notes || "",
            custom: el.dataset.custom || "",
            instanceId: el.dataset.instanceId || "",
            splitParent: el.dataset.splitParent || ""
        });

    });

    const save = {
        version: 1,

        title: routeTitle.value,

        route: route
    };

    downloadFile(
        JSON.stringify(save, null, 2),
        "route.json",
        "application/json"
    );
}

function buildNotes() {
    let text = "";

    const title = routeTitle.value.trim();

    if (title) {
        text += title;
        text += "\n\n";
    }

    routeContainer.querySelectorAll(".libraryBlock").forEach((el, index) => {

        text += `${index + 1}. `;

        text += el.dataset.custom || el.dataset.path;

        text += "\n";

        if (el.dataset.notes) {
            text += `Notes: ${el.dataset.notes}\n`;
        }

        text += "\n";

    });

    return text;
}

function exportNotes() {
    downloadFile(
        buildNotes(),
        "route_notes.txt",
        "text/plain"
    );
}

async function copyNotes() {
    try {

        await navigator.clipboard.writeText(
            buildNotes()
        );

        alert("Copied!");

    } catch {

        alert("Failed to copy.");
    }
}

const exportFunctions = {
    route: exportRoute,
    notes: exportNotes,
    copy: copyNotes
};

document.querySelectorAll("#exportButtons button").forEach(button => {

    button.addEventListener("click", () => {

        const type = button.dataset.export;

        exportFunctions[type]?.();

    });

});