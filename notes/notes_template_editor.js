const notesState = {
    templates: [
        { id: "title", name: "Route Title", template: "# {title}" },
        { id: "block", name: "Route Block", template: "{number}. {name}" },
        { id: "blockNotes", name: "Block + Notes", template: "{number}. {name}\nNotes: {notes}" }
    ],
    selected: null
};

/* ========== RENDER ========== */

function render() {
    const container = document.getElementById("workspaceBlocks");
    container.innerHTML = "";

    notesState.templates.forEach(t => {
        const div = document.createElement("div");
        div.className = "workspaceBlock";
        div.textContent = t.name;

        div.onclick = () => selectTemplate(t.id);

        container.appendChild(div);
    });

    renderPreview();
}

/* ========== SELECT ========== */

function selectTemplate(id) {
    const t = notesState.templates.find(x => x.id === id);
    notesState.selected = t;

    document.getElementById("inspectorContent").style.display = "flex";
    document.getElementById("templateName").value = t.name;
    document.getElementById("templateText").value = t.template;
}

/* ========== SAVE EDIT ========== */

document.getElementById("saveTemplate").onclick = () => {
    const t = notesState.selected;
    if (!t) return;

    t.name = document.getElementById("templateName").value;
    t.template = document.getElementById("templateText").value;

    render();
};

/* ========== PREVIEW ENGINE ========== */

function applyTemplate(str, data) {
    return str.replace(/\{(.*?)\}/g, (_, k) => data[k] ?? "");
}

function renderPreview() {
    const route = {
        title: "Hogwarts Legacy Route",
        route: [
            { name: "Intro", notes: "Start here" },
            { name: "Ollivanders", notes: "Buy wand" }
        ]
    };

    const title = notesState.templates.find(t => t.id === "title").template;
    const block = notesState.templates.find(t => t.id === "blockNotes").template;

    let out = "";

    out += applyTemplate(title, { title: route.title }) + "\n\n";

    route.route.forEach((b, i) => {
        out += applyTemplate(block, {
            number: i + 1,
            name: b.name,
            notes: b.notes
        }) + "\n\n";
    });

    document.getElementById("preview").textContent = out;
}

/* ========== PLACEHOLDERS ========== */

document.querySelectorAll(".placeholderButton").forEach(btn => {
    btn.onclick = () => {
        const textarea = document.getElementById("templateText");
        textarea.value += btn.textContent;
    };
});

/* ========== INIT ========== */

render();

/* close */
document.getElementById("notesClose").onclick = () => {
    document.getElementById("notesTemplateEditor").style.display = "none";
};