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
    routesHeader.classList.remove("popupHeaderSelected");
    settingsHeader.classList.remove("popupHeaderSelected");
}
function openRoutesMenu() {
    openPopup();
    closeAllMenus();
    displayRoutes();
    routesMenu.style.display = "flex";
    routesHeader.classList.add("popupHeaderSelected");
}
function openSettingsMenu() {
    openPopup();
    closeAllMenus();
    settingsMenu.style.display = "flex";
    settingsHeader.classList.add("popupHeaderSelected");
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
                <div class="routeDisplayDate">${formatDate(save.timestamp)}</div>
                <div class="routeDisplayCount">${save.route.length == 1 ? "1 Block" : save.route.length + " Blocks"}</div>
                <div class="routeDisplayId">${save.id}</div>
            </div>
            <div class="routeDisplayMiddle">
                <button data-id="${save.id}" class="routeDisplayButton openRoute" onclick="routeDisplayFunction('openRoute', '${save.id}')">Open Route</button>
            </div>
            <div class="routeDisplayRight">
                <button data-id="${save.id}" class="routeDisplayButton exportRoute" onclick="routeDisplayFunction('exportRoute', '${save.id}')">Export Route</button>
                <button data-id="${save.id}" class="routeDisplayButton exportNotes" onclick="routeDisplayFunction('exportNotes', '${save.id}')">Export Notes</button>
                <button data-id="${save.id}" class="routeDisplayButton copyNotes" onclick="routeDisplayFunction('copyNotes', '${save.id}')">Copy Notes</button>
                <button data-id="${save.id}" class="routeDisplayButton deleteRoute" onclick="routeDisplayFunction('deleteRoute', '${save.id}')">Delete Route</button>
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
routesHeader.onclick = function() {
    openRoutesMenu();
};
settingsHeader.onclick = function() {
    openSettingsMenu();
};