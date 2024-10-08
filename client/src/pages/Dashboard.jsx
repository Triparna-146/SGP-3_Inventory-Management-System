import React, { useEffect, useState } from 'react'
import GatekeeperDashboard from '../components/GatekeeperDashboard'
import { useNavigate } from 'react-router-dom';
import OperatorDashboard from '../components/OperatorDashboard';

const Dashboard = () => {

    const navigate = useNavigate();
    const [role, setRole] = useState('');

    useEffect(() => {
        const userRole = localStorage.getItem('role')
        setRole(userRole)
    }, [])

    if (role === 'gateKeeper') {
        return <GatekeeperDashboard />;
      } else if (role === 'operator') {
        return <OperatorDashboard/>
      } else {
        // Default navbar if no role is present
        navigate('/login')
      }
}

export default Dashboard
