import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const handleFilterChange = event => setFilter(event.target.value)

  useEffect(() => {
    personService.getAll().then(setPersons)
  }, [])

  const addPerson = async newPerson => {
    const returnedPerson = await personService.create(newPerson)

    setPersons(persons.concat(returnedPerson))
  }

  const deletePerson = async id => {
    await personService.delete(id)

    setPersons(persons.filter(person => person.id !== id))
  }

  const updatePerson = async person => {
    const returnedPerson = await personService.update(person.id, person)

    const newPersons = persons.map(savedPerson => {
      return savedPerson.id === returnedPerson.id ? returnedPerson : savedPerson
    })

    setPersons(newPersons)
  }

  const filteredPersons = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm persons={persons} addPerson={addPerson} updatePerson={updatePerson} />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} deletePerson={deletePerson} />
    </div>
  )
}

export default App
