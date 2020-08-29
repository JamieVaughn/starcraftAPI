export const Spells = {
    'Spawn Larvae': {
      text: 'Target Hatchery, Lair, or Hive spawns 3 Larvae in 29 seconds. If Hatchery, Lair, or Hive has more than 3 Larvae at one time, regular Larvae production will stop until there are fewer than 3 Larvae. This will stack and queue if the target is already spawning additional Larvae.',
      energy: 25,
      duration: 29
    },
    'Spawn Creep Tumor': {
      text: 'A burrowed creep generator. Creep feeds nearby Zerg structures. A Creep Tumor can spawn one additional Creep Tumor. Bonus: Zerg move faster on creep.',
      energy: 25,
      duration: 11
    },
    Transfusion: {
      text: 'Instantly heals target biological unit or structure for 75 life. An additional 50 life regenerates over 7 seconds.',
      energy: 50
    },
    Oversight: {
      text: 'Grants the Overseer 25% wider vision, but removes its ability to move. This ability can be canceled after activation.',
      cooldown: 0
    },
    Changeling: {
      text: 'Creates a Changeling. Changelings cannot attack and die after 107 seconds. When a Changeling first encounters an enemy unit, it will match that units color and change into a Zealot, Marine, or Zergling depending on the enemy race.',
      energy: 50
    },
    Contaminate: {
      text: 'The target structure will be unable to train units or research upgrades for 21 seconds.',
      energy: 125
    },
    'Corrosive Bile': {
      text: 'Launch a missile at the target location, dealing 60 damage to all units in the area upon impact. Can destory Protoss Force Fields. Ignores armor.',
      cooldown: 7
    },
    'Blinding Cloud': {
      text: 'Creates a cloud for 6 seconds that reduces attack range of ground units and structures underneath to melee range.',
      energy: 100
    },
    Consume: {
      text: 'Latches onto the target structure, dealing 200 damage and restoring 3.5 energy to the Viper every second. Lasts for 14 seconds. Cannot target allied or enemy structures.',
      cooldown: 1
    },
    Abduct: {
      text: 'Pulls target unit to the location of the Viper.',
      energy: 75
    },
    'Parasitic Bomb': {
      text: 'Creates a parasitic cloud that deals 120 damage over 7 seconds to the target and enemy units nearby. If the target dies, the cloud remains in the air where the enemy died until it expires.',
      energy: 125
    },
    'Fungal Growth': {
      text: 'Target units take 30 damage over 3 seconds and have movement speed reduced by 75%. Reveals cloaked and burrowed units. Affected units cannot Blink or load into transports or buildings.',
      energy: 75
    },
    'Microbial Shroud': {
      text: 'Creates a shroud that obscures ground units underneath, reducing damage taken from air units by 50%. Lasts 11 seconds.',
      energy: 75
    },
    'Neural Parasite': {
      text: 'Target unit is controlled by the Infestor for 11 seconds. The Infester cannot take any other actions while controlling an enemy unit. Channeled ability. Can cast while burrowed. Heroic units are immune.',
      energy: 100,
      requires: ['Neural Parasite Upgrade']
    },
    'Caustic Spray': {
        text: 'Emits a stream of acid that deals 7 damage per second for 4.3 seconds, then increases to 35 damage per second. Channeled ability. Can only target enemy structures.',
        cooldown: 32
    },
    'Spawn Locusts': {
      text: 'Spawns 2 Locusts. Locusts have an 18 second time life. Locusts can attack ground.',
      cooldown: 43
    },
    Uproot: {
      text: 'Uproots the Spine/Spore Crawler. An uprooted Spine/Spore Crawler has the ability to move but cannot attack. Moves much faster on creep.',
      duration: 0
    },
    Root: {
      text: 'Crawlers can root into place and attack.',
      duration: 5
    }
  }

  export const Passives = {
    Frenzied: {
      text: 'Immune to snare, stun, mind control and movement altering effects.'
    },
    'Tissue Regeneration': {
      text: 'The Mutalisk regenerates life faster than most zerg units.'
    },
    'Subterranean Scales': {
      text: 'Nydus Worms have 3 armor when emerging from the ground.'
    }
  }