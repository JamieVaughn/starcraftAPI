export const Structures = {
    'Command Center': {
      minerals: 400,
      vespene: 0,
      duration: 71,
      supply: 6,
      text: 'Primary structure. Used to receive gathered resources. Can use the Lift Off ability and can upgrade into Orbital Command or a Planetary Fortress.',
      enables: ['SCV']
    },
    'Orbital Command': {
      minerals: 0,
      vespene: 0,
      duration: 25,
      supply: 6,
      text: 'Upgrades Command Center to an Orbital Command.',
      abilities: [
        'Scanner Sweep',
        'Calldown: Extra Supplies',
        'Calldown: MULE'
      ]
    },
    'Planetary Fortress': {
      minerals: 150,
      vespene: 150,
      duration: 36,
      text: 'Upgrades Command Center to a Planetary Fortress, greatly increasing its armor and arming it with powerful defensive turret. Cannot lift off.',
      attack: ['ground']
    },
    Refinery: {
      minerals: 75,
      vespene: 0,
      duration: 21,
      text: 'Built over Vespene Geyser to allow harvesting of vespene gas.'
    },
    'Supply Depot': {
      minerals: 100,
      vespene: 0,
      duration: 21,
      supply: 8,
      text: 'Provides supply. Supply allows you to create more units. Supply Depots can be lowered to allow units to walk over.',
    },
    Barracks: {
      minerals: 150,
      vespene: 0,
      duration: 46,
      text: 'Infantry production facility.',
      enables: [
        'Marines', 'Marauders with Tech Lab', 'Reapers', 'Orbital Commands'
      ]
    },
    Reactor: {
      minerals: 50,
      vespene: 50,
      duration: 36,
      text: 'Allows 2 units to be created simultaneously.'
    },
    'Tech Lab': {
      minerals: 50,
      vespene: 25,
      duration: 18,
      text: 'Infantry research structure. A Tech Lab can fit onto any production structure.',
      enables: ['Marauders', 'Ghosts with Ghost Academy']
    },
    Bunker: {
      minerals: 100,
      vespene: 0,
      duration: 29,
      text: 'Static defense structure.'
    },
    'Engineering Bay': {
      minerals: 125,
      vespene: 0,
      duration: 25,
      text: 'Contains upgrades for Terran infantry and structures.',
      enables: [
        'Missile Turrets',
        'Sensor Towers',
        'Planetary Fortress'
      ]
    },
    'Missile Turret': {
      minerals: 100,
      vespene: 0,
      duration: 18,
      text: 'Anti-air defense structure.',
      attacks: ['air'],
      special: [
        'Detector'
      ]
    },
    'Sensor Tower': {
      minerals: 125,
      vespene: 100,
      duration: 18,
      text: 'Reveals the locations of enemy units at long range. The Sensor Tower\'s detection area is visible to the enemy.'
    },
    'Ghost Academy': {
      minerals: 150,
      vespene: 50,
      duration: 29,
      text: 'Contains upgrades for Ghosts. Can build Nukes for Ghosts.',
      enables: [
        'Ghosts'
      ]
    },
    Factory: {
      minerals: 150,
      vespene: 100,
      duration: 43,
      text: 'Vehicle production facility.',
      enables: [
        'Hellions',
        'Widow Mines',
        'Cyclones'
      ]
    },
    Starport: {
      minerals: 150,
      vespene: 100,
      duration: 36,
      text: 'Air-unit production facility.',
      enables: [
        'Vikings',
        'Medivacs',
        'Liberators'
      ]
    },
    'Fusion Core': {
      minerals: 150,
      vespene: 150,
      duration: 46,
      text: 'Contains MEdivac, Liberator, and Battlecruiser upgrades.',
      enables: ['Battlecruisers']
    },
    Armory: {
      minerals: 150,
      vespene: 100,
      duration: 46,
      text: 'Contains weapons and armor upgrades for Factory and Starport units.',
      enables: [
        'Hellbat',
        'Thor'
      ]
    }
  }