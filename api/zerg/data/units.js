export const Units = {
    _: {
      code: '_',
      name: 'Larvae',
      minerals: 0,
      vespene: 0,
      duration: 10.6,
      supply: 0,
      type: ['armored', 'biological'],
      text: 'Spawns from Hatchery',
      attacks: [],
      special: 'Limit 3',
      morphs: ['all']
    },
    Ω: {
      code: 'Ω',
      name: 'Egg',
      minerals: 0,
      vespene: 0,
      duration: null,
      supply: 0,
      type: ['armored', 'biological'],
      text: 'Spawns from Larvae',
      attacks: []
    },
    d: {
      code: 'd',
      name: 'Drone',
      minerals: 50,
      vespene: 0,
      duration: 12,
      supply: 1,
      type: ['biological'],
      text: 'Basic worker unit. Can harvest minerals and vespene gas. Can mutate into structures.',
      attacks: [],
      mutates: ['Basic Structures', 'Advanced Structures']
    },
    o: {
      code: 'o',
      name: 'Overlord',
      minerals: 100,
      vespene: 0,
      duration: 18,
      supply: -8,
      type: ['armored', 'biological'],
      text: 'Provides Supply. Supply allows you to create more units.',
      attacks: [],
      morphs: ['Overseer', 'Ventral Sacs']
    },
    O: {
      code: 'O',
      name: 'Overseer',
      minerals: 50,
      vespene: 50,
      duration: 12,
      supply: -8,
      type: ['armored', 'biological'],
      text: 'Advanced aerial observer. Provides the same supply as an Overlord. Can use Spawn Changeling and Contaminate abilities.',
      attacks: [],
      spells: [
        'Oversight',
        'Spawn Changeling',
        'Contaminate'
      ],
      passive: [
        'Detector'
      ]
    },
    a: {
      code: 'a',
      name: 'Ventral Sacs',
      minerals: 25,
      vespene: 25,
      duration: 12,
      supply: -8,
      type: ['armored', 'biological'],
      text: 'Spawns from HAtchery',
      attacks: [],
      morphs: ['Overseer']
    },
    q: {
      code: 'q',
      name: 'Queen',
      minerals: 150,
      vespene: 0,
      duration: 36,
      supply: 2,
      type: ['psionic', 'biological'],
      text: 'Defensive unit. Can use Spawn Larvae, Spawn Creep Tumor, and Transfusion. Moves faster on creep.',
      attacks: [
        'ground',
        'air'
      ],
      spells: [
        'Spawn Larvae',
        'Spawn Creep Tumor',
        'Transfusion'
      ]
    },
    z: {
      code: 'z',
      name: 'Zergling',
      minerals: 50,
      vespene: 0,
      duration: 17,
      supply: 1,
      type: ['light', 'biological'],
      text: 'Fast melee creature. Can morph into baneling.',
      attacks: [
        'ground'
      ],
      special: [
        'Twins'
      ]
    },
    b: {
      code: 'b',
      name: 'Baneling',
      minerals: 25,
      vespene: 25,
      duration: 14,
      supply: 1,
      type: ['biological'],
      text: 'Suicide Unit. Does damage over a small area on death.',
      attacks: [
        'ground'
      ]
    },
    r: {
      code: 'r',
      name: 'Roach',
      minerals: 75,
      vespene: 25,
      duration: 19,
      supply: 1,
      type: ['armored', 'biological'],
      text: 'Assault unit. Regenerates life quickly when burrowed. Can morph into Ravager.',
      attacks: [
        'ground'
      ],
      morphs: ['Ravager']
    },
    R: {
      code: 'R',
      name: 'Ravager',
      minerals: 25,
      vespene: 75,
      duration: 9,
      supply: 3,
      type: ['biological'],
      text: 'Ranged artillery. Can use Corrosive Bile.',
      attacks: [
        'ground'
      ],
      spells: [
        'Corrosive Bile'
      ]
    },
    h: {
      code: 'h',
      name: 'Hydralisk',
      minerals: 100,
      vespene: 50,
      duration: 24,
      supply: 2,
      type: ['light', 'biological'],
      text: 'Ranged Attacker. Can morph into Lurker.',
      attacks: [
        'ground',
        'air'
      ],
      spells: [
        'Corrosive Bile'
      ],
      morphs: ['Lurker']
    },
    l: {
      code: 'l',
      name: 'Lurker',
      minerals: 50,
      vespene: 100,
      duration: 18,
      supply: 3,
      type: ['biological'],
      text: 'Anti-ground ambusher. Has a spine attack that damages all enemy units in its line of fire.',
      attacks: [
        'ground'
      ]
    },
    m: {
      code: 'm',
      name: 'Mutalisk',
      minerals: 100,
      vespene: 100,
      duration: 24,
      supply: 2,
      type: ['light', 'biological'],
      text: 'Air unit. Bounces its shot to strike multiple targets.',
      attacks: [
        'ground',
        'air'
      ],
      passive: [
          'Tissue Regeneration'
      ]
    },
    c: {
      code: 'c',
      name: 'Corruptor',
      minerals: 150,
      vespene: 100,
      duration: 29,
      supply: 2,
      type: ['armored', 'biological'],
      text: 'Anti-air flyer. Can use Caustic Spray. Can morph into Brood Lord.',
      attacks: [
        'air'
      ],
      spells: [
        'Caustic Spray'
      ],
      morphs: ['Brood Lord']
    },
    B: {
      code: 'B',
      name: 'Brood Lord',
      minerals: 150,
      vespene: 150,
      duration: 24,
      supply: 4,
      type: ['biological'],
      text: 'Flying heavy-assault unit. Shoots Broodlings at its target. A Broodling is a small creature that can attack ground units.',
      attacks: [
        'ground'
      ],
      requires: ['Greater Spire']
    },
    i: {
      code: 'i',
      name: 'Infestor',
      minerals: 100,
      vespene: 150,
      duration: 36,
      supply: 2,
      type: ['psionic', 'armored', 'biological'],
      text: 'Infestation specialist. Can use the Fungal Growth, Microbial Shroud, and Neural Parasite abilities.',
      attacks: [],
      spells: [
        'Fungal Growth',
        'Microbial Shroud',
        'Neural Parasite'
      ]
    },
    s: {
      code: 's',
      name: 'Swarm Host',
      minerals: 100,
      vespene: 75,
      duration: 29,
      supply: 3,
      type: ['armored', 'biological'],
      text: 'Siege unit that attacks by spawning Locust minions. Locusts can attack ground units.',
      attacks: [],
      spells: [
        'Spawn Locusts'
      ]
    },
    v: {
      code: 'v',
      name: 'Viper',
      minerals: 100,
      vespene: 200,
      duration: 29,
      supply: 3,
      type: ['psionic', 'biological'],
      text: 'Flying caster. Able to manipulate battlefield conditions. Can use Parasitic Bomb, Consume, Blinding Cloud, and Abduct abilities.',
      attacks: [],
      spells: [
        'Parasitic Bomb',
        'Consume',
        'Blinding Cloud',
        'Abduct'
      ]
    },
    u: {
      code: 'u',
      name: 'Ultralisk',
      minerals: 300,
      vespene: 200,
      duration: 39,
      supply: 6,
      type: ['armored', 'massive', 'biological'],
      text: 'Heavy assault beast. Has an area-damage attack',
      attacks: [
        'ground'
      ],
      passive: [
          'Frenzied'
      ]
    }
  }