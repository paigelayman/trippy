import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import UserDetails from './pages/UserDetails'
import axios from 'axios'
import { BASE_URL } from './globals'
import { useEffect, useState } from 'react'

function App() {
  const [businesses, setBusinesses] = useState([])
  
  useEffect(() => {
    const getBusinesses = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/businesses/`)
        setBusinesses(res.data)
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div className="App">
      <header className="navBar">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
