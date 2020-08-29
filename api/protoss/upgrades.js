import { Upgrades } from './data/upgrades.js'

export default (req, res) => {
    res.statusCode = 200
    res.json(Upgrades)
  }
  