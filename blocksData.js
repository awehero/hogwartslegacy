//blocksData.js
const libraryData = {
    "Custom": {
        type: F,
        items: {
            "Blank": {type: B, repeatable: true},
            "Reload From Last Save": {type: B, repeatable: true},
            "Save": {type: B, repeatable: true},
            "M/F Trick": {type: B, repeatable: true},
            "P/F Trick": {type: B, repeatable: true},
            "Page Glitch": {type: B, repeatable: true},
            "Switch Difficulty to ": {type: B, repeatable: true},
            "Switch FPS to ": {type: B, repeatable: true},
        }
    },
    "Quest": {
        type: F,
        items: {
            "Main": {
                type: F,
                items: {
                    "The Path to Hogwarts": {
                        type: B,
                    },
                    "Welcome to Hogwarts": {
                        type: B,
                        after: ["Quest - Main - The Path to Hogwarts"]
                    },
                    "Defense Against the Dark Arts Class": {
                        type: B,
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
                            "Quest - Assignment - Professor Hecat's Assignment 1 - Learn Incendio"
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
                    "The Girl from Uagadou": {
                        type: B,
                        split: true,
                        after: ["Quest - Main - Tomes and Tribulations"]
                    },
                    "Trials of Merlin": {
                        type: B,
                        split: true,
                        after: ["Quest - Main - The Girl from Uagadou"]
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
                            "Deek at Mooncalf Den": {
                                type: B,
                            },
                            "Collect Beast Items": {
                                type: B,
                            },
                            "Upgrade Gear": {
                                type: B,
                            },
                            "Complete": {
                                type: B,
                            },
                        }
                    },
                    "In the Shadow of the Estate": {
                        type: B,
                    },
                    "The High Keep": {
                        type: B,
                    },
                    "Astronomy Class": {
                        type: B,
                    },
                    "Back on the Path": {
                        type: B,
                    },
                    "Charles Rookwood's Trial": {
                        type: B,
                    },
                    "Fire and Vice": {
                        type: B,
                    },
                    "It's All Gobbledegook": {
                        type: F,
                        items: {
                            "Amit": {
                                type: B,
                            },
                            "The Mine's Eye": {
                                type: B,
                            },
                        }
                    },
                    "In the Shadow of the Mine": {
                        type: B,
                    },
                    "The Headmistress Speaks": {
                        type: B,
                    },
                    "The Polyjuice Plot": {
                        type: B,
                    },
                    "Niamh Fitzgerald's Trial": {
                        type: B,
                    },
                    "In the Shadow of the Mountain": {
                        type: B,
                    },
                    "Lodgok's Loyalty": {
                        type: B,
                    },
                    "San Bakar's Trial": {
                        type: F,
                        items: {
                            "Map Chamber": {
                                type: B,
                            },
                            "Cragcroft Shore": {
                                type: B,
                            },
                            "Graphorn": {
                                type: B,
                            },
                            "Complete": {
                                type: B,
                            },
                        }
                    },
                    "Wand Mastery": {
                        type: B,
                    },
                    "The Final Repository": {
                        type: B,
                    },
                    "In the Shadow of Revelation": {
                        type: B,
                    },
                    "Weasley's Watchful Eye": {
                        type: B,
                    },
                    "The House Cup": {
                        type: B,
                    },
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
                            "Learn Incendio": {
                                type: B,
                                split: true,
                                after: [
                                    "Quest - Dueling Club - Crossed Wands: Round 2",
                                    "Quest - Dueling Club - Spell Combination Practice 1"
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
                    },
                    "Professor Sharp's Assignment 1": {
                        type: F,
                        items: {
                            "Use a Focus Potion": {
                                type: B,
                                split: true,
                                after: ["Quest - Main - Jackdaw's Rest"]
                            },
                            "Use a Maxima and Edurus Potion Simultaneously": {
                                type: B,
                                split: true,
                                after: ["Quest - Main - Jackdaw's Rest"]
                            },
                            "Learn Depulso": {
                                type: B,
                                split: true,
                                after: [
                                    "Quest - Assignment - Professor Sharp's Assignment 1 - Use a Focus Potion",
                                    "Quest - Assignment - Professor Sharp's Assignment 1 - Use a Maxima and Edurus Potion Simultaneously"
                                ]
                            },
                        }
                    },
                    "Professor Sharp's Assignment 2": {
                        type: F,
                        items: {
                            "Use an Invisibility Potion": {
                                type: B,
                                split: true,
                                after: ["Quest - Assignment - Professor Sharp's Assignment 1 - Learn Depulso"]
                            },
                            "Use a Thunderbrew Potion Against Enemies": {
                                type: B,
                                split: true,
                                after: ["Quest - Assignment - Professor Sharp's Assignment 1 - Learn Depulso"]
                            },
                            "Learn Depulso": {
                                type: B,
                                split: true,
                                after: [
                                    "Quest - Assignment - Professor Sharp's Assignment 2 - Use an Invisibility Potion",
                                    "Quest - Assignment - Professor Sharp's Assignment 2 - Use a Thunderbrew Potion Against Enemies"
                                ]
                            },
                        }
                    },
                    "Professor Garlick's Assignment 1": {
                        type: F,
                        items: {
                            "Use a Venomous Tentacula": {
                                type: B,
                                split: true,
                                after: [
                                    "Quest - Main - In the Shadow of the Undercroft",
                                    "Quest - Main - The Room of Requirement"
                                ]
                            },
                            "Use a Mandrake on Multiple Enemies Simultaneously": {
                                type: B,
                                split: true,
                                after: [
                                    "Quest - Main - In the Shadow of the Undercroft",
                                    "Quest - Main - The Room of Requirement"
                                ]
                            },
                            "Learn Wingardium Leviosa": {
                                type: B,
                                split: true,
                                after: [
                                    "Quest - Assignment - Professor Garlick's Assignment 1 - Use a Venomous Tentacula",
                                    "Quest - Assignment - Professor Garlick's Assignment 1 - Use a Mandrake on Multiple Enemies Simultaneously"
                                ]
                            },
                        }
                    },
                    "Professor Garlick's Assignment 2": {
                        type: F,
                        items: {
                            "Grow and Harvest Fluxweed": {
                                type: B,
                                split: true,
                                after: [
                                    "Quest - Assignment - Professor Garlick's Assignment 1 - Learn Depulso",
                                    "Buy - Tomes and Scrolls - Large Pot",
                                    "Buy - The Magic Neep - Fluxweed Seed"
                                ]
                            },
                            "Acquire All Three Combat Plants and Use Them Simultaneously": {
                                type: B,
                                split: true,
                                after: ["Quest - Assignment - Professor Garlick's Assignment 1 - Learn Depulso"]
                            },
                            "Learn Flipendo": {
                                type: B,
                                split: true,
                                after: [
                                    "Quest - Assignment - Professor Garlick's Assignment 2 - Grow and Harvest Fluxweed",
                                    "Quest - Assignment - Professor Garlick's Assignment 2 - UAcquire All Three Combat Plants and Use Them Simultaneously"
                                ]
                            },
                        }
                    },
                    "Madam Kogawa's Assignment 1": {
                        type: F,
                        items: {
                            "Pop Quidditch Pitch Balloons": {
                                type: B,
                                split: true,
                                after: ["Quest - Main - The Map Chamber"]
                            },
                            "Pop Hogsmeade Station Balloons": {
                                type: B,
                                split: true,
                                after: ["Quest - Main - The Map Chamber"]
                            },
                            "Learn Glacius": {
                                type: B,
                                split: true,
                                after: [
                                    "Quest - Assignment - Madam Kogawa's Assignment 1 - Pop Quidditch Pitch Balloons",
                                    "Quest - Assignment - Madam Kogawa's Assignment 1 - Pop Hogsmeade Station Balloons"
                                ]
                            },
                        }
                    },
                    "Madam Kogawa's Assignment 2": {
                        type: F,
                        items: {
                            "Pop The Spires Balloons": {
                                type: B,
                                split: true,
                                after: ["Quest - Assignment - Madam Kogawa's Assignment 1 - Learn Glacius"]
                            },
                            "Pop Keenbridge Balloons": {
                                type: B,
                                split: true,
                                after: ["Quest - Assignment - Madam Kogawa's Assignment 1 - Learn Glacius"]
                            },
                            "Learn Arresto Momentum": {
                                type: B,
                                split: true,
                                after: [
                                    "Quest - Assignment - Madam Kogawa's Assignment 2 - Pop The Spires Balloons",
                                    "Quest - Assignment - Madam Kogawa's Assignment 2 - Pop Keenbridge Balloons"
                                ]
                            },
                        }
                    },
                    "Professor Onai's Assignment": {
                        type: F,
                        items: {
                            "Collect Troll Bogeys": {
                                type: B,
                                split: true,
                                after: ["Quest - Main - Percival Rackham's Trial"]
                            },
                            "Cast Depulso on a Levitated Enemy": {
                                type: B,
                                split: true,
                                after: ["Quest - Main - Percival Rackham's Trial"]
                            },
                            "Learn Descendo": {
                                type: B,
                                split: true,
                                after: [
                                    "Quest - Assignment - Professor Onai's Assignment - Collect Troll Bogeys",
                                    "Quest - Assignment - Professor Onai's Assignment - Cast Depulso on a Levitated Enemy"
                                ]
                            },
                        }
                    },
                    "Professor Howin's Assignment": {
                        type: F,
                        items: {
                            "Have a Diricawl": {
                                type: B,
                                split: true,
                                after: ["Quest - Main - Charles Rookwood's Trial"]
                            },
                            "Have a Giant Purple Toad": {
                                type: B,
                                split: true,
                                after: ["Quest - Main - Charles Rookwood's Trial"]
                            },
                            "Learn Bombarda": {
                                type: B,
                                split: true,
                                after: [
                                    "Quest - Assignment - Professor Howin's Assignment - Have a Diricawl",
                                    "Quest - Assignment - Professor Howin's Assignment - Have a Giant Purple Toad"
                                ]
                            },
                        }
                    },
                    "Professor Weasley's Assignment": {
                        type: F,
                        items: {
                            "Collect Underground Harbor Page": {
                                type: B,
                                split: true,
                                after: ["Quest - Main - Fire and Vice"]
                            },
                            "Collect Library Page": {
                                type: B,
                                split: true,
                                after: ["Quest - Main - Fire and Vice"]
                            },
                            "Learn Bombarda": {
                                type: B,
                                split: true,
                                after: [
                                    "Quest - Assignment - Professor Weasley's Assignment - Collect Underground Harbor Page",
                                    "Quest - Assignment - Professor Weasley's Assignment - Collect Collect Harbor Page"
                                ]
                            },
                        }
                    },
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
                    },
                    "In the Shadow of Discovery": {
                        type: F,
                        items: {
                            "Complete": {
                                type: B,
                            },
                        }
                    },
                    "In the Shadow of Time": {
                        type: F,
                        items: {
                            "Catacomb": {
                                type: B,
                            },
                            "Feldcroft": {
                                type: B,
                            },
                        }
                    },
                    "In the Shadow of Distance": {
                        type: B,
                    },
                    "In the Shadow of Hope": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                            },
                            "Finish": {
                                type: B,
                            },
                        }
                    },
                    "In the Shadow of the Relic": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                            },
                            "Catacomb": {
                                type: B,
                            },
                        }
                    },
                    "In the Shadow of Fate": {
                        type: B,
                    },
                    "In the Shadow of Friendship": {
                        type: B,
                    },
                }
            },
            "Natty": {
                type: F,
                items: {
                    "The Lost Child": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                            },
                            "Revelio Hideout": {
                                type: B,
                            },
                            "Defeat Dark Mongrels": {
                                type: B,
                            },
                            "Ashwinder Camp": {
                                type: B,
                            },
                            "Ashwinder Tent": {
                                type: B,
                            },
                            "Free Archie": {
                                type: B,
                            },
                            "Complete": {
                                type: B,
                            },
                        }
                    },
                    "Mum's the Word": {
                        type: B,
                    },
                    "A Basis for Blackmail": {
                        type: F,
                        items: {
                            "Talk to Natty": {
                                type: B,
                            },
                            "Daisy Rabe": {
                                type: B,
                            },
                            "Otto Dibble": {
                                type: B,
                            },
                            "Agabus Philbert": {
                                type: B,
                            },
                            "Natty Spot": {
                                type: B,
                            },
                            "Dock": {
                                type: B,
                            },
                            "Find Natty": {
                                type: B,
                            },
                            "Find Book of Poems (Opt)": {
                                type: B,
                            },
                            "Find Love Letter (Opt)": {
                                type: B,
                            },
                            "Officer Singer": {
                                type: B,
                            },
                        }
                    },
                    "Grief and Vengeance": {
                        type: B,
                    },
                    "Finding Focus": {
                        type: B,
                    },
                    "Harlow's Last Stand": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                            },
                            "Harlow": {
                                type: B,
                            },
                        }
                    },
                    "Acting on Instinct": {
                        type: B,
                    },
                }
            },
            "Poppy": {
                type: F,
                items: {
                    "A Dragon Debrief": {
                        type: B,
                    },
                    "Poached Egg": {
                        type: B,
                    },
                    "The Poachers' House Call": {
                        type: B,
                    },
                    "Surprise Meeting": {
                        type: B,
                    },
                    "The Centaur and the Stone": {
                        type: B,
                    },
                    "It's in the Stars": {
                        type: B,
                    },
                    "A Bird in the Hand": {
                        type: B,
                    },
                    "Poppy Blooms": {
                        type: B,
                    },
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
                    "Summoner's Court: Match 1": {
                        type: F,
                        items: {
                            "Win": {
                                type: B,
                            },
                        }
                    },
                    "Summoner's Court: Match 2": {
                        type: F,
                        items: {
                            "Win": {
                                type: B,
                            },
                        }
                    },
                    "Summoner's Court: Match 3": {
                        type: F,
                        items: {
                            "Win": {
                                type: B,
                            },
                        }
                    },
                    "Summoner's Court: Match 4": {
                        type: F,
                        items: {
                            "Win": {
                                type: B,
                            },
                        }
                    },
                    "Summoner's Court: Match 5": {
                        type: F,
                        items: {
                            "Win": {
                                type: B,
                            },
                        }
                    },
                }
            },
            "Deek": {
                type: F,
                items: {
                    "The Plight of the House-Elf": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                            },
                            "Cave": {
                                type: B,
                            },
                            "Redeem": {
                                type: B,
                            },
                        }
                    },
                    "Foal of the Dead": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                            },
                            "Buy Breeding Pen": {
                                type: B,
                            },
                            "Place and Start Thestrals": {
                                type: B,
                            },
                            "Feed and Groom": {
                                type: B,
                            },
                            "Complete": {
                                type: B,
                            },
                        }
                    },
                    "Phoenix Rising": {
                        type: F,
                        items: {
                            "Deek": {
                                type: B,
                            },
                            "Phoenix": {
                                type: B,
                            },
                            "Redeem": {
                                type: B,
                            },
                        }
                    },
                }
            },
            "Flying": {
                type: F,
                items: {
                    "Flight Test": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                            },
                            "Quidditch Pitch Broom Trial": {
                                type: B,
                            },
                            "Redeem": {
                                type: B,
                            },
                        }
                    },
                    "Sweeping the Competition": {
                        type: F,
                        items: {
                            "Broom Upgrade 1/Start": {
                                type: B,
                            },
                            "Irondale Broom Trial": {
                                type: B,
                            },
                            "Redeem": {
                                type: B,
                            },
                        }
                    },
                    "The Sky is the Limit": {
                        type: F,
                        items: {
                            "Broom Upgrade 2/Start": {
                                type: B,
                            },
                            "South Coast Broom Trial": {
                                type: B,
                            },
                            "Redeem": {
                                type: B,
                            },
                            "Broom Upgrade 3": {
                                type: B,
                            },
                        }
                    },
                }
            },
            "Other": {
                type: F,
                items: {
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
                    "Cache in the Castle": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                                after: ["Quest - Main - Welcome to Hogsmeade"]
                            },
                            "Dinosaur": {
                                type: B,
                                after: ["Quest - Other - Cache in the Castle - Start"]
                            },
                            "Fountain": {
                                type: B,
                                after: ["Quest - Other - Cache in the Castle - Dinosaur"]
                            },
                            "Portrait": {
                                type: B,
                                after: ["Quest - Other - Cache in the Castle - Fountain"]
                            },
                            "Redeem": {
                                type: B,
                                after: ["Quest - Other - Cache in the Castle - Portrait"]
                            },
                        }
                    },
                    "The Daedalian Keys": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                                after: ["Quest - Main - Welcome to Hogsmeade"]
                            },
                        }
                    },
                    "Carted Away": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                                after: ["Quest - Main - Welcome to Hogsmeade"]
                            },
                            "Return Carts": {
                                type: B,
                                after: ["Quest - Other - Carted Away - Start"]
                            },
                            "Redeem": {
                                type: B,
                                after: ["Quest - Other - Carted Away - Return Carts"]
                            }
                        }
                    },
                    "The Lost Astrolabe": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                                after: ["Quest - Main - Welcome to Hogsmeade"]
                            },
                            "Astrolabe": {
                                type: B,
                            },
                            "Redeem": {
                                type: B,
                            },
                        }
                    },
                    "Well, Well, Well": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                                after: ["Quest - Main - Welcome to Hogsmeade"]
                            },
                            "Finish": {
                                type: B,
                            },
                        }
                    },
                    "Breaking Camp": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                                after: ["Quest - Main - Welcome to Hogsmeade"]
                            },
                            "Camp 1?": {
                                type: B,
                            },
                            "Camp 2?": {
                                type: B,
                            },
                            "Redeem": {
                                type: B,
                            },
                        }
                    },
                    "Brother's Keeper": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                                after: ["Quest - Main - Welcome to Hogsmeade"]
                            },
                            "Bardolph Beaumont": {
                                type: B,
                            },
                            "Redeem": {
                                type: B,
                            },
                        }
                    },
                    "Kidnapped Cabbage": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                                after: ["Quest - Main - Welcome to Hogsmeade"]
                            },
                            "Cabbage Crate 1": {
                                type: B,
                                after: ["Quest - Other - Kidnapped Cabbage"]
                            },
                            "Cabbage Crate 2": {
                                type: B,
                            },
                            "Deliver": {
                                type: B,
                            },
                        }
                    },
                    "Troll Control": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                                after: ["Quest - Main - Welcome to Hogsmeade"]
                            },
                            "Troll": {
                                type: B,
                                after: ["Quest - Other - Troll Control - Start"]
                            },
                            "Redeem": {
                                type: B,
                                after: ["Quest - Other - Troll Control - Troll"]
                            }
                        }
                    },
                    "E-vase-ive Maneuver": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                                after: ["Quest - Main - Welcome to Hogsmeade"]
                            },
                            "Vases": {
                                type: B,
                                after: ["Quest - Other - E-vase-ive Maneuver - Start"]
                            },
                            "Redeem": {
                                type: B,
                                after: ["Quest - Other - E-vase-ive Maneuver - Vases"]
                            }
                        }
                    },
                    "The Hippogriff Marks the Spot": {
                        type: F,
                        items: {
                            "Map": {
                                type: B,
                                after: ["Quest - Main - Welcome to Hogsmeade"]
                            },
                            "Hippogriff Puzzle": {
                                type: B,
                            },
                        }
                    },
                    "Birds of a Feather": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                                after: ["Quest - Main - Welcome to Hogsmeade"]
                            },
                            "Capture": {
                                type: B,
                                after: ["Quest - Other - Birds of a Feather - Start"]
                            },
                            "Redeem": {
                                type: B,
                                after: ["Quest - Other - Birds of a Feather - Capture"]
                            }
                        }
                    },
                    "Sacking Selwyn": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                                after: ["Quest - Main - Welcome to Hogsmeade"]
                            },
                            "Selwyn": {
                                type: B,
                                after: ["Quest - Main - Welcome to Hogsmeade"]
                            },
                            "Redeem": {
                                type: B,
                                after: ["Quest - Other - Sacking Selwyn - Selwyn"]
                            }
                        }
                    },
                    "Solved by the Bell": {
                        type: F,
                        items: {
                            "Map": {
                                type: B,
                                after: ["Quest - Main - Welcome to Hogsmeade"]
                            },
                            "Ding Ding Ding": {
                                type: B,
                            },
                        }
                    },
                    "Cursed Tomb Treasure": {
                        type: F,
                        items: {
                            "Map": {
                                type: B,
                                after: ["Quest - Main - Welcome to Hogsmeade"]
                            },
                            "Tomb of Treachery": {
                                type: B,
                            },
                        }
                    },
                    "Absconder Encounter": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                                after: ["Quest - Main - Welcome to Hogsmeade"]
                            },
                            "Trigger": {
                                type: B,
                                after: ["Quest - Other - Absconder Encounter - Start"]
                            },
                            "Absconder/Heirloom": {
                                type: B,
                                after: ["Quest - Other - Absconder Encounter - Absconder/Heirloom"]
                            },
                            "Redeem at the Guilt Tripper": {
                                type: B,
                            },
                        }
                    },
                    "Tangled Web": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                            },
                            "Cellar": {
                                type: B,
                            },
                            "Redeem": {
                                type: B,
                            },
                        }
                    },
                    "Venomous Valour": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                                after: ["Quest - Assignment - Professor Hecat's Assignment 1 - Learn Incendio"]
                            },
                            "Corridor": {
                                type: B,
                            },
                            "Redeem": {
                                type: B,
                            },
                        }
                    },
                    "'Dissending' for Sweets": {
                        type: F,
                        items: {
                            "Start (2x)": {
                                type: B,
                            },
                            "Billywig Stings": {
                                type: B,
                            },
                            "Redeem": {
                                type: B,
                            },
                        }
                    },
                    "Ghost of Our Love": {
                        type: F,
                        items: {
                            "Map": {
                                type: B,
                            },
                            "Candles": {
                                type: B,
                            },
                            "Chest": {
                                type: B,
                            },
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
                    "A Demanding Delivery": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                            },
                            "Deliver": {
                                type: B,
                            },
                            "Redeem": {
                                type: B,
                            },
                        }
                    },
                    "Interior Decorating": {
                        type: B,
                    },
                    "'Mer-ky' Depths": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                            },
                            "Artifact": {
                                type: B,
                            },
                            "Redeem": {
                                type: B,
                            },
                        }
                    },
                    "The Man Behind the Moons": {
                        type: F,
                        items: {
                            "Alohomora 2": {
                                type: B,
                            },
                            "Alohomora 3": {
                                type: B,
                            },
                        }
                    },
                    "The Hall of Herodiana": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                            },
                            "Hall": {
                                type: B,
                            },
                            "Redeem": {
                                type: B,
                            },
                        }
                    },
                    "A Friend in Deed": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                            },
                            "Dorothy": {
                                type: B,
                            },
                            "Letters": {
                                type: B,
                            },
                            "Dorothy": {
                                type: B,
                            },
                            "Redeem": {
                                type: B,
                            },
                        }
                    },
                    "Venomous Revenge": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                            },
                            "Cellar (Opt)": {
                                type: B,
                            },
                            "Deliver Tentacula": {
                                type: B,
                            },
                        }
                    },
                    "The Tale of Rowland Oakes": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                            },
                        }
                    },
                    "Take the Biscuit": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                            },
                            "Biscuit": {
                                type: B,
                            },
                            "Redeem": {
                                type: B,
                            },
                        }
                    },
                    "Rescuing Rococo": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                            },
                            "Niffler": {
                                type: B,
                            },
                            "Redeem": {
                                type: B,
                            },
                        }
                    },
                    "A Thief in the Night": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                            },
                            "Niffler/Heirloom": {
                                type: B,
                            },
                            "Redeem": {
                                type: B,
                            },
                        }
                    },
                    "Spot Removal": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                            },
                            "Bubotubers": {
                                type: B,
                            },
                            "Redeem": {
                                type: B,
                            },
                        }
                    },
                    "'Beeting' a Curse": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                            },
                        }
                    },
                    "All's Well that Ends Bell": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                            },
                        }
                    },
                    "History of Magic Class": {
                        type: B,
                    },
                    "The Unique Unicorn": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                            },
                            "Hazel": {
                                type: B,
                            },
                            "Redeem": {
                                type: B,
                            },
                        }
                    },
                    "Portrait in a Pickle": {
                        type: F,
                        items: {
                            "Start": {
                                type: B,
                            },
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
                            "The Astronomy Wing": {
                                type: F,
                                items: {
                                    "Astronomy Tower": {type: B, repeatable: true},
                                    "Charms": {type: B, repeatable: true},
                                    "Defense Against the Dark Arts Tower": {type: B, repeatable: true},
                                    "Defense Against the Dark Arts Classroom": {type: B, repeatable: true},
                                    "Professor Fig's Classroom": {type: B, repeatable: true},
                                    "Transfiguration Classroom": {type: B, repeatable: true},
                                    "Transfiguration Courtyard": {type: B, repeatable: true},
                                }
                            },
                            "The Bell Tower Wing": {
                                type: F,
                                items: {
                                    "Bell Tower Courtyard": {type: B, repeatable: true},
                                    "Flying Class Lawn": {type: B, repeatable: true},
                                    "Beasts Classroom": {type: B, repeatable: true},
                                    "Hogwarts North Exit": {type: B, repeatable: true},
                                    "West Tower": {type: B, repeatable: true},
                                }
                            },
                            "The Grand Staircase": {
                                type: F,
                                items: {
                                    "Grand Staircase": {type: B, repeatable: true},
                                    "Grand Staircase Tower": {type: B, repeatable: true},
                                    "Lower Grand Staircase": {type: B, repeatable: true},
                                    "Quad Courtyard": {type: B, repeatable: true},
                                    "Ravenclaw Common Room": {type: B, repeatable: true},
                                    "Ravenclaw Tower": {type: B, repeatable: true},
                                    "Slytherin Common Room": {type: B, repeatable: true},
                                    "Trophy Room": {type: B, repeatable: true},
                                }
                            },
                            "The Great Hall": {
                                type: F,
                                items: {
                                    "Boathouse": {type: B, repeatable: true},
                                    "Great Hall": {type: B, repeatable: true},
                                    "Hufflepuff Common Room": {type: B, repeatable: true},
                                    "Viaduct Courtyard": {type: B, repeatable: true},
                                }
                            },
                            "The Library Annex": {
                                type: F,
                                items: {
                                    "Central Hall": {type: B, repeatable: true},
                                    "Divination Classroom": {type: B, repeatable: true},
                                    "Greenhouses": {type: B, repeatable: true},
                                    "Library": {type: B, repeatable: true},
                                    "Potions Classroom": {type: B, repeatable: true},
                                }
                            },
                            "Secret Rooms": {
                                type: F,
                                items: {
                                    "Map Chamber": {type: B, repeatable: true},
                                    "Room of Requirement": {type: B, repeatable: true},
                                }
                            },
                            "The South Wing": {
                                type: F,
                                items: {
                                    "Clock Tower Courtyard": {type: B, repeatable: true},
                                    "Faculty Tower": {type: B, repeatable: true},
                                    "Gryffindor Common Room": {type: B, repeatable: true},
                                    "Hospital Wing": {type: B, repeatable: true},
                                    "Hogwarts South Exit": {type: B, repeatable: true},
                                }
                            },
                        }
                    },
                    "Hogsmeade": {
                        type: F,
                        items: {
                            "North Hogsmeade": {type: B, repeatable: true},
                            "West Hogsmeade": {type: B, repeatable: true},
                            "South Hogsmeade": {type: B, repeatable: true},
                        }
                    },
                    "Highlands": {
                        type: F,
                        items: {
                            "North Ford Bog": {
                                type: F,
                                items: {
                                    "East North Ford Bog": {type: B, repeatable: true},
                                    "North Ford Bog": {type: B, repeatable: true},
                                    "Pitt-Upon-Ford": {type: B, repeatable: true},
                                    "San Bakar's Tower": {type: B, repeatable: true},
                                }
                            },
                            "Forbidden Forest": {
                                type: F,
                                items: {
                                    "Jackdaw's Tomb": {type: B, repeatable: true},
                                    "North Ford Bog Entrance": {type: B, repeatable: true},
                                    "West Forbidden Forest": {type: B, repeatable: true},
                                }
                            },
                            "Hogsmeade Valley": {
                                type: F,
                                items: {
                                    "East Hosgmeade Valley": {type: B, repeatable: true},
                                    "Falbarton Castle": {type: B, repeatable: true},
                                    "Upper Hogsfield": {type: B, repeatable: true},
                                }
                            },
                            "North Hogwarts Region": {
                                type: F,
                                items: {
                                    "East North Hogwarts Region": {type: B, repeatable: true},
                                    "Korrow Ruins": {type: B, repeatable: true},
                                    "The Collector's Cave": {type: B, repeatable: true},
                                }
                            },
                            "South Hogwarts Region": {
                                type: F,
                                items: {
                                    "Aranshire": {type: B, repeatable: true},
                                    "Forbidden Forest": {type: B, repeatable: true},
                                    "Lower Hogsfield": {type: B, repeatable: true},
                                    "Mooncalf Den": {type: B, repeatable: true},
                                }
                            },
                            "Hogwarts Valley": {
                                type: F,
                                items: {
                                    "Brocburrow": {type: B, repeatable: true},
                                    "Central Hogwarts Valley": {type: B, repeatable: true},
                                    "Keenbridge": {type: B, repeatable: true},
                                    "The Mine's Eye": {type: B, repeatable: true},
                                }
                            },
                            "Feldcroft Region": {
                                type: F,
                                items: {
                                    "Feldcroft": {type: B, repeatable: true},
                                    "Feldcroft Catacomb": {type: B, repeatable: true},
                                    "Irondale": {type: B, repeatable: true},
                                    "North Feldcroft": {type: B, repeatable: true},
                                    "Rookwood Castle": {type: B, repeatable: true},
                                    "South Feldcroft": {type: B, repeatable: true},
                                    "West Hogwarts Valley": {type: B, repeatable: true},
                                }
                            },
                            "South Sea Bog": {
                                type: F,
                                items: {
                                    "Northern South Sea Bog": {type: B, repeatable: true},
                                }
                            },
                            "Coastal Cavern": {
                                type: F,
                                items: {
                                    "East South Sea Bog?": {type: B, repeatable: true},
                                    "North Poidsear Coast": {type: B, repeatable: true},
                                }
                            },
                            "Poidsear Coast": {
                                type: F,
                                items: {
                                    "Marunweem Bridge": {type: B, repeatable: true},
                                    "Phoenix Mountain Cave": {type: B, repeatable: true},
                                    "Poidsear Castle": {type: B, repeatable: true},
                                    "South Poidsear Coast": {type: B, repeatable: true},
                                    "Tomb of Treachery": {type: B, repeatable: true},
                                }
                            },
                            "Marunweem Lake": {
                                type: F,
                                items: {
                                    "Coastal Mine": {type: B, repeatable: true},
                                    "Marunweem": {type: B, repeatable: true},
                                    "Marunweem Lake": {type: B, repeatable: true},
                                    "Marunweem Ruins": {type: B, repeatable: true},
                                    "Tower Tunnel": {type: B, repeatable: true},
                                }
                            },
                            "Manor Cape": {
                                type: F,
                                items: {
                                    "Bainburgh": {type: B, repeatable: true},
                                    "West Manor Cape": {type: B, repeatable: true},
                                }
                            },
                            "Cragcroftshire": {
                                type: F,
                                items: {
                                    "Cragcroft": {type: B, repeatable: true},
                                    "Cragcroft Shore": {type: B, repeatable: true},
                                }
                            },
                            "Clagmar Coast": {
                                type: F,
                                items: {
                                    "Clagmar Castle": {type: B, repeatable: true},
                                    "South Clagmar Coast": {type: B, repeatable: true},
                                }
                            },
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
                    "Diricawl": {type: B, repeatable: true},
                    "Fwooper": {type: B, repeatable: true},
                    "Giant Purple Toad": {type: B, repeatable: true},
                    "Graphorn": {type: B, repeatable: true},
                    "Hippogriff": {type: B, repeatable: true},
                    "Jobberknoll": {type: B, repeatable: true},
                    "Kneazle": {type: B, repeatable: true},
                    "Mooncalf": {type: B, repeatable: true},
                    "Niffler": {type: B, repeatable: true},
                    "Phoenix": {type: B},
                    "Puffskein": {type: B, repeatable: true},
                    "Unicorn": {type: B, repeatable: true},
                    "Thestral": {type: B, repeatable: true},
                }
            },
            "Item": {
                type: F,
                items: {}
            }
        }
    }
};