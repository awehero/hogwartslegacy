function validateRoute() {

    errorPanel.innerHTML = "";

    const completed = [];

    routeContainer.querySelectorAll(".libraryBlock").forEach(el => {

        const path = el.dataset.path;

        const data = blockLookup[path];

        if (data.after) {

            data.after.forEach(required => {

                if (!completed.includes(required)) {

                    const error = document.createElement("div");

                    error.className = "errorItem";

                    error.textContent =
                        `"${path}" requires "${required}" before it`;

                    errorPanel.appendChild(error);

                }

            });

        }

        completed.push(path);

    });

}