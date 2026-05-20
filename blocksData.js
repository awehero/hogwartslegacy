const libraryData = {
    type: "folder",
    name: "root",
    children: {
        quests: {
            type: "folder",
            name: "Quests",
            children: {
                gobstones: {
                    type: "folder",
                    name: "Gobs of Gobstones",
                    children: {
                        start: { type: "block", name: "Start" },
                        courtyard: { type: "block", name: "Courtyard" },
                        tower: { type: "block", name: "Tower" },
                        trophy: { type: "block", name: "Trophy Room" }
                    }
                }
            }
        },

        travel: {
            type: "folder",
            name: "Travel",
            children: {
                floo1: { type: "block", name: "Floo: Hogwarts Castle" },
                floo2: { type: "block", name: "Floo: Hogsmeade" }
            }
        }
    }
};