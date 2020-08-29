import { Structures } from '../../data/protoss/structures.js'
import { Units } from '../../data/protoss/units.js'
import { Upgrades } from '../../data/protoss/upgrades.js'

export default (req, res) => {
    res.statusCode = 200
    const All = {structures: Structures, units: Units, upgrades: Upgrades}
    res.json(All)
  }
  