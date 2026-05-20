// routeValidator.js

export function validateRoute(routeBlocks) {
    const errors = [];

    // map: blockName -> first index in route
    const positionMap = new Map();

    routeBlocks.forEach((block, index) => {
        if (!positionMap.has(block.dataset.name)) {
            positionMap.set(block.dataset.name, index);
        }
    });

    routeBlocks.forEach((block, index) => {
        const name = block.dataset.name;

        let after = block.dataset.after;

        if (!after) return;

        try {
            after = JSON.parse(after);
        } catch (e) {
            return;
        }

        for (const required of after) {

            const requiredIndex = positionMap.get(required);

            // not found OR appears after current block
            if (requiredIndex === undefined || requiredIndex >= index) {
                errors.push({
                    type: "ORDER",
                    message: `"${required}" must come before "${name}"`
                });
            }
        }
    });

    return errors;
}