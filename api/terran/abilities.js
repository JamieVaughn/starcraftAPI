import { Spells } from './data/abilities.js'

export default (req, res) => {
    res.statusCode = 200
    res.json(Spells)
  }
  