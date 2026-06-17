// popup_manager.js
function openPopup() {
    popup.style.display = "flex";
}
function closePopup() {
    popup.style.display = "none";
    closeAllMenus();
}
function closeAllMenus() {
    routesMenu.style.display = "none";
    settingsMenu.style.display = "none";
}
function openRoutesMenu() {
    openPopup();
    closeAllMenus();
    displayRoutes();
    routesMenu.style.display = "flex";
}
function openSettingsMenu() {
    openPopup();
    closeAllMenus();
    settingsMenu.style.display = "flex";
}
function formatDate(string) {
    let number = parseInt(string, 10);
    return new Date(number).toLocaleString();
}
function displayRoutes() {
    routesDisplay.innerHTML = "";
    let sorted = Object.values(store.saves).sort((a, b) => b.timestamp - a.timestamp);
    let html = "";
    sorted.forEach(save => {
        html += `
        <div class="routeDisplayContainer">
            <div class="routeDisplayLeft">
                <div class="routeDisplayTitle">${save.title}</div>
                <div class="routeDisplayCount">${save.route.length} Blocks</div>
            </div>
            <div class="routeDisplayMiddle">
                <div class="routeDisplayDate">${formatDate(save.timestamp)}</div>
                <div class="routeDisplayId">${save.id}</div>
            </div>
            <div class="routeDisplayRight">
                <button data-id="${save.id}" class="openRoute" onclick="routeDisplayFunction('openRoute', ${save.id})"></button>
                <button data-id="${save.id}" class="exportRoute" onclick="routeDisplayFunction('exportRoute', ${save.id})"></button>
                <button data-id="${save.id}" class="exportNotes" onclick="routeDisplayFunction('exportNotes', ${save.id})"></button>
                <button data-id="${save.id}" class="copyNotes" onclick="routeDisplayFunction('copyNotes', ${save.id})"></button>
                <button data-id="${save.id}" class="deleteRoute" onclick="routeDisplayFunction('deleteRoute', ${save.id})"></button>
            </div>
        </div>
        `;
    });
    routesDisplay.innerHTML = html;
}
popupBtn.onclick = function() {
    openRoutesMenu();
};
closePopupBtn.onclick = function() {
    closePopup();
};
