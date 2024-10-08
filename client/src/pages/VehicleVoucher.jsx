import React, { useState } from 'react'
import InputBox from '../components/InputBox'
import SelectBox from '../components/SelectBox'
import {assets} from '../assets/assets'


const VehicleVoucher = () => {

  const [employeeName, setEmployeeName] = useState('')
  const [vehileNo, setVehicleNo] = useState('')
  const [departmentName, setDepartmentName] = useState('')
  const [reason, setReason] = useState('')
  const [headName, setHeadName] = useState('')
  const [inkms, setInkms] = useState('')
  const [outkms, setOutkms] = useState('')

  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ];

  console.log("hello")
  console.log(assets.vehicleNumbers)

  return (
    <div className='mx-44'>
      <h1 className="text-4xl mb-12 text-neutral-900">Vehicle Voucher</h1>
      <form action="">
        <div className='grid grid-cols-[1fr_3fr] gap-10'>
          <InputBox title={"Employee Name"} setValue={setEmployeeName} placeholder={"Enter Name"} />
          <SelectBox title={"Vehicle Number"} setValue={setVehicleNo} options={assets.vehicleNumbers} />
          <SelectBox title={"Department Name"} setValue={setDepartmentName} options={options} placeholder={"Enter Name"}/>
          <InputBox title={"Out Kms"} setValue={setOutkms} placeholder={"Enter Kms"}/>
          <InputBox title={"Reason"} setValue={setReason} placeholder={"Enter reason"}/>
          <SelectBox title={"Head name for Approval"} setValue={setHeadName} options={options} />
        </div>
        
        <button className='px-6 py-2 mt-10 bg-yellow-400 rounded-full font-medium shadow-lg hover:bg-primary hover:text-white transition-all duration-300'>Submit</button>
      </form>
    </div>
  )
}

export default VehicleVoucher
