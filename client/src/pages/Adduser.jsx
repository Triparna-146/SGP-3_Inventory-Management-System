import React, { useState } from 'react'
import axios from 'axios'

const Adduser = () => {

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const response = await axios.post('http://localhost:3000/api/users/register', {
              name,
              username,
              password,
              role,
            });
            console.log('Response:', response.data);
        } catch (error) {
            // Check if the error has a response and data property
            if (error.response) {
              console.error('Error registering user:', error.response.data);
            } else {
              console.error('Error registering user:', error.message);
            }
          }
    }



  return (
    <div className='mx-44'>
        <h1 className="text-4xl mb-12 text-neutral-900">Add User</h1>
        <div className='py-8 flex items-center justify-center bg-gray-200 rounded-lg shadow-lg w-96'>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-5'>
                    <input className='px-2 py-1.5 rounded-lg w-72' type="text" name='name' placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                    <input className='px-2 py-1.5 rounded-lg w-72' type="text" name='username' placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
                    <input className='px-2 py-1.5 rounded-lg w-72' type="password" name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                    <select className='px-2 py-1.5 rounded-lg w-72' defaultValue={""} name="role" onChange={(e) => setRole(e.target.value)}>
                        <option value="">Select Role</option>
                        <option value="gateKeeper">Gate Keeper</option>
                        <option value="operator">Operator</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button type='submit' className='mt-6 px-6 py-2 bg-yellow-400 rounded-full hover:bg-primary hover:text-white transition-all duration-300'>Add User</button>
            </form>
        </div>
      
    </div>
  )
}

export default Adduser
