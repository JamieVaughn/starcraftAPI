import { Spells } from './data/spells.js'
import { Structures } from './data/structures.js'
import { Units } from './data/units.js'
import { Upgrades } from './data/upgrades.js'

export default (req, res) => {
    res.statusCode = 200
    const All = Object.assign({}, Spells, Structures, Units, Upgrades)
    res.json(All)
  }
  