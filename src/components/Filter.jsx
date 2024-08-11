const Filter = ({filter, onChange}) => {
  return (
    <label>
      Filter shown with
      <input type='search' value={filter} onChange={onChange} />
    </label>
  )
}

export default Filter
