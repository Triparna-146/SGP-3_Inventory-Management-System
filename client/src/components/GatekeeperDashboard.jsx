import React, {useState} from 'react'

const GatekeeperDashboard = () => {

    const [InVehicle, setInVehicle] = useState(0);
    const [InCylinder, setInCylinder] = useState(0);
    const [OutVehicle, setOutVehicle] = useState(0);

  return (
    <div className='mx-44'>
      <h1 className="text-4xl mb-12 text-neutral-900">Today's Overview</h1>
      <div className="flex items-center gap-32 w-full">
        <div className="bg-[#C8F1C8] w-[21%] rounded-lg p-4 shadow-lg px-7">
          <h2 className="text-xl font-semibold">In Vehicles</h2>
          <h1 className="text-[100px] mt-3 w-full text-right">{InVehicle}</h1>
        </div>

        <div className="bg-[#C8F1C8] w-[21%] rounded-lg p-4 shadow-lg px-7">
          <h2 className="text-xl font-semibold">In Cylinders</h2>
          <h1 className="text-[100px] mt-3 w-full text-right">{InCylinder}</h1>
        </div>

        <div className="bg-[#C8F1C8] w-[21%] rounded-lg p-4 shadow-lg px-7">
          <h2 className="text-xl font-semibold">Out Vehicles</h2>
          <h1 className="text-[100px] mt-3 w-full text-right">{OutVehicle}</h1>
        </div>
      </div>
    </div>
  )
}

export default GatekeeperDashboard
