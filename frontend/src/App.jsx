import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import NearbyPlaces from './pages/NearbyPlaces.jsx';
import PlanTrip from './pages/PlanTrip.jsx';
import UpcomingEvents from './pages/UpcomingEvents.jsx';
import LocalServices from './pages/LocalServices.jsx';
import About from './pages/About.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/auth/login' element={<Login/>} />
        <Route path='/auth/register' element={<Register/>} />
        <Route path='/nearby-places' element={<NearbyPlaces/>} />
        <Route path='/plan-trip' element={<PlanTrip/>} />
        <Route path='/upcoming/events' element={<UpcomingEvents/>} />
        <Route path='/local' element={<LocalServices/>} />
        <Route path='/about-us' element={<About/>} />
      </Routes>
    </>
  )
}

export default App
