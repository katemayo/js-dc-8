import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000'
})

let signName = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']
// let signNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


function whatsYourSign (userSign) {
  return api.get(`/${userSign}`).then(result => {
    // return result.data
   var yourSignNum = signName.indexOf(userSign) + 1
    return yourSignNum
  })
}

export {api, whatsYourSign} 