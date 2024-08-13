const Persons = ({ persons, deletePerson }) => {
  const confirmDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      deletePerson(id)
    }
  }

  return (
    <>
      {persons.map(({ id, name, number }) => (
        <div key={id}>
          {name} {number} <button onClick={() => confirmDelete(id, name)}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default Persons
