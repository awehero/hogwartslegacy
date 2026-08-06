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
const helpBtn = document.getElementById("helpBtn");
const closeEditorBtn = document.getElementById("closeEditorBtn");
const routesDisplay = document.getElementById("routesDisplay");
const routesMenu = document.getElementById("routesMenu");
const settingsMenu = document.getElementById("settingsMenu");
const permanentDelete = document.getElementById("permanentDelete");
const cancelDelete = document.getElementById("cancelDelete");
const totalDuration = document.getElementById("totalDuration");
const totalXp = document.getElementById("totalXp");
const totalGold = document.getElementById("totalGold");
let selectedRouteBlock = null;
let currentId = null;
let currentSave = null;
let settings = {};
let scrollSpeed = 12;

function formatDuration(s) {
    s = Number(s);
    if (!s) return "0s";
    let h = Math.floor(s/3600);
    s -= h*3600;
    let m = Math.floor(s/60);
    s -= m*60;
    let parts = [];
    if (h) parts.push(`${h}h`);
    if (m) parts.push(`${m}m`);
    if (s) parts.push(`${s}s`);
    return parts.join(" ");
}

function formatXp(XP) {
    return XP + " XP";
}

function formatGold(Gold) {
    return Gold + " Gold";
}