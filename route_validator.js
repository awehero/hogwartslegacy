//route_validator.js
function clearRouteErrors() {
    routeContainer.querySelectorAll(".routeBlockError").forEach(el=>{
        el.classList.remove("routeBlockError");
    });
}
function validateRoute() {
    errorPanel.innerHTML = "";
    clearRouteErrors();

    const route = [...routeContainer.querySelectorAll(".libraryBlock")];
    const completed = new Set();

    route.forEach((el,index)=>{
        const path = el.dataset.path;
        const data = blockLookup[path];

        if (data && data.after){
            data.after.forEach(required => {
                if (Array.isArray(required)) {
                    const validOr = required.some(option => {
                        const appearsLater = route.slice(index + 1).some(x => x.dataset.path === option);
                        return completed.has(option) && !appearsLater;
                    });
                    if (!validOr) {
                        el.classList.add("routeBlockError");
                        const error = document.createElement("div");
                        error.className = "errorItem";
                        error.textContent = `"${path}" requires ONE OF: ${required.join(" OR ")}`;
                        errorPanel.appendChild(error);
                    }
                } else {
                    const appearsLater = route.slice(index + 1).some(x => x.dataset.path === required);
                    if (!completed.has(required) || appearsLater) {
                        el.classList.add("routeBlockError");
                        const error = document.createElement("div");
                        error.className = "errorItem";
                        if (appearsLater) {
                            error.textContent = `"${required}" appears after "${path}"`;
                        } else {
                            error.textContent = `"${path}" requires "${required}" before it`;
                        }
                        errorPanel.appendChild(error);
                    }
                }
            });
        }
        completed.add(path);
    });
}