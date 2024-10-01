/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

function PeopleListItem(props) {
  const { person, hiredPeople } = props

  //const hiredPeopleSet = new Set(hiredPeople.map(hired => hired.login.uuid));
  //const isHired = hiredPeopleSet.has(person.login.uuid);

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      {/*{isHired ? (
         <Link to={`/edit/${person.login.uuid}`}>Edit Wage</Link>
      ) : (
        <Link to={`/view/${person.login.uuid}`}>View Profile</Link>)}*/}
      {hiredPeople.find(hired => hired.login.uuid === person.login.uuid) ? (
        <Link to={`/edit/${person.login.uuid}`}>Edit Wage</Link>
          ) : (
        <Link to={`/view/${person.login.uuid}`}>View Profile</Link>
      )}
    </li>
  )
}

export default PeopleListItem
