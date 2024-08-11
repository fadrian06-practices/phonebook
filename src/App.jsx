import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const handleFilterChange = event => setFilter(event.target.value)

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(({ data }) => setPersons(data))
  }, [])

  const addPerson = (name, number) => {
    setPersons(
      persons.concat({
        name,
        number,
        id: persons.length + 1
      })
    )
  }

  const filteredPersons = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm persons={persons} addPerson={addPerson} />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App
