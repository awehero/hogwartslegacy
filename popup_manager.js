// popup_manager.js
function openPopup() {
    popup.style.display = "flex";
}
function closePopup() {
    popup.style.display = "none";
}
function closeAllMenus() {
    routesMenu.style.display = "none";
    settingsMenu.style.display = "none";
}
function openRoutesMenu() {
    closeAllMenus();
    displayRoutes();
    routesMenu.style.display = "flex";
}
function openSettingsMenu() {
    closeAllMenus();
    settingsMenu.style.display = "flex";
}
function formatDate(string) {
    let number = parseInt(string, 10);
    return new Date(number).toLocaleString();
}
function displayRoutes() {
    routes.innerHTML = "";
    //store.saves
    sorted.forEach(save => {
        routes.innerHTML += `
        <div class="routeDisplayContainer">
            <div class="routeDisplayLeft">
                <div class="routeDisplayTitle>${save.title}</div>
                <div class="routeDisplayCount>${save.routes.length} Blocks</div>
            </div>
            <div class="routeDisplayMiddle">
                <div class="routeDisplayDate>${formatDate(save.timestamp)}</div>
                <div class="routeDisplayId>${save.id}</div>
            </div>
            <div class="routeDisplayRight">
                <button data-id=${save.id} class="exportRoute" onclick=""></button>
                <button data-id=${save.id} class="exportNotes"></button>
                <button data-id=${save.id} class="copyNotes"></button>
                <button data-id=${save.id} class="deleteRoute"></button>
            </div>
        </div>
        `;
    });
    //document.getElementsByClassName("exportRoute").for
}

