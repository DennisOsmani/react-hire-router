/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import EditWageForm from './components/EditWageForm';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function PersonProfile(props) {
  const { people, setHiredPeople } = props;
  const { uuid } = useParams();
  const [person, setPerson] = useState(null)
  const navigate = useNavigate();
  // const [isEditMode, setIsEditMode] = useState(false);

const fetchPerson = () => {
  const per = people.find((p) => p.login.uuid === uuid); 
      if (per !== null) {
        setPerson(per);
      } else {
        console.log("person not found!");
      }
}

const hirePerson = (wage) => {
  const hiredPerson = {...person, wage};
  setHiredPeople((prev) => [...prev, hiredPerson]);
  navigate("/");
} 

const editPersonWage = (wage) => {
  setHiredPeople((prev) =>
    prev.map((p) =>
      p.login.uuid === uuid ? { ...p, wage } : p
    )
  );
  navigate('/');
};

useEffect(() => {
  fetchPerson();
}, [uuid, people]) 

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      {window.location.pathname.startsWith('/edit') ? (
        <EditWageForm onEdit={editPersonWage} /> // Show edit form if in edit mode
      ) : (
        <>
          <p>Wage: £{person.wage}</p>
          <HireForm onHire={hirePerson} />
        </>
      )}
    </article>
  )
}

export default PersonProfile
