const F = "folder";
const B = "block";
const libraryRoot = document.getElementById("blockLibrary");
const routeContainer = document.getElementById("routeContainer");
const errorPanel = document.getElementById("errorPanel");
const blockEditor = document.getElementById("blockEditor");
const librarySearch = document.getElementById("librarySearch");
const routeTitle = document.getElementById("routeTitle");
const popup = document.getElementById("popup");
const routesHeader = document.getElementById("routesHeader");
const settingsHeader = document.getElementById("settingsHeader");
const popupBtn = document.getElementById("popupBtn");
const closePopupBtn = document.getElementById("closePopupBtn");
const routesDisplay = document.getElementById("routesDisplay");
const routesMenu = document.getElementById("routesMenu");
const settingsMenu = document.getElementById("settingsMenu");
const permanentDelete = document.getElementById("permanentDelete");
const cancelDelete = document.getElementById("cancelDelete");
const totalDuration = document.getElementById("totalDuration");
let selectedRouteBlock = null;
let store = null;
let scrollSpeed = 12;

function formatDuration(s) {
    let h = Math.floor(s/3600);
    s = s - (h*3600);
    let m = Math.floor(s/60);
    s = s - (m*60);
    let a = [h, m, s];
    let text = ["h", "m", "s"];
    let t = "";
    for (var i = 0; i < a.length; i++) {
        if (a[i] != 0) {
            t += `${a[i]}${text[i]} `;
        }
    }
    return t;
}