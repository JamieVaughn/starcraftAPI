export const Structures = {
    Hatchery: {
      minerals: 300,
      vespene: 0,
      duration: 71,
      supply: 6,
      text: 'Primary structure. Used to spawn all Zerg units and receive gathered resources. Grows creep used to feed nearby Zerg structures. Can mutate into Lair.'
    },
    Lair: {
      minerals: 150,
      vespene: 100,
      duration: 57,
      supply: 6,
      text: 'Evolved version of the Htchery that allows additional upgrades and structures to be produced. Also spawns all Zerg units and receives gathered resources.'
    },
    Hive: {
      minerals: 200,
      vespene: 150,
      duration: 71,
      supply: 6,
      text: 'Further evolved version of the Hatchery that allows additional upgrades and structures to be produced. Also spawns all Zerg units and receives gathered resources.'
    },
    Extractor: {
      minerals: 25,
      vespene: 0,
      duration: 21,
      text: 'Mutated over Vespene Geyser to allow harvesting of vespene gas.'
    },
    'Spawning Pool': {
      minerals: 200,
      vespene: 0,
      duration: 46,
      text: 'Contains upgrades for Zerglings',
      enables: [
        'Queens at Hatchery, Lair, or Hive',
        'Zerglings from Larvae',
        'Spine Crawlers from Drones',
        'Spore Crawlers from Drones'
      ]
    },
    'Spine Crawler': {
      minerals: 100,
      vespene: 0,
      duration: 36,
      text: 'Anti-ground defense structure.',
      special: [
          'Uproot'
      ]
    },
    'Spore Crawler': {
      minerals: 75,
      vespene: 0,
      duration: 21,
      text: 'Anti-air defense structure.',
      special: [
        'Detector',
        'Uproot'
      ]
    },
    'Evolution Chamber': {
      minerals: 75,
      vespene: 0,
      duration: 25,
      text: 'Contains upgrades for Zerg ground units.'
    },
    'Roach Warren': {
      minerals: 150,
      vespene: 0,
      duration: 39,
      text: 'Contains upgrades for Roaches.',
      enables: [
        'Roaches from Larvae',
        'Ravagers from Roaches'
      ]
    },
    'Baneling Nest': {
      minerals: 100,
      vespene: 50,
      duration: 43,
      text: 'Contains an upgrade for Banelings.',
      enables: [
        'Banelings from Zerglings'
      ]
    },
    'Hydralisk Den': {
      minerals: 100,
      vespene: 100,
      duration: 29,
      text: 'Contains upgrades for Hydralisks.',
      enables: [
        'Hydralisks from Larvae'
      ]
    },
    'Infestation Pit': {
      minerals: 100,
      vespene: 100,
      duration: 36,
      text: 'Contains upgrades for Infestors.',
      enables: [
        'Infestors from Larvae',
        'Swarm Hosts from Larvae'
      ]
    },
    'Nydus Network': {
      minerals: 150,
      vespene: 150,
      duration: 36,
      text: 'Friendly ground units can use the Nydus Worm to instantly travel to any other Nydus Network of Nydus Worm ownded by the player.',
      enables: [
        'Nydus Worm'
      ]
    },
    'Nydus Worm': {
      minerals: 75,
      vespene: 75,
      duration: 14,
      text: 'Cooldown 14s. Summons a Nydus Worm at the target location. Friendly ground units can use the Nydus Worm to instantly travel to any other Nydus Network of Nydus Worm ownded by the player. Grows creep used to feed nearby Zerg structures.',
      passive: [
          'Subterranean Scales'
      ]
    },
    Spire: {
      minerals: 200,
      vespene: 200,
      duration: 71,
      text: 'Contains upgrades for Zerg air units. Can mutate into a Greater Spire.',
      enables: [
        'Mutalisks from Larvae',
        'Corruptors from Larvae'
      ]
    },
    'Greater Spire': {
      minerals: 100,
      vespene: 150,
      duration: 71,
      text: 'Contains upgrades for Zerg air units.',
      enables: [
        'Brood Lords from Corruptors'
      ]
    },
    'Lurker Den': {
      minerals: 100,
      vespene: 150,
      duration: 57,
      text: 'Contains upgrades for Lurkers.',
      enables: [
        'Lurkers from Hydralisks'
      ]
    },
    'Ultralisk Cavern': {
      minerals: 150,
      vespene: 200,
      duration: 46,
      text: 'Contains upgrades for Ultralisks.',
      enables: [
        'Ultralisks from Larvae'
      ]
    }
  }