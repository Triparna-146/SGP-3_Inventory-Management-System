import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Axios from 'axios'

const INITIAL_ROW_STATE = {
    cylinderType: "",
    gas: "",
    count: "",
    ownership: "",
  };

const GatepassCylinders = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const {vehicleNo, driverName, mobile, dealerName} = location.state || {};

    const [cylinderrows, setCylinderrows] = useState([INITIAL_ROW_STATE]);
    const [ecrNo, setecrNo] = useState(() => {
        const storedECRNo = localStorage.getItem('ecrNo');
        return storedECRNo ? parseInt(storedECRNo, 10) : 2189; // Initialize from localStorage or default to 2189
    });

    const handleAddCylinders = (e) => {
        e.preventDefault()
        setCylinderrows([...cylinderrows, INITIAL_ROW_STATE]);
    }

    const handleInputChange = (index, e) => {
        e.preventDefault()
        const { name, value } = e.target;
        const updatedRows = [...cylinderrows];
        updatedRows[index] = { ...updatedRows[index], [name]: value };
        setCylinderrows(updatedRows);
    };

    const updateECRno = () => {
        const newECRNo = ecrNo + 2;
        setecrNo(newECRNo);
        localStorage.setItem('ecrNo', newECRNo); // Store updated ECR No in localStorage
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(ecrNo, vehicleNo, driverName, mobile, dealerName, cylinderrows);

        Axios.post("http://localhost:3000/api/vehicle/insert", {
            ECRno: ecrNo,
            vehicleNO: vehicleNo,
            driverName: driverName,
            MobileNo: mobile,
            owner: dealerName,
          }).then(() => {
            Axios.post("http://localhost:3000/api/cylinder/insert", {
                ECRno: ecrNo,
                cylinders: cylinderrows
            })
            .then(() => {
              alert("Successfully Inserted");
              updateECRno()
              navigate('/gatepass')
            })
            .catch((error) => {
              console.error("There was an error!", error);
              if (error.response) {
                alert(`Error inserting data: ${error.response.data.error}`);
              } else if (error.request) {
                alert("No response from the server.");
              } else {
                alert("Error in setting up the request: " + error.message);
              }
            });
        });       
    }

  return (
    <div className='mx-44 flex flex-col'>
      <div className='p-5 flex flex-col gap-3 bg-[#C8F1C8] rounded-lg w-1/2'>
        <div className='flex items-center gap-2'>
            <p className='text-gray-700'>ECR No: </p>
            <p className='text-lg font-semibold text-gray-800'>{ecrNo}</p>
        </div>
        <div className='grid grid-cols-[1fr_1fr] gap-3'>
            <div className='flex items-center gap-2'>
                <p className='text-gray-700'>Vehicle No: </p>
                <p className='text-lg font-semibold text-gray-800'>{vehicleNo}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-gray-700'>Driver: </p>
                <p className='text-lg font-semibold text-gray-800'>{driverName}</p>
            </div>
        </div>
        
        <div className='flex items-center gap-2'>
            <p className='text-gray-700'>Dealer: </p>
            <p className='text-lg font-semibold text-gray-800'>{dealerName}</p>
        </div>
      </div>

      <div className='mt-8 text-gray-800'>
        <form action="">
            <h1 className='text-2xl text-neutral-900 mb-5'>Cylinder Details</h1>
            {cylinderrows.map((row, index) => (
                <div key={index} className='p-5 mb-2 bg-gray-200 flex items-center justify-between rounded-lg shadow-lg'>
                    <div className='flex flex-col gap-2'>
                        <p>Cylinder Type</p>
                        <select className='outline-none rounded-md py-1 px-2 border-1 border-gray-900 text-gray-700 w-52' name="cylinderType"  onChange={(e) => handleInputChange(index, e)}>
                            <option value="">Select Type</option>
                            <option value="Cylinder">Cylinder</option>
                            <option value="Dura">Dura</option>
                            <option value="Skid">Skid</option>
                            <option value="Cascade">Cascade</option>
                            <option value="Canister">Canister</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p>Gas</p>
                        <select className='outline-none rounded-md py-1 px-2 border-1 border-gray-900 text-gray-700 w-52' name="gas" onChange={(e) => handleInputChange(index, e)}>
                            <option value="">Select Gas</option>
                            <option value="Fire">Fire</option>
                            <option value="SCBA">SCBA</option>
                            <option value="O2">O2</option>
                            <option value="N2">N2</option>
                            <option value="CO2">CO2</option>
                            <option value="H2">H2</option>
                            <option value="Ar">Ar</option>
                            <option value="Zero Air">Zero Air</option>
                            <option value="N2O">N2O</option>
                            <option value="He">He</option>
                            <option value="Cal. Mix.">Cal. Mix</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p>Cylinder Count</p>
                        <input className='outline-none rounded-md py-1 px-2 border-1 border-gray-900 text-gray-700 w-52' type="number" name="count" placeholder='Enter Count' onChange={(e) => handleInputChange(index, e)} />
                    </div>
                    <div className='flex flex-col gap-2'    >
                        <p>Ownership</p>
                        <select className='outline-none rounded-md py-1 px-2 border-1 border-gray-900 text-gray-700 w-52' name="ownership" onChange={(e) => handleInputChange(index, e)}>
                            <option value="">Select owner</option>
                            <option value="Party">Party</option>
                            <option value="Dealer">Dealer</option>
                            <option value="Vgpl">Vgpl</option>
                        </select>
                    </div>
                </div>
            ))}
            <div className='mt-5 flex items-center justify-center gap-6'>
                <button onClick={handleAddCylinders} className='py-2 w-24 block bg-yellow-400 rounded-full shadow-lg hover:bg-primary hover:text-white transition-all duration-300'>Add</button>

                <button onClick={handleSubmit} className='py-2 w-24 block bg-yellow-400 rounded-full shadow-lg hover:bg-primary hover:text-white transition-all duration-300'>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default GatepassCylinders
