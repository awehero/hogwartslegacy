//route_validator.js
function clearRouteErrors() {
	routeContainer.querySelectorAll(".routeBlockError").forEach(el => {
		el.classList.remove("routeBlockError");
	});
}
function shortPath(path) {
	if (path.split(" - ")[0] == "Quest") {
		return path.split(" - ").slice(2).join(" - ");
	}
	return path;
}
function validateRoute() {
	return;
	errorPanel.innerHTML = "";
	clearRouteErrors();
	const route = [...routeContainer.querySelectorAll(".libraryBlock")];
	const completed = new Set();
	route.forEach((el, index) => {
		const path = el.dataset.path;
		const data = blockLookup[path];
		if (data && data.after) {
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
                        let pathText = shortPath(path);
                        let requiredText = required.map(item => shortPath(item));
                        error.textContent = `"${pathText}" requires ONE OF: ${requiredText.join(" OR ")}`;
						error.onclick = () => {
							let target = null;
							for (const option of required) {
								const found = route.find(x => x.dataset.path === option);
								if (found) {
									target = found;
									break;
								}
							}
							if (!target) {
								target = el;
							}
							target.scrollIntoView({
								behavior: "smooth",
								block: "center"
							});
							document.querySelectorAll(".routeSelected").forEach(x => {
								x.classList.remove("routeSelected");
							});
							target.classList.add("routeSelected");
							setTimeout(() => {
								target.classList.remove("routeSelected");
							}, 800);
						};
						errorPanel.appendChild(error);
					}
				} else {
					const appearsLater = route.slice(index + 1).some(x => x.dataset.path === required);
					if (!completed.has(required) || appearsLater) {
						el.classList.add("routeBlockError");
						const error = document.createElement("div");
						error.className = "errorItem";
                        let pathText = shortPath(path);
                        let requiredText = shortPath(required);
                        if (appearsLater) {
							error.textContent = `"${requiredText}" appears after "${pathText}"`;
						} else {
							error.textContent = `"${pathText}" requires "${requiredText}" before it`;
						}
						error.onclick = () => {
							let target = route.find(x => x.dataset.path === required);
							if (!target) {
								target = el;
							}
							target.scrollIntoView({
								behavior: "smooth",
								block: "center"
							});
							document.querySelectorAll(".routeSelected").forEach(x => {
								x.classList.remove("routeSelected");
							});
							target.classList.add("routeSelected");
							setTimeout(() => {
								target.classList.remove("routeSelected");
							}, 800);
						};
						errorPanel.appendChild(error);
					}
				}
			});
		}
		completed.add(path);
	});
}