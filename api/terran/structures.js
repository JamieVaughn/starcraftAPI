import { Structures } from './data/structures.js'

export default (req, res) => {
    res.statusCode = 200
    res.json(Structures)
  }
  