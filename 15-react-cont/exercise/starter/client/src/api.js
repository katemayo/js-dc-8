<<<<<<< HEAD
// client/src/api.js
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000' //replace this with my api
=======
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000'
>>>>>>> be59d5677d14a4322e995673f521562194d1134c
})

function searchGifs (searchText) {
  return api.get(`/${searchText}`).then(result => {
    return result.data
  })
}

export {api, searchGifs}