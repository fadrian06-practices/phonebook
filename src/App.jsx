import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const handleNameChange = event => setNewName(event.target.value)
  const handleNumberChange = event => setNewNumber(event.target.value)
  const handleSearchChange = event => setSearch(event.target.value)

  const addPerson = event => {
    event.preventDefault()

    if (persons.find(savedPerson => savedPerson.name === newName)) {
      return alert(`${newName} is already added to phonebook`)
    }

    setPersons(
      persons.concat({
        name: newName,
        number: newNumber,
        id: persons.length + 1
      })
    )

    setNewName('')
    setNewNumber('')
  }

  const filteredPersons = search
    ? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <label>
        Filter shown with{' '}
        <input type='search' value={search} onChange={handleSearchChange} />
      </label>
      <h2>Add a new</h2>
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
      {filteredPersons.map(({ id, name, number }) => (
        <div key={id}>
          {name} {number}
        </div>
      ))}
    </div>
  )
}

export default App
