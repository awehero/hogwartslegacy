//blocksData.js
const libraryData = {
    "Quest": {
        type: F,
        items: {
            "Main": {
                type: F,
                items: {
                    "The Path to Hogwarts": {
                        type: B,
                        split: true,
                    },
                    "Welcome to Hogwarts": {
                        type: B,
                        split: true,
                        after: ["Quest - Main - The Path to Hogwarts"]
                    },
                    "Defense Against the Dark Arts Class": {
                        type: B,
                        split: true,
                        after: ["Quest - Main - Welcome to Hogwarts"]
                    },
                    "Charms Class": {
                        type: B,
                        split: true,
                        after: ["Quest - Main - Welcome to Hogwarts"]
                    },
                    "Weasley After Class": {
                        type: B,
                        split: true,
                        after: [
                            "Quest - Main - Defense Against the Dark Arts Class",
                            "Quest - Main - Charms Class"
                        ]
                    },
                    "Welcome to Hogsmeade": {
                        type: B,
                        split: true,
                        after: ["Quest - Assignment - Professor Ronen's Assignment"]
                    },
                    "The Locket's Secret": {
                        type: B,
                        split: true,
                        after: ["Quest - Main - Welcome to Hogsmeade"]
                    },
                    "Secrets of the Restricted Section": {
                        type: B,
                        split: true,
                        after: [
                            "Quest - Main - The Locket's Secret",
                            "Quest - Assignment - Professor Hecat's Assignment 1"
                        ]
                    },
                    "Tomes and Tribulations": {
                        type: B,
                        split: true,
                        after: ["Quest - Main - Secrets of the Restricted Section"]
                    },
                    "Herbology Class": {
                        type: B,
                        split: true,
                        after: ["Quest - Main - Tomes and Tribulations"]
                    },
                    "Potions Class": {
                        type: B,
                        split: true,
                        after: ["Quest - Main - Herbology Class"]
                    },
                    "The Girl from Ouagadou": {
                        type: B,
                        split: true,
                        after: ["Quest - Main - Tomes and Tribulations"]
                    },
                    "Trials of Merlin": {
                        type: B,
                        split: true,
                        after: ["Quest - Main - The Girl from Ouagadou"]
                    },
                    "Ollivander's Heirloom": {
                        type: B,
                        split: true,
                        after: [
                            "Quest - Main - Potions Class",
                            "Quest - Main - Trials of Merlin"
                        ]
                    },
                    "Jackdaw's Rest": {
                        type: B,
                        split: true,
                        after: [
                            "Quest - Assignment - Professor Hecat's Assignment 2 - Learn Expelliarmus",
                            "Quest - Main - Ollivander's Heirloom"
                        ]
                    },
                    "Flying Class": {
                        type: B,
                        split: true,
                        after: ["Quest - Main - Jackdaw's Rest"]
                    },
                    "In the Shadow of the Undercroft": {
                        type: B,
                        split: true,
                        after: ["Quest - Main - Flying Class"]
                    },
                    "The Room of Requirement": {
                        type: B,
                        split: true,
                        after: ["Quest - Main - Flying Class"]
                    },
                    "The Map Chamber": {
                        type: B,
                        split: true,
                        after: [
                            "Quest - Main - In the Shadow of the Undercroft",
                            "Quest - Main - The Room of Requirement"
                        ]
                    },
                    "Percival Rackham's Trial": {
                        type: B,
                        split: true,
                        after: ["Quest - Main - The Map Chamber"]
                    },
                    "The Helm of Urtkot": {
                        type: F,
                        items: {
                            "Sirona": {
                                type: B,
                                split: true,
                                after: [
                                    "Quest - Main - Percival Rackham's Trial",
                                    "Quest - Assignment - Professor Sharp's Assignment 1"
                                ]
                            },
                            "Lodgok and Walk": {
                                type: B,
                                split: true,
                                after: ["Quest - Main - The Helm of Urtkot - Sirona"]
                            },
                            "Collector's Cave": {
                                type: B,
                                split: true,
                                after: ["Quest - Main - The Helm of Urtkot - Lodgok and Walk"]
                            },
                            "Tell Lodgok": {
                                type: B,
                                split: true,
                                after: ["Quest - Main - The Helm of Urtkot - Collector's Cave"]
                            },
                            "Collect Helm": {
                                type: B,
                                split: true,
                                after: ["Quest - Main - The Helm of Urtkot - Tell Lodgok"]
                            },
                            "Deliver Helm": {
                                type: B,
                                split: true,
                                after: ["Quest - Main - The Helm of Urtkot - Collect Helm"]
                            }
                        }
                    },
                    "Beasts Class": {
                        type: B,
                        split: true,
                        after: ["Quest - Main - Percival Rackham's Trial"]
                    },
                    "The Caretaker's Lunar Lament": {
                        type: B,
                        split: true,
                        after: ["Quest - Main - Percival Rackham's Trial"]
                    },
                    "The Elf, the Nab-Sack, and the Loom": {
                        type: F,
                        items: {
                            "Deek in RoR": {
                                type: B,
                                split: true,
                                after: [
                                    "Quest - Main - The Helm of Urtkot - Deliver Helm",
                                    "Quest - Main - Beasts Class",
                                    "Quest - Main - The Caretaker's Lunar Lament"
                                ]
                            },
                            "Deek at Puffskein Den": {
                                type: B,
                                split: true,
                                after: [
                                    "Quest - Main - The Elf, the Nab-Sack, and the Loom - Deek in RoR",
                                    "Collect - Beast - Puffskein"
                                ]
                            },
                            "Deek at Jobberknoll Den": {
                                type: B,
                                split: true,
                                after: [
                                    "Quest - Main - The Elf, the Nab-Sack, and the Loom - Deek at Puffskein",
                                    "Collect - Beast - Puffskein"
                                ]
                            },
                        }
                    }
                }
            },
            "Assignment": {
                type: F,
                items: {
                    "Professor Ronen's Assignment": {
                        type: B,
                        split: true,
                        after: ["Quest - Main - Weasley After Class"]
                    },
                    "Professor Hecat's Assignment 1": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                                split: true,
                                after: ["Quest - Main - The Locket's Secret"]
                            },
                            "Incendio": {
                                type: B,
                                split: true,
                                after: [
                                    "Quest - Dueling Club - Crossed Wands: Round 2",
                                    "Quest - Spell Combination Practice 1"
                                ]
                            }
                        }
                    },
                    "Professor Hecat's Assignment 2": {
                        type: F,
                        items: {
                            "Incendio 5 Enemies": {
                                type: B,
                                split: true,
                                after: ["Quest - Main - Tomes and Tribulations"]
                            },
                            "Dodge 10 Attacks": {
                                type: B,
                                split: true,
                                after: ["Quest - Main - Tomes and Tribulations"]
                            },
                            "Learn Expelliarmus": {
                                type: B,
                                split: true,
                                after: [
                                    "Quest - Assignment - Professor Hecat's Assignment 2 - Incendio 5 Enemies",
                                    "Quest - Assignment - Professor Hecat's Assignment 2 - Dodge 10 Attacks"
                                ]
                            },
                        }
                    }
                }
            },
            "Sebby": {
                type: F,
                items: {
                    "In the Shadow of the Bloodline": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                                after: [
                                    "Quest - Main - The Elf, the Nab-Sack, and the Loom",
                                    "In the Shadow of the Estate"
                                ]
                            },
                            "Finish": {
                                type: B,
                                after: ["Quest - Sebby - In the Shadow of the Bloodline - Start"]
                            }
                        }
                    },
                    "In the Shadow of the Study": {
                        type: B,
                        after: [
                            "Quest - Main - The High Keep",
                            "Quest - Main - Astronomy Class",
                            "Quest - Sebby - In the Shadow of the Bloodline - Finish"
                        ]
                    }
                }
            },
            "Natty": {
                type: F,
                items: {

                }
            },
            "Poppy": {
                type: F,
                items: {

                }
            },
            "Dueling Club": {
                type: F,
                items: {
                    "Crossed Wands: Round 1": {
                        type: B,
                        after: ["Quest - Main - Defense Against the Dark Arts Class"]
                    },
                    "Crossed Wands: Round 2": {
                        type: B,
                        after: ["Quest - Dueling Club - Crossed Wands: Round 1"]
                    },
                    "Crossed Wands: Round 3": {
                        type: B,
                        after: ["Quest - Main - Tomes and Tribulations"]
                    },
                    "Spell Combination Practice 1": {
                        type: B,
                        after: ["Quest - Dueling Club - Crossed Wands: Round 1"]
                    },
                    "Spell Combination Practice 2": {
                        type: B,
                        after: ["Quest - Main - Tomes and Tribulations"]
                    }
                }
            },
            "Summoner's Court": {
                type: F,
                items: {

                }
            },
            "Deek": {
                type: F,
                items: {

                }
            },
            "Flying": {
                type: F,
                items: {

                }
            },
            "Other": {
                type: F,
                items: {
                    "Gobs of Gobstones": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                                after: ["Quest - Main - Weasley After Class"]
                            },

                            "Transfiguration Courtyard": {
                                type: B,
                                after: ["Quest - Other - Gobs of Gobstones - Start"]
                            },

                            "Ravenclaw Tower": {
                                type: B,
                                after: ["Quest - Other - Gobs of Gobstones - Start"]
                            },

                            "Central Hall Rafters": {
                                type: B,
                                after: ["Quest - Other - Gobs of Gobstones - Start"]
                            },

                            "Divination Classroom": {
                                type: B,
                                after: ["Quest - Other - Gobs of Gobstones - Start"]
                            },

                            "Trophy Room (2)": {
                                type: B,
                                after: ["Quest - Other - Gobs of Gobstones - Start"]
                            },

                            "Redeem": {
                                type: B,
                                after: [
                                    "Quest - Other - Gobs of Gobstones - Transfiguration Courtyard",
                                    "Quest - Other - Gobs of Gobstones - Ravenclaw Tower",
                                    "Quest - Other - Gobs of Gobstones - Central Hall Rafters",
                                    "Quest - Other - Gobs of Gobstones - Divination Classroom",
                                    "Quest - Other - Gobs of Gobstones - Trophy Room (2)"
                                ]
                            }
                        }
                    },
                    "Like a Moth to a Frame": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                                after: ["Quest - Main - Welcome to Hogwarts"]
                            },
                            "Moth": {
                                type: B,
                                after: ["Quest - Other - Like a Moth to a Frame - Start"]
                            },
                            "Redeem": {
                                type: B,
                                after: ["Quest - Other - Like a Moth to a Frame - Moth"]
                            }
                        }
                    },
                    "Flying off the Shelves": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                                after: ["Quest - Main - Charms Class"]
                            },
                            "Books": {
                                type: B,
                                after: ["Quest - Other - Flying off the Shelves - Start"]
                            },
                            "Redeem": {
                                type: B,
                                after: ["Quest - Other - Flying off the Shelves - Books"]
                            }
                        }
                    },
                    "Follow the Butterflies": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                                after: ["Quest - Main - Jackdaw's Rest"]
                            },
                            "Follow Butterflies": {
                                type: B,
                                after: ["Quest - Other - Follow the Butterflies - Start"]
                            },
                            "Redeem": {
                                type: B,
                                after: ["Quest - Other - Follow the Butterflies - Follow Butterflies"]
                            }
                        }
                    },
                }
            },
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
            },
            "Point": {

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
                            "North Ford Bog": {
                                type: F,
                                items: {
                                    "East North Ford Bog": {type: B},
                                    "North Ford Bog": {type: B},
                                    "Pitt-Upon-Ford": {type: B},
                                    "San Bakar's Tower": {type: B},
                                }
                            },
                            "Forbidden Forest": {
                                type: F,
                                items: {
                                    "Jackdaw's Tomb": {type: B},
                                    "North Ford Bog Entrance": {type: B},
                                    "West Forbidden Forest": {type: B},
                                }
                            },
                            "Hogsmeade Valley": {
                                type: F,
                                items: {
                                    "East Hosgmeade Valley": {type: B},
                                    "Falbarton Castle": {type: B},
                                    "Upper Hogsfield": {type: B},
                                }
                            },
                            "North Hogwarts Region": {
                                type: F,
                                items: {
                                    "East North Hogwarts Region": {type: B},
                                    "Korrow Ruins": {type: B},
                                    "The Collector's Cave": {type: B},
                                }
                            },
                            "South Hogwarts Region": {
                                type: F,
                                items: {
                                    "Aranshire": {type: B},
                                    "Forbidden Forest": {type: B},
                                    "Lower Hogsfield": {type: B},
                                    "Mooncalf Den": {type: B},
                                }
                            },
                            "Hogwarts Valley": {
                                type: F,
                                items: {
                                    "Brocburrow": {type: B},
                                    "Central Hogwarts Valley": {type: B},
                                    "Keenbridge": {type: B},
                                    "The Mine's Eye": {type: B},
                                }
                            },
                            "Feldcroft Region": {
                                type: F,
                                items: {
                                    "Feldcroft": {type: B},
                                    "Feldcroft Catacomb": {type: B},
                                    "Irondale": {type: B},
                                    "North Feldcroft": {type: B},
                                    "Rookwood Castle": {type: B},
                                    "South Feldcroft": {type: B},
                                    "West Hogwarts Valley": {type: B},
                                }
                            },
                            "South Sea Bog": {
                                type: F,
                                items: {
                                    "Northern South Sea Bog": {type: B},
                                }
                            },
                            "Coastal Cavern": {
                                type: F,
                                items: {
                                    "East South Sea Bog?": {type: B},
                                    "North Poidsear Coast": {type: B},
                                }
                            },
                            "Poidsear Coast": {
                                type: F,
                                items: {
                                    "Marunweem Bridge": {type: B},
                                    "Phoenix Mountain Cave": {type: B},
                                    "Poidsear Castle": {type: B},
                                    "South Poidsear Coast": {type: B},
                                    "Tomb of Treachery": {type: B},
                                }
                            },
                            "Marunweem Lake": {
                                type: F,
                                items: {
                                    "Coastal Mine": {type: B},
                                    "Marunweem": {type: B},
                                    "Marunweem Lake": {type: B},
                                    "Marunweem Ruins": {type: B},
                                    "Tower Tunnel": {type: B},
                                }
                            },
                            "Manor Cape": {
                                type: F,
                                items: {
                                    "Bainburgh": {type: B},
                                    "West Manor Cape": {type: B},
                                }
                            },
                            "Cragcroftshire": {
                                type: F,
                                items: {
                                    "Cragcroft": {type: B},
                                    "Cragcroft Shore": {type: B},
                                }
                            },
                            "Clagmar Coast": {
                                type: F,
                                items: {
                                    "Clagmar Castle": {type: B},
                                    "South Clagmar Coast": {type: B},
                                }
                            },
                        }
                    },
                }
            },
            "Chest": {
                type: F,
                items: {}
            },
            "Beast": {
                type: F,
                items: {
                    "Puffskein": {type: B, repeatable: true},
                    "Jobberknoll": {type: B, repeatable: true},
                    "Mooncalf": {type: B, repeatable: true},
                    "Diricawl": {type: B, repeatable: true},
                }
            },
            "Item": {
                type: F,
                items: {}
            }
        }
    }
};