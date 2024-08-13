import { useState } from 'react'

const PersonForm = ({ persons, addPerson, updatePerson }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = event => setNewName(event.target.value)
  const handleNumberChange = event => setNewNumber(event.target.value)

  const reset = () => {
    setNewName('')
    setNewNumber('')
  }

  const handleSubmit = event => {
    event.preventDefault()

    let personFound = persons.find(savedPerson => savedPerson.name === newName)

    if (!personFound) {
      return addPerson({ name: newName, number: newNumber }).then(reset)
    }

    if (personFound.number === newNumber) {
      return alert(`${newName} is already added to phonebook`)
    }

    const message = `${newName} is already added to phonebook, replace the old number with a new one?`

    if (window.confirm(message)) {
      updatePerson({ ...personFound, number: newNumber }).then(reset)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
  )
}

export default PersonForm
