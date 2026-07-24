// overview_manager.js

function updateOverview() {
    let route = store.saves[store.currentId].route;
    let total = 0;
    route.forEach(itm => {
        if (itm.duration) {
            total += Number(itm.duration);
        }
    });
    totalDuration.innerText = formatDuration(total);
}
updateOverview();

routeContainer.addEventListener("click", e => {
    const block = e.target.closest(".libraryBlock");
    if (!block) return;

    selectedRouteBlock = block;

    document.querySelectorAll(".routeSelected").forEach(el => {
        el.classList.remove("routeSelected");
    });

    block.classList.add("routeSelected");

    openBlockEditor(block);
});