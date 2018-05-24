import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000'
})

function searchGifs (searchText) {
  return api.get(`/${searchText}`).then(result => {
    return result.data
  })
}

export {api, searchGifs}