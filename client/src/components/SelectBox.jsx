import React, { useState } from 'react'

const SelectBox = ({title, options, setValue}) => {

  const [selectedOption, setSelectedOption] = useState("")

  const handleChange = (e) => {
    setSelectedOption(e.target.value)
    setValue(e.target.value)
  }

  return (
    <div className='flex flex-col gap-2 bg-gray-200 w-72 px-5 py-4 rounded-lg shadow-xl'>
        <p className='text-md font-light'>{title}</p>
        <select className={`outline-none rounded-md py-1 px-2 border-1 border-gray-900 text-gray-700 ${selectedOption === "" ? 'text-slate-400' : ''}`} onChange={handleChange}>
            <option className='text-gray-400' value="">Select an option</option>
            {options.map((option, index) => (
                <option className='text-neutral-800' key={index} value={option.value}>{option.label}</option>
            ))}
        </select>
    </div>
  )
}

export default SelectBox
