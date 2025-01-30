import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homee from './pages/Homee' 
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Doctor from './pages/Doctor'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import MyProfile from './pages/MyProfile'  
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homee />} /> 
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/doctor/:speciality" element={<Doctor />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/my-appointments/:docId" element={<Appointment />} />
      </Routes>
    </div>
  )
}

export default App
