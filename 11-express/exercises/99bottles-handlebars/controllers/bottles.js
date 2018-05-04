
const BottlesController = {
  getBottles: function (req, res) {
    let bottles = req.params.numberOfBottles || 99
    let next = bottles - 1
    res.render('index', {
      player_name: req.query.player,
      bottles,
      next
    })
  },
  welcomePlayer: function (req, res) {
    res.render('index', {
      player_name: req.body.player_name,
      bottles: 99,
      next: 98
    })
  }
}

module.exports = BottlesController
