import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-1234567' }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = event => setNewName(event.target.value)
  const handleNumberChange = event => setNewNumber(event.target.value)

  const addPerson = event => {
    event.preventDefault()

    if (persons.find(savedPerson => savedPerson.name === newName)) {
      return alert(`${newName} is already added to phonebook`)
    }

    setPersons(persons.concat({ name: newName, number: newNumber }))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(({ name, number }) => (
        <div key={name}>
          {name} {number}
        </div>
      ))}
    </div>
  )
}

export default App
