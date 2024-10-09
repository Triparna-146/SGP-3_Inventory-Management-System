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
  const [state, setState] = useState(true)

  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ];

  const vehicleOptions = [
    { label: 'GJ05BQ0772', value: 'GJ05BQ0772' },
    { label: 'GJ16CG1311', value: 'GJ16CG1311' },
    { label: 'GJ16BK3634', value: 'GJ16BK3634' },
    { label: 'GJ16DJ5288', value: 'GJ16DJ5288' },
  ];

  const departmentOptions = [
    { label: 'Production', value: 'GJ05BQ0772' },
    { label: 'Office and Accounts', value: 'GJ16CG1311' },
    { label: 'Customer support and Sales', value: 'GJ16BK3634' },
    { label: 'HR and Admin', value: 'GJ16DJ5288' },
    { label: 'Operation', value: 'GJ16DJ5288' },
    { label: 'Lab', value: 'GJ16DJ5288' },
    { label: 'Engineering', value: 'GJ16DJ5288' },
    { label: 'Stores', value: 'GJ16DJ5288' },
  ];

  const headNameOptions = [
    { label: 'xyz', value: 'xyz' },
    { label: 'abc', value: 'abc' },
  ];

  const reasonOptions = [
    { label: 'Personal', value: 'Personal' },
    { label: 'Operational', value: 'Operational' },
    { label: 'Visit', value: 'Visit' },
    { label: 'Other', value: 'Other' },
  ];

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log("hello")
    console.log(employeeName, vehileNo, departmentName, reason, headName, inkms, outkms)
  }

  return (
    <div className='mx-44'>
      <h1 className="text-4xl mb-12 text-neutral-900">Vehicle Voucher</h1>
      <div className='flex flex-row items-center gap-5 mb-5'>
        <button className={`w-20 py-2 ${ state ? 'bg-yellow-400 ' : 'bg-primary text-white'} rounded-full font-medium shadow-lg`} onClick={() => state && setState(false)}>In</button>
        <button className={`w-20 py-2 ${ state ? 'bg-primary text-white' : 'bg-yellow-400'} rounded-full font-medium shadow-lg`} onClick={() => !state && setState(true)}>Out</button>
      </div>
      <form action="">
        <div className='grid grid-cols-[1fr_3fr] gap-10'>
          <InputBox title={"Employee Name"} setValue={setEmployeeName} placeholder={"Enter Name"} />
          <SelectBox title={"Vehicle Number"} setValue={setVehicleNo} options={vehicleOptions} />
          <SelectBox title={"Department Name"} setValue={setDepartmentName} options={departmentOptions} placeholder={"Enter Name"}/>
          <InputBox title={`${state ? "Out Kms" : "In Kms"}`} setValue={`${state ? setOutkms : setInkms}`} placeholder={"Enter Kms"}/>
          {/* <InputBox title={"Reason"} setValue={setReason} placeholder={"Enter reason"}/> */}
          <SelectBox title={"Reason"} setValue={setReason} options={reasonOptions} />
          <SelectBox title={"Head name for Approval"} setValue={setHeadName} options={headNameOptions} />
        </div>
        
        <button className='px-6 py-2 mt-10 bg-yellow-400 rounded-full font-medium shadow-lg hover:bg-primary hover:text-white transition-all duration-300' onClick={handleOnSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default VehicleVoucher
