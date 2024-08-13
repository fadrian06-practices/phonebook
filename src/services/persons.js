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
  },

  async delete(id) {
    const response = await axios.delete(`${baseUrl}/${id}`)

    return response.data
  },

  async update(id, person) {
    const response = await axios.put(`${baseUrl}/${id}`, person)

    return response.data
  }
}
