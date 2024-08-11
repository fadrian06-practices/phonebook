import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

export default {
  async getAll() {
    const response = await axios.get(baseUrl)

    return response.data
  },

  async create(newPerson) {
    const response = await axios.post(baseUrl, newPerson)

    return response.data
  }
}
