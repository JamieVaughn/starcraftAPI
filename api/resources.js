export default (req, res) => {
    res.statusCode = 200
    res.json({ 
      minerals: {
          patches: [900, 1800, 900, 1800, 900, 1800, 900, 1800],
          payload: [5, 8]
      },
      vespene: {
          patches: [2250, 2250],
          payload: [4, 8]
      }
    })
  }
  