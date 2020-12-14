import { Structures } from '../../data/terran/structures.js'
import { Units } from '../../data/terran/units.js'
import { Upgrades, Passives } from '../../data/terran/upgrades.js'

export default (req, res) => {
    res.statusCode = 200
    const All = {structures: Structures, units: Units, upgrades: Upgrades, passives: Passives}
    res.json(All)
  }
  