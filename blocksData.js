//blocksData.js
const libraryData = {
    "Quest": {
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
                            "The Astronomy Wing": {
                                type: F,
                                items: {
                                    "Astronomy Tower": {type: B},
                                    "Charms": {type: B},
                                    "Defense Against the Dark Arts Tower": {type: B},
                                    "Defense Against the Dark Arts Classroom": {type: B},
                                    "Professor Fig's Classroom": {type: B},
                                    "Transfiguration Classroom": {type: B},
                                    "Transfiguration Courtyard": {type: B},
                                }
                            },
                            "The Bell Tower Wing": {
                                type: F,
                                items: {
                                    "Bell Tower Courtyard": {type: B},
                                    "Flying Class Lawn": {type: B},
                                    "Beasts Classroom": {type: B},
                                    "Hogwarts North Exit": {type: B},
                                    "West Tower": {type: B},
                                }
                            },
                            "The Grand Staircase": {
                                type: F,
                                items: {
                                    "Grand Staircase": {type: B},
                                    "Grand Staircase Tower": {type: B},
                                    "Lower Grand Staircase": {type: B},
                                    "Quad Courtyard": {type: B},
                                    "Ravenclaw Common Room": {type: B},
                                    "Ravenclaw Tower": {type: B},
                                    "Slytherin Common Room": {type: B},
                                    "Trophy Room": {type: B},
                                }
                            },
                            "The Great Hall": {
                                type: F,
                                items: {
                                    "Boathouse": {type: B},
                                    "Great Hall": {type: B},
                                    "Hufflepuff Common Room": {type: B},
                                    "Viaduct Courtyard": {type: B},
                                }
                            },
                            "The Library Annex": {
                                type: F,
                                items: {
                                    "Central Hall": {type: B},
                                    "Divination Classroom": {type: B},
                                    "Greenhouses": {type: B},
                                    "Library": {type: B},
                                    "Potions Classroom": {type: B},
                                }
                            },
                            "Secret Rooms": {
                                type: F,
                                items: {
                                    "Map Chamber": {type: B},
                                    "Room of Requirement": {type: B},
                                }
                            },
                            "The South Wing": {
                                type: F,
                                items: {
                                    "Clock Tower Courtyard": {type: B},
                                    "Faculty Tower": {type: B},
                                    "Gryffindor Common Room": {type: B},
                                    "Hospital Wing": {type: B},
                                    "Hogwarts South Exit": {type: B},
                                }
                            },
                        }
                    },
                    "Hogsmeade": {
                        type: F,
                        items: {
                            "North Hogsmeade": {type: B},
                            "West Hogsmeade": {type: B},
                            "South Hogsmeade": {type: B},
                        }
                    },
                    "Highlands": {
                        type: F,
                        items: {
                            "North Ford Bog": {type: B},
                            "Pitt-Upon-Ford": {type: B},
                            "San Bakar's Tower": {type: B},
                            "North Ford Bog Entrance": {type: B},
                            "East North Ford Bog": {type: B},
                            "West Forbidden Forest": {type: B},
                            "Upper Hogsfield": {type: B},
                            "Jackdaw's Tomb": {type: B},
                            "East Hosgmeade Valley": {type: B},
                            "Falbarton Castle": {type: B},
                            "East North Hogwarts Region": {type: B},
                            "The Collector's Cave": {type: B},
                            "Korrow Ruins": {type: B},
                            "Forbidden Forest": {type: B},
                            "Mooncalf Den": {type: B},
                            "Aranshire": {type: B},
                            "Lower Hogsfield": {type: B},
                            "Central Hogwarts Valley": {type: B},
                            "Brocburrow": {type: B},
                            "West Hogwarts Valley": {type: B},
                            "North Feldcroft": {type: B},
                            "Keenbridge": {type: B},
                            "The Mine's Eye": {type: B},
                            "Northern South Sea Bog": {type: B},
                            "Rookwood Castle": {type: B},
                            "Feldcroft": {type: B},
                            "South Feldcroft": {type: B},
                            "East South Sea Bog?": {type: B},
                            "Irondale": {type: B},
                            "North Poidsear Coast": {type: B},
                            "Tomb of Treachery": {type: B},
                            "Phoenix Mountain Cave": {type: B},
                            "Poidsear Castle": {type: B},
                            "Coastal Mine": {type: B},
                            "Marunweem Bridge": {type: B},
                            "South Poidsear Coast": {type: B},
                            "Marunweem Lake": {type: B},
                            "Tower Tunnel": {type: B},
                            "Marunweem": {type: B},
                            "Marunweem Ruins": {type: B},
                            "Bainburgh": {type: B},
                            "Cragcroft Shore": {type: B},
                            "West Manor Cape": {type: B},
                            "Cragcroft": {type: B},
                            "Clagmar Castle": {type: B},
                            "South Clagmar Coast": {type: B},
                        }
                    },
                }
            },
        }
    }
};