import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  const [people, setPeople] = useState([])

  const fetchPeople = async () => {
    const response = await fetch("https://randomuser.me/api/?results=50");
    const jsonData = await response.json();
    setPeople(jsonData.results);
    // console.log(people);
  }

  useEffect(() => {
    if (people.length === 0) {fetchPeople(); }
  }, [])


  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
              </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={< Dashboard people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />}/>
        <Route path="/view/:uuid" element={<PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />} />
        <Route path="/edit/:uuid" element={<PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />} />
      </Routes>
    </>
  )
}
