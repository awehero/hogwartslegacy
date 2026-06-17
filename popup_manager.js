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
    //store.saves
    let html = "";
    sorted.forEach(save => {
        html += `
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
                <button class="exportRoute"></button>
            </div>
        </div>
        `;
    });
}