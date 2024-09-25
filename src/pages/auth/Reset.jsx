import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Reset() {
  const showAlert = () => {
    alert('Submited successfully!');
  };
  return (
   
      <div className='text-secondary '>

        <h1 className='text-[32px] mb-5 font-semibold'>new Password set</h1>

        <div>
          <h1 className='text-xl mb-1 font-semibold'>Enter new password</h1>
          <input type="email" name="" placeholder='' className='h-[40px] w-[600px] px-4  border rounded border-secondary' id="" />
        </div>
        <div className='mt-10'>
          <h1 className='text-xl mb-1 font-semibold'>Confirm Password</h1>
          <input type="email" name="" placeholder='' className='h-[40px] w-[600px] px-4  border rounded border-secondary' id="" />
        </div>
        <NavLink to="">
          <button onClick={showAlert} className=' bg-secondary h-[40px] w-[600px] text-white font-semibold mt-10 rounded'>Submit</button>
        </NavLink>
      </div>


   
  )
}
