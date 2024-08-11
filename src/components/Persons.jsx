const Persons = ({ persons }) => {
  return (
    <>
      {persons.map(({ id, name, number }) => (
        <div key={id}>
          {name} {number}
        </div>
      ))}
    </>
  )
}

export default Persons
