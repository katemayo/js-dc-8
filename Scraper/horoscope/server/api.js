
const rp = require('request-promise')

let signName = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']
// let signNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

var yourSignNum = 0

function grabSignNum (userSign) {
  yourSignNum = signName.indexOf(userSign) + 1
  return rp(yourSignNum)
}

module.exports = {
  grabSignNum
}
