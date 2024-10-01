/* eslint-disable react/prop-types */
import { useState } from 'react'

function EditWageForm(props) {
  const { onEdit } = props;
  const [wage, setWage] = useState(0)
 

  function handleSubmit(event) {
    event.preventDefault()
    onEdit(wage);
  }
    
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">New Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Save</button>
    </form>
  )
}

export default EditWageForm