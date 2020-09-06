const api = require('../services/fetch.api')


module.exports = {
  async getSoilHumidity () {
    try {
      let response = await api.get('sensor/soilHumidity')
    } catch (error) {
      console.error(error)
    }
  },
  async getAirTemperature () {
    try {
      let response = await api.get('sensor/temperature')
      return response
    } catch (error) {
      console.error(error)
    }
  },
  async getAirHumidity () {
    try {
      let response = await api.get('sensor/humidity')
      return response
    } catch (error) {
      console.error(error)
    }
  },
  async waterCactus () {
    try {
      let response = await api.post('pump', {
        action: 'watering'
      })
      return response
    } catch (error) {
      console.error(error)
    }
  },
  async setRgbLightColor (red, green, blue) {
    try {
      let response = await api.post('light/rgb', {
        action: 'set_color',
        value: [red, green, blue]
      })
      return response
    } catch (error) {
      console.error(error)
    }
  },
  async switchLight (state) {
    try {
      let response = await api.post('light/rgb', {
        action: state ? 'on' : 'off',
      })
      return response
    } catch (error) {
      console.error(error)
    }
  },
}