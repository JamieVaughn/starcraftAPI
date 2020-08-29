import { Structures } from '../../data/zerg/structures.js'
import { Units } from '../../data/zerg/units.js'
import { Upgrades } from '../../data/zerg/upgrades.js'

export default (req, res) => {
    res.statusCode = 200
    const All = {structures: Structures, units: Units, upgrades: Upgrades}
    res.json(All)
  }
  