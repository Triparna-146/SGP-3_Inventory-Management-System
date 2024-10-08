import React from 'react'

const InputBox = (props) => {
  return (
    <div className='flex flex-col gap-2 bg-gray-200 w-72 px-5 py-4 rounded-lg shadow-xl'>
        <p className='text-md font-light'>{props.title}</p>
        <input className='outline-none rounded-md py-1 px-2 border-1 border-gray-900 text-gray-700' type="text" placeholder={props.placeholder} onChange={(e) => props.setValue(e.target.value)} name="dealerName" />
    </div>
  )
}

export default InputBox
