export const Structures = {
    Nexus: {
      minerals: 300,
      vespene: 0,
      duration: 71,
      supply: 6,
      text: 'Primary structure. Used to spawn all Zerg units and receive gathered resources. Grows creep used to feed nearby Zerg structures. Can mutate into Lair.'
    },
    Assimilator: {
      minerals: 75,
      vespene: 0,
      duration: 57,
      supply: 6,
      text: 'Extracts vespene gas'
    },
    Pylon: {
      minerals: 150,
      vespene: 100,
      duration: 57,
      supply: 6,
      text: 'Evolved version of the Htchery that allows additional upgrades and structures to be produced. Also spawns all Zerg units and receives gathered resources.'
    },
    Forge: {
      minerals: 200,
      vespene: 150,
      duration: 71,
      supply: 6,
      text: 'Further evolved version of the Hatchery that allows additional upgrades and structures to be produced. Also spawns all Zerg units and receives gathered resources.'
    },
    'Photon Cannon': {
      minerals: 25,
      vespene: 0,
      duration: 21,
      text: 'Mutated over Vespene Geyser to allow harvesting of vespene gas.'
    },
    Gateway: {
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
    'Cybernetics Core': {
      minerals: 100,
      vespene: 0,
      duration: 36,
      text: 'Anti-ground defense structure.'
    },
    Stargate: {
      minerals: 75,
      vespene: 0,
      duration: 21,
      text: 'Anti-air defense structure.',
      special: [
        'Detector'
      ]
    },
    'Robotics Facility': {
      minerals: 75,
      vespene: 0,
      duration: 25,
      text: 'Contains upgrades for Zerg ground units.'
    },
    'Robotics Bay': {
      minerals: 150,
      vespene: 0,
      duration: 39,
      text: 'Contains upgrades for Roaches.',
      enables: [
        'Roaches from Larvae',
        'Ravagers from Roaches'
      ]
    },
    'Templar Archives': {
      minerals: 100,
      vespene: 50,
      duration: 43,
      text: 'Contains an upgrade for Banelings.',
      enables: [
        'Banelings from Zerglings'
      ]
    },
    'Fleet Beacon': {
      minerals: 100,
      vespene: 100,
      duration: 29,
      text: 'Contains upgrades for Hydralisks.',
      enables: [
        'Hydralisks from Larvae'
      ]
    },
    'Dark Shrine': {
      minerals: 100,
      vespene: 100,
      duration: 36,
      text: 'Contains upgrades for Infestors.',
      enables: [
        'Infestors from Larvae',
        'Swarm Hosts from Larvae'
      ]
    },
    'Twilight Council': {
      minerals: 150,
      vespene: 150,
      duration: 36,
      text: 'Friendly ground units can use the Nydus Worm to instantly travel to any other Nydus Network of Nydus Worm ownded by the player.',
      enables: [
        'Nydus Worm'
      ]
    },
    'Shield Battery': {
      minerals: 75,
      vespene: 75,
      duration: 14,
      text: 'Cooldown 14s. Summons a Nydus Worm at the target location. Friendly ground units can use the Nydus Worm to instantly travel to any other Nydus Network of Nydus Worm ownded by the player. Grows creep used to feed nearby Zerg structures.'
    }
  }