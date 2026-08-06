// overview_manager.js

function updateOverview() {
    if (!currentSave) return;
    let route = currentSave.route;
    let totalD = 0;
    let totalX = 0;
    let totalG = 0;
    route.forEach(itm => {
        if (itm.duration) {
            totalD += Number(itm.duration);
        }
        if (itm.xp) {
            totalX += Number(itm.xp);
        }
        if (itm.gold) {
            totalG += Number(itm.gold);
        }
    });
    totalDuration.innerText = formatDuration(totalD);
    totalXp.innerText = formatXp(totalX);
    totalGold.innerText = formatGold(totalG);
}
updateOverview();
if (Object.values(getAllSaves()).length == 0) {
    alert("New? Click the ? to watch the tutorial video.");
}