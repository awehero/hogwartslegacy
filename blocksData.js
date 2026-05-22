//blocksData.js
const libraryData = {
    "Quests": {
        type: F,
        items: {
            "Gobs of Gobstones": {
                type: F,
                items: {
                    "Start": {
                        type: B
                    },

                    "Transfiguration Courtyard": {
                        type: B,
                        after: ["Quests - Gobs of Gobstones - Start"]
                    },

                    "Ravenclaw Tower": {
                        type: B,
                        after: ["Quests - Gobs of Gobstones - Start"]
                    },

                    "Central Hall Rafters": {
                        type: B,
                        after: ["Quests - Gobs of Gobstones - Start"]
                    },

                    "Divination Classroom": {
                        type: B,
                        after: ["Quests - Gobs of Gobstones - Start"]
                    },

                    "Trophy Room (2)": {
                        type: B,
                        after: ["Quests - Gobs of Gobstones - Start"]
                    },

                    "Redeem": {
                        type: B,
                        after: [
                            "Quests - Gobs of Gobstones - Transfiguration Courtyard",
                            "Quests - Gobs of Gobstones - Ravenclaw Tower",
                            "Quests - Gobs of Gobstones - Central Hall Rafters",
                            "Quests - Gobs of Gobstones - Divination Classroom",
                            "Quests - Gobs of Gobstones - Trophy Room (2)"
                        ]
                    }
                }
            }
        }
    },
    "Travel": {
        type: F,
        items: {
            "Floo": {
                type: F,
                items: {
                    "Hogwarts": {
                        type: F,
                        items: {

                        }
                    },
                    "Hogsmeade": {
                        type: F,
                        items: {

                        }
                    },
                    "Highlands": {
                        type: F,
                        items: {

                        }
                    },
                }
            }
        }
    },
    "Collect": {
        type: F,
        items: {
            "Floo": {
                type: F,
                items: {
                    "Hogwarts": {
                        type: F,
                        items: {
                            "Astronomy Wing": {
                                type: B,
                                items: {
                                    "Astronomy Tower": {type: B},
                                    "": {type: B},
                                    "": {type: B},
                                    "": {type: B},
                                    "": {type: B},
                                    "": {type: B},
                                    "": {type: B},
                                }
                            }
                        }
                    },
                    "Hogsmeade": {
                        type: F,
                        items: {

                        }
                    },
                    "Highlands": {
                        type: F,
                        items: {

                        }
                    },
                }
            }
        }
    }
};