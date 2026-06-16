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
function displayRoutes() {
    //store.saves
}