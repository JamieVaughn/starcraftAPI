import { Units } from './data/units.js'

export default (req, res) => {
    res.statusCode = 200
    res.json(Units)
  }
  