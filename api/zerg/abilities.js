import { Spells, Passives } from './data/abilities.js'

export default (req, res) => {
    res.statusCode = 200
    const Abilities = { ...Spells, ...Passives}
    res.json(Abilities)
  }
  