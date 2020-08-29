import { Spells } from '../../data/terran/abilities.js'

export default (req, res) => {
    res.statusCode = 200
    res.json(Spells)
  }
  