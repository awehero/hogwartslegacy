// overview_manager.js

function updateOverview() {
    let route = currentSave.route;
    let total = 0;
    route.forEach(itm => {
        if (itm.duration) {
            total += Number(itm.duration);
        }
    });
    totalDuration.innerText = formatDuration(total);
}
updateOverview();