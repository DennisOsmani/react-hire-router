/* eslint-disable react/prop-types */
import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people, hiredPeople } = props

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person}
        hiredPeople={hiredPeople} 
        />
      ))}
    </ul>
  )
}

export default PeopleList
