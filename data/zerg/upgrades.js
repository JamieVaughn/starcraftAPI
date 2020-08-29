export const Upgrades = {
    mb: {
      name: 'Metabolic Boost',
      minerals: 100,
      vespene: 100,
      duration: 79,
      text: 'Increases the movement speed of Zerglings.',
      requires: [],
      at: 'Spawning Pool'
    },
    ag: {
      name: 'Adrenal Glands',
      minerals: 200,
      vespene: 200,
      duration: 93,
      text: 'Increases the attack speed of Zerglings by 40%.',
      requires: [],
      at: 'Spawning Pool'
    },
    pc: {
      name: 'Pneumatized Carapace',
      minerals: 100,
      vespene: 100,
      duration: 43,
      text: 'Increases the movement speed of Overlords and Overseers.',
      requires: [],
      at: 'Hatchery'
    },
    bw: {
      name: 'Pneumatized Carapace',
      minerals: 100,
      vespene: 100,
      duration: 71,
      text: 'Enables all Zerg units to use the Burrow ability. Burrow allows a unit to take cover undergraound, rendering it unable to attack. A burrowed unit is invisible unless revealed by detectors or effects.',
      requires: [],
      at: 'Hatchery'
    },
    melee: {
      name: 'Melee Attack',
      minerals: [100, 150, 200],
      vespene: [100, 150, 200],
      duration: [114, 136, 157],
      sharedText: 'all Zerg melee attacks.',
      text: ['Upgrades', 'Further Upgrades', 'Maximizes'],
      requires: ['', 'Lair, Level1', 'Hive, Level2'],
      at: 'Evolution Chamber'
    },
    missile: {
      name: 'Missile Attack',
      minerals: [100, 150, 200],
      vespene: [100, 150, 200],
      duration: [114, 136, 157],
      sharedText: 'the attack of all Zerg ground ranged units.',
      text: ['Upgrades', 'Further Upgrades', 'Maximizes'],
      requires: ['', 'Lair, Level1', 'Hive, Level2'],
      at: 'Evolution Chamber'
    },
    carapace: {
      name: 'Ground Carapace',
      minerals: [150, 225, 300],
      vespene: [150, 225, 300],
      duration: [114, 136, 157],
      sharedText: 'the armor of all Zerg ground units.',
      text: ['Upgrades', 'Further Upgrades', 'Maximizes'],
      requires: ['', 'Lair, Level1', 'Hive, Level2'],
      at: 'Evolution Chamber'
    },
    flyerAttacks: {
      name: 'Zerg Flyer Attacks',
      minerals: [100, 175, 250],
      vespene: [100, 175, 250],
      duration: [114, 136, 157],
      sharedText: 'the attacks of all Zerg air units.',
      text: ['Upgrades', 'Further Upgrades', 'Maximizes'],
      requires: ['', 'Lair', 'Hive'],
      at: 'Spire'
    },
    flyerCarapace: {
      name: 'Zerg Flyer Carapace',
      minerals: [150, 225, 300],
      vespene: [150, 225, 300],
      duration: [114, 136, 157],
      sharedText: 'the armor of all Zerg air units.',
      text: ['Upgrades', 'Further Upgrades', 'Maximizes'],
      requires: ['', 'Lair, Level1', 'Hive, Level2'],
      at: 'Spire'
    },
    gr: {
      name: 'Glial Reconstruction',
      minerals: 100,
      vespene: 100,
      duration: 79,
      text: 'Increases the movement speed of Roaches.',
      requires: ['Lair'],
      at: 'Roach Warren'
    },
    tc: {
      name: 'Tunneling Claws',
      minerals: 100,
      vespene: 100,
      duration: 79,
      text: 'Enables Roaches to move while burrowed.',
      requires: ['Lair'],
      at: 'Roach Warren'
    },
    ch: {
      name: 'Centrifugal Hooks',
      minerals: 150,
      vespene: 150,
      duration: 79,
      text: 'Banelings gain increased movement speed and +5 life.',
      requires: ['Lair'],
      at: 'Baneling Nest'
    },
    ma: {
      name: 'Muscular Augments',
      minerals: 100,
      vespene: 100,
      duration: 71,
      text: 'Increases the movement speed of Hydralisks.',
      requires: [],
      at: 'Hydralisk Den'
    },
    gs: {
      name: 'Grooved Spines',
      minerals: 100,
      vespene: 100,
      duration: 71,
      text: 'Increases Hydralisk attack range by +1.',
      requires: [],
      at: 'Hydralisk Den'
    },
    np: {
      name: 'Neural Parasite',
      minerals: 150,
      vespene: 150,
      duration: 79,
      text: 'Allows Infestors to use the Neural Parasite.',
      requires: [],
      at: 'Infestation Pit'
    },
    pg: {
      name: 'Pathogen Glands',
      minerals: 150,
      vespene: 150,
      duration: 57,
      text: 'Increases the starting energy of Infestors by 25.',
      requires: [],
      at: 'Hydralisk Den'
    },
    at: {
      name: 'Adaptive Talons',
      minerals: 150,
      vespene: 150,
      duration: 57,
      text: 'Reduces the time Lurkers take to burrow from 2s to 0.7s and increases movement speed.',
      requires: [],
      at: 'Lurker Den'
    },
    ss: {
      name: 'Seismic Spines',
      minerals: 150,
      vespene: 150,
      duration: 57,
      text: 'Increases the attack range of Lurkers by +2.',
      requires: [],
      at: 'Lurker Den'
    },
    cp: {
      name: 'Chitinous Plating',
      minerals: 150,
      vespene: 150,
      duration: 79,
      text: 'Gives +2 armor to Ultralisks.',
      requires: [],
      at: 'Ultralisk Cavern'
    },
    as: {
      name: 'Anabolic Synthesis',
      minerals: 150,
      vespene: 150,
      duration: 43,
      text: 'Increases the movement speed of Ultralisks off creep.',
      requires: [],
      at: 'Ultralisk Cavern'
    }
  }