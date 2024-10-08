import React, { useState } from 'react'
import InputBox from '../components/InputBox'
import { useNavigate } from 'react-router-dom'

const Gatepass = () => {

  const navigate = useNavigate();

  const [vehicleNo, setvehicleNo] = useState('')
  const [driverName, setDriverName] = useState('')
  const [mobile, setMobile] = useState('')
  const [dealerName, setDealerName] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    navigate('/gatepass-cylinders', {state: {vehicleNo, driverName, mobile, dealerName}})
  }

  return (
    <div className='mx-44'>
      <h1 className="text-4xl mb-12 text-neutral-900">Gatepass Entry</h1>
      <form action="#cylinder" onSubmit={onSubmitHandler}>
        <div className='flex items-center gap-20'>
          <InputBox title={"Vehicle Number"} setValue={setvehicleNo} placeholder={"Enter Number"} />
        </div>

        <div className='flex items-center gap-10 mt-10'>
        <InputBox title={"Driver Name"} setValue={setDriverName} placeholder={"Enter Name"} />
        <InputBox title={"Mobile Number"} setValue={setMobile} placeholder={"Enter Number"} />
        </div>

        <div className='flex items-center gap-20 mt-10'>
          <InputBox title={"Dealer Name"} setValue={setDealerName} placeholder={"Enter Name"} />
        </div>

        <button className='px-6 py-2 mt-10 bg-yellow-400 font-medium rounded-full text-black shadow-lg hover:bg-primary hover:text-white transition-all duration-300'>Next</button>
      </form>

      <div id='cylinder'>
        
      </div>
    </div>
  )
}

export default Gatepass
