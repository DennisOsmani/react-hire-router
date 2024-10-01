/* eslint-disable react/prop-types */
import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { people, hiredPeople } = props

  const notHiredPeople = people.filter(
    person => !hiredPeople.some(hired => hired.login.uuid === person.login.uuid)
  );

  console.log("All People: ", people);
  console.log("Hired People: ", hiredPeople);
  console.log("Not Hired People: ", notHiredPeople);
  

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={notHiredPeople} hiredPeople={hiredPeople} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} hiredPeople={hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard
