import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const handleNameChange = event => setNewName(event.target.value)

  const addPerson = event => {
    event.preventDefault()

    if (persons.find(savedPerson => savedPerson.name === newName)) {
      return alert(`${newName} is already added to phonebook`)
    }

    setPersons(persons.concat({ name: newName }))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(({ name }) => (
        <div key={name}>{name}</div>
      ))}
    </div>
  )
}

export default App
