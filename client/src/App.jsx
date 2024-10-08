import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import GatekeeperHistory from './pages/GatekeeperHistory'
import Gatepass from './pages/Gatepass'
import VechicleVoucher from './pages/VehicleVoucher'
import Outward from './pages/Outward'
import Login from './pages/Login'
import Adduser from './pages/Adduser'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import GatepassCylinders from './components/GatepassCylinders'

const App = () => {
  return (
    <div className=''>
      <Navbar />

      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/gatepass' element={<Gatepass/>} />
        <Route path='/vehicle-voucher' element={<VechicleVoucher/>} />
        <Route path='/outward' element={<Outward/>} />
        <Route path='/gatekeeper-history' element={<GatekeeperHistory/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/adduser' element={<Adduser/>} />
        <Route path='/gatepass-cylinders' element={<GatepassCylinders/>} />
      </Routes>
    </div>
  )
}

export default App
