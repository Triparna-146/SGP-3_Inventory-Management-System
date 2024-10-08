import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets';

const GatekeeperNavbar = () => {

    const navigate = useNavigate();

    const [token, setToken] = useState(true);

    const handleLogout = () => {
      // Remove the token and role from local storage
      localStorage.removeItem('token');
      localStorage.removeItem('role');

      setToken(false)
  
      // Redirect to login page
      navigate('/login');
      window.location.reload()
    };

  return (
    <div className='flex items-center justify-between text-sm p-4 mb-5 shadow-lg'>
      <img onClick={() => navigate('/dashboard')} className='w-32 cursor-pointer' src={assets.Verni_logo} alt="" />
      <ul className='hidden md:flex items-start gap-12 font-medium'>

        <NavLink className={({isActive}) => `group px-4 py-2 outline-none ${isActive ? 'bg-primary text-white rounded-full ' : 'text-black'} ` } to='/dashboard'>
            <li className='relative'>HOME</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </NavLink>

        <NavLink className={({isActive}) => `group px-4 py-2 ${isActive ? 'bg-primary text-white rounded-full ' : 'text-black'}` } to='/gatepass'>
            <li className='relative'>INWARD</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </NavLink>

        <NavLink className={({isActive}) => `group px-4 py-2 ${isActive ? 'bg-primary text-white rounded-full ' : 'text-black'}` } to='/outward'>
            <li className='relative'>OUTWARD</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </NavLink>

        <NavLink className={({isActive}) => `group px-4 py-2 ${isActive ? 'bg-primary text-white rounded-full ' : 'text-black'}` } to='/vehicle-voucher'>
            <li className='relative'>VEHICLE VOUCHER</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </NavLink>

        <NavLink className={({isActive}) => `group px-4 py-2 ${isActive ? 'bg-primary text-white rounded-full ' : 'text-black'}` } to='/gatekeeper-history'>
            <li className='relative'>HISTORY</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
            token
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-10 rounded-full' src={assets.profile_pic} alt="" />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-40 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick={handleLogout} className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>
            </div>
            : <button onClick={() => navigate('/login')} className='bg-primary text-white px-5 py-2 rounded-full font-light hidden md:block'>Login</button>
        }
      </div>
    </div>
  )
}

export default GatekeeperNavbar
