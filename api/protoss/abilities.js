import { Spells } from './data/spells.js'

export default (req, res) => {
    res.statusCode = 200
    res.json(Spells)
  }
  