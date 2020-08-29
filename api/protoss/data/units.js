export const Units = {
    Larvae: {
      minerals: 0,
      vespene: 0,
      duration: 10.6,
      supply: 0,
      text: 'Spawns from Hatchery',
      attacks: [],
      special: 'Limit 3'
    },
    Egg: {
      minerals: 0,
      vespene: 0,
      duration: null,
      supply: 0,
      text: 'Spawns from Larvae',
      attacks: []
    },
    Drone: {
      minerals: 50,
      vespene: 0,
      duration: 12,
      supply: 1,
      text: 'Basic worker unit. Can harvest minerals and vespene gas. Can mutate into structures.',
      attacks: []
    },
    Overlord: {
      minerals: 100,
      vespene: 0,
      duration: 18,
      supply: -8,
      text: 'Provides Supply. Supply allows you to create more units.',
      attacks: []
    },
    Overseer: {
      minerals: 50,
      vespene: 50,
      duration: 12,
      supply: -8,
      text: 'Advanced aerial observer. Provides the same supply as an Overlord. Can use Spawn Changeling and Contaminate abilities.',
      attacks: [],
      special: [
        'Detector'
      ]
    },
    'Ventral Sacs': {
      minerals: 25,
      vespene: 25,
      duration: 12,
      supply: -8,
      text: 'Spawns from HAtchery',
      attacks: []
    },
    Queen: {
      minerals: 150,
      vespene: 0,
      duration: 36,
      supply: 2,
      text: 'Defensive unit. Can use Spawn Larvae, Spawn Creep Tumor, and Transfusion. Moves faster on creep.',
      attacks: [
        'ground',
        'air'
      ],
      special: [
        'Spawn Larvae',
        'Spawn Creep Tumor',
        'Transfusion'
      ]
    },
    Zergling: {
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
    Baneling: {
      minerals: 25,
      vespene: 25,
      duration: 14,
      supply: 1,
      text: 'Suicide Unit. Does damage over a small area on death.',
      attacks: [
        'ground'
      ]
    },
    Roach: {
      minerals: 75,
      vespene: 25,
      duration: 19,
      supply: 1,
      text: 'Assault unit. Regenerates life quickly when burrowed. Can morph into Ravager.',
      attacks: [
        'ground'
      ]
    },
    Ravager: {
      minerals: 25,
      vespene: 75,
      duration: 9,
      supply: 3,
      text: 'Ranged artillery. Can use Corrosive Bile.',
      attacks: [
        'ground'
      ],
      special: [
        'Corrosive Bile'
      ]
    },
    Hydralisk: {
      minerals: 100,
      vespene: 50,
      duration: 24,
      supply: 2,
      text: 'Ranged Attacker. Can morph into Lurker.',
      attacks: [
        'ground',
        'air'
      ],
      special: [
        'Corrosive Bile'
      ]
    },
    Lurker: {
      minerals: 50,
      vespene: 100,
      duration: 18,
      supply: 3,
      text: 'Anti-ground ambusher. Has a spine attack that damages all enemy units in its line of fire.',
      attacks: [
        'ground'
      ]
    },
    Mutalisk: {
      minerals: 100,
      vespene: 100,
      duration: 24,
      supply: 2,
      text: 'Air unit. Bounces its shot to strike multiple targets.',
      attacks: [
        'ground',
        'air'
      ]
    },
    Corruptor: {
      minerals: 150,
      vespene: 100,
      duration: 29,
      supply: 2,
      text: 'Anti-air flyer. Can use Caustic Spray. Can morph into Brood Lord.',
      attacks: [
        'air'
      ],
      special: [
        'Caustic Spray'
      ]
    },
    'Brood Lord': {
      minerals: 150,
      vespene: 150,
      duration: 24,
      supply: 4,
      text: 'Flying heavy-assault unit. Shoots Broodlings at its target. A Broodling is a small creature that can attack ground units.',
      attacks: [
        'ground'
      ]
    },
    Infestor: {
      minerals: 100,
      vespene: 150,
      duration: 36,
      supply: 2,
      text: 'Infestation specialist. Can use the Fungal Growth, Microbial Shroud, and Neural Parasite abilities.',
      attacks: [],
      special: [
        'Fungal Growth',
        'Microbial Shroud',
        'Neural Parasite'
      ]
    },
    'Swarm Host': {
      minerals: 100,
      vespene: 75,
      duration: 29,
      supply: 3,
      text: 'Siege unit that attacks by spawning Locust minions. Locusts can attack ground units.',
      attacks: [],
      special: [
        'Spawn Locusts'
      ]
    },
    Viper: {
      minerals: 100,
      vespene: 200,
      duration: 29,
      supply: 3,
      text: 'Flying caster. Able to manipulate battlefield conditions. Can use Parasitic Bomb, Consume, Blinding Cloud, and Abduct abilities.',
      attacks: [],
      special: [
        'Parasitic Bomb',
        'Consume',
        'Blinding Cloud',
        'Abduct'
      ]
    },
    Ultralisk: {
      minerals: 300,
      vespene: 200,
      duration: 39,
      supply: 6,
      text: 'Heavy assault beast. Has an area-damage attack',
      attacks: [
        'ground'
      ]
    }
  }