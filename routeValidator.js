function validateRoute(routeBlocks) {
    const errors = [];

    // CLEAN INPUT (prevents undefined + folders)
    const blocks = routeBlocks.filter(el =>
        el &&
        el.dataset &&
        el.dataset.name &&
        el.dataset.name !== "undefined"
    );

    const position = new Map();

    blocks.forEach((b, i) => {
        if (!position.has(b.dataset.name)) {
            position.set(b.dataset.name, i);
        }
    });

    blocks.forEach((b, i) => {
        const name = b.dataset.name;

        if (!b.dataset.after) return;

        let after;
        try {
            after = JSON.parse(b.dataset.after);
        } catch {
            return;
        }

        for (const req of after) {
            const reqIndex = position.get(req);

            if (reqIndex === undefined || reqIndex >= i) {
                errors.push({
                    type: "ORDER",
                    message: `"${req}" must come before "${name}"`
                });
            }
        }
    });

    return errors;
}
window.validateRoute = validateRoute;