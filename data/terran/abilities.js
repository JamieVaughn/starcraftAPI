export const Spells = {
    Lower: {
      text: 'Lowers the structure, allowing ground units to move across it.'
    },
    Raise: {
      text: 'Raises the structure, preventing ground units to move across it.'
    },
    Repair: {
      text: 'Restores life to mechanical units and structures at the cost of resources.'
    },
    Basic: {
      text: 'A list of basic structures.'
    },
    Advanced: {
      text: 'A list of advanced structures.'
    },
    Land: {
      text: 'Lands the structure at a target location, allowing it to once again produce units, research upgrades, and use abilities.',
      duration: 1
    },
    Liftoff: {
      text: 'Transforms structure into a slow air unit for redeployment. May not produce units, research upgrades, or use abilities until it has landed.',
      duration: 1
    },
    'Calldown: MULE': {
      energy: 50,
      text: 'Drops an experimental robotic MULE miner onto a target Mineral field. MULEs collect minerals more quickly than SCVs. MULEs last 64 seconds before their systems fail.'
    },
    'Calldown: Extra Supplies': {
      energy: 50,
      text: 'Drops additional supplies, permanently increasing the supply output of the target Supply Depot by 8.'
    },
    'Scanner Sweep': {
      energy: 50,
      text: 'Reveals an area of the map, detecting cloaked and burrowed units. Lasts 9 seconds.'
    },
    'Hellbat Mode': {
      duration: 3,
      text: 'Transforms Hellion into close range combat unit. Deals damage in a small frontal cone.'
    },
    'Hellion Mode': {
      duration: 3,
      text: 'Transforms Hellbat into fast scout unit. Has a flame attack that damages all enemy units in its line of fire.'
    },
    'Siege Mode': {
      duration: 3,
      text: 'Deploys into Siege Mode. In this mode Siege Tanks have very long range and inflict area damage. Siege Tanks in this mode cannot move or attack targets at close range.'
    },
    'KD8 Charge': {
      cooldown: 14,
      text: 'Explodes after a chort delay, dealing 5 damage and knocking back nearby units.'
    },
    'Fighter Mode': {
      text: 'Reverts to Fighter Mode. In thismode Liberators can move, but they can only attack air targets.'
    },
    'Defender Mode': {
      text: 'Deploys into Defender Mode. In this mode Liberators inflict single target damage to ground units. Liberators in this mode cannot move.'
    },
    'Use Stimpack': {
      health_cost: 10,
      text: 'Injects the unit with powerful stimulants that greatly increase attack and movement speeds for a few seconds. Injures the unit for 10 of the unit\'s life.'
    },
    'Lock On': {
      cooldown: 4,
      text: 'Locks the Cyclone\'s weapons on the target unit, dealing 400 damage (+400 vs. Armored) over 14 seconds to ground and flying targets. Can move while firing. Cancels if target moves out of range.'
    },
    'Spawn Creep Tumor': {},
    Transfusion: {},
    'Corrosive Bile': {},
    'Blinding Cloud': {},
    Consume: {},
    Abduct: {},
    'Parasitic Bomb': {},
    'Fungal Growth': {},
    'Microbial Shroud': {},
    'Neural Parasite': {}
  }

  export const Passives = { 
    'Reaper Combat Drugs': {
      text: 'Regenerates life quickly while out of combat.'
    },
    Jetpack: {
      text: 'Reapers can jump up and down cliffs.'
    }
  }