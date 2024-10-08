import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { username, password });
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('role', user.role);
      window.location.href = '/dashboard';  // Redirect to dashboard
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='flex items-center justify-center '>
      <div className='mt-32 px-12 py-8 bg-gray-200 flex flex-col gap-8 rounded-lg shadow-lg'>
        <h1 className='text-3xl text-neutral-900'>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-5 w-60'>
            <input className='px-3 py-1.5 rounded-lg' type="text" name='username' placeholder='Enter Username' onChange={(e) => setUsername(e.target.value)}/>
            <input className='px-3 py-1.5 rounded-lg' type="password" name='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}/>          
          </div>
          {
            error && <p className='mt-3 font-light text-red-600'>{error}</p>
          }
          <button type='submit' className='mt-5 px-6 py-2 bg-yellow-400 rounded-full hover:bg-primary hover:text-white transition-all duration-300'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
