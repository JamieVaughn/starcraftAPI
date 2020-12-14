export const Units = {
    Probe: {
      minerals: 50,
      vespene: 0,
      duration: 12,
      supply: 1,
      text: 'Basic worker unit. Can harvest minerals and vespene gas. Can mutate into structures.',
      attacks: []
    },
    Zealot: {
      minerals: 100,
      vespene: 0,
      duration: 18,
      supply: 1,
      text: 'Provides Supply. Supply allows you to create more units.',
      attacks: []
    },
    Adept: {
      minerals: 50,
      vespene: 50,
      duration: 12,
      supply: 1,
      text: 'Advanced aerial observer. Provides the same supply as an Overlord. Can use Spawn Changeling and Contaminate abilities.',
      attacks: [],
      special: [
        'Astral Projection'
      ]
    },
    Stalker: {
      minerals: 25,
      vespene: 25,
      duration: 12,
      supply: 2,
      text: 'Spawns from HAtchery',
      attacks: [
        'ground',
        'air'
      ],
      special: [
        'Blink'
      ]
    },
    Sentry: {
      minerals: 125,
      vespene: 125,
      duration: 12,
      supply: 2,
      text: 'Spawns from HAtchery',
      attacks: [
        'ground',
        'air'
      ],
      special: [
        'Hallucination',
        'Shield Battery',
        'Forcefield',
        'Dome Shield'
      ]
    },
    'High Templar': {
      minerals: 150,
      vespene: 0,
      duration: 36,
      supply: 2,
      text: 'Defensive unit. Can use Spawn Larvae, Spawn Creep Tumor, and Transfusion. Moves faster on creep.',
      attacks: [
        'ground'
      ],
      special: [
        'Pyschic Storm',
        'Morph Archon'
      ]
    },
    'Dark Templar': {
      minerals: 150,
      vespene: 0,
      duration: 36,
      supply: 2,
      text: 'Defensive unit. Can use Spawn Larvae, Spawn Creep Tumor, and Transfusion. Moves faster on creep.',
      attacks: [
        'ground'
      ],
      special: [
        'Invisible',
        'Blink',
        'Morph Archon'
      ]
    },
    Archon: {
      'Dark Templar': {
        minerals: 150,
        vespene: 0,
        duration: 36,
        supply: 2,
        text: 'Defensive unit. Can use Spawn Larvae, Spawn Creep Tumor, and Transfusion. Moves faster on creep.',
        attacks: [
          'ground',
          'air'
        ]
      },
    },
    Immortal: {
      minerals: 50,
      vespene: 0,
      duration: 17,
      supply: 1,
      text: 'Fast melee creature. Can morph into baneling.',
      attacks: [
        'ground'
      ],
      special: [
        'Twins'
      ]
    },
    Observer: {
      minerals: 25,
      vespene: 25,
      duration: 14,
      supply: 1,
      text: 'Suicide Unit. Does damage over a small area on death.',
      attacks: [
        'ground'
      ],
      special: [
        'Detector'
      ]
    },
    Colossus: {
      minerals: 75,
      vespene: 25,
      duration: 19,
      supply: 1,
      text: 'Assault unit. Regenerates life quickly when burrowed. Can morph into Ravager.',
      attacks: [
        'ground'
      ]
    },
    Disruptor: {
      minerals: 25,
      vespene: 75,
      duration: 9,
      supply: 3,
      text: 'Ranged artillery. Can use Purification Nova.',
      attacks: [
        'ground'
      ],
      special: [
        'Purification Nova'
      ]
    },
    'Warp Prism': {
      minerals: 50,
      vespene: 100,
      duration: 18,
      supply: 3,
      text: 'Anti-ground ambusher. Has a spine attack that damages all enemy units in its line of fire.',
      attacks: [],
      special: [
        'Transport'
      ]
    },
    Oracle: {
      minerals: 100,
      vespene: 50,
      duration: 24,
      supply: 2,
      text: 'Ranged Attacker. Can morph into Lurker.',
      attacks: [
        'ground',
      ],
      special: [
        'Beam'
      ]
    },
    Pheonix: {
      minerals: 50,
      vespene: 100,
      duration: 18,
      supply: 3,
      text: 'Anti-ground ambusher. Has a spine attack that damages all enemy units in its line of fire.',
      attacks: [
        'air'
      ],
      special: [
        'Lift Ray'
      ]
    },
    'Void Ray': {
      minerals: 50,
      vespene: 100,
      duration: 18,
      supply: 3,
      text: 'Anti-ground ambusher. Has a spine attack that damages all enemy units in its line of fire.',
      attacks: [
        'ground',
        'air'
      ],
      special: [
        'Prismatic Alignment'
      ]
    },
    Carrier: {
      minerals: 100,
      vespene: 100,
      duration: 24,
      supply: 2,
      text: 'Air unit. Bounces its shot to strike multiple targets.',
      attacks: [
        'ground',
        'air'
      ],
      special: [
        'Make interceptor'
      ]
    },
    Interceptor: {
      minerals: 15,
      vespene: 0,
      duration: 9,
      supply: 0,
      text: 'Anti-air flyer. Can use Caustic Spray. Can morph into Brood Lord.',
      attacks: [
        'ground',
        'air'
      ]
    },
    Tempest: {
      minerals: 150,
      vespene: 150,
      duration: 24,
      supply: 4,
      text: 'Flying heavy-assault unit. Shoots Broodlings at its target. A Broodling is a small creature that can attack ground units.',
      attacks: [
        'ground',
        'air'
      ]
    },
    Mothership: {
      minerals: 100,
      vespene: 150,
      duration: 36,
      supply: 2,
      text: 'Infestation specialist. Can use the Fungal Growth, Microbial Shroud, and Neural Parasite abilities.',
      attacks: [
        'ground',
        'air'
      ],
      special: [
        'Time Warp',
        'Invisibility Field',
        'Neural Parasite'
      ]
    }
  }