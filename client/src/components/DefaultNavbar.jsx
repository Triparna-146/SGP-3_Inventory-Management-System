import React from 'react'
import { assets } from '../assets/assets'

const DefaultNavbar = () => {
  return (
    <div className='flex items-center justify-between text-sm p-4 mb-5 shadow-lg'>
      <img onClick={() => navigate('/dashboard')} className='w-32 cursor-pointer' src={assets.Verni_logo} alt="" />
    </div>
  )
}

export default DefaultNavbar
