const fetch = require('node-fetch')
const apiURL = require('../../config').apiURL
module.exports = {
  get (route) {
    return fetch(`${apiURL}/${route}`)
  },
  post (route, data) {
    return fetch(`${apiURL}/${route}`, {
        method: 'post',
        body:    JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })
  }
}