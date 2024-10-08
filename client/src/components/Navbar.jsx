import React, { useEffect, useState } from 'react'
import GatekeeperNavbar from './GatekeeperNavbar'
import DefaultNavbar from './DefaultNavbar'
import OperatorNavbar from './OperatorNavbar'

const Navbar = () => {

    const [role, setRole] = useState('')

    useEffect(() => {
        const userRole = localStorage.getItem('role')
        setRole(userRole)
    }, [])

    if (role === 'gateKeeper') {
        return <GatekeeperNavbar />;
      } else if (role === 'operator') {
        return <OperatorNavbar />;
      } else {
        // Default navbar if no role is present
        return <DefaultNavbar />;
      }
}

export default Navbar
