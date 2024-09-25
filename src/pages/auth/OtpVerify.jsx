import React from 'react'
import { NavLink } from 'react-router-dom'

export default function OtpVerify() {
  return (
    <div>
      <h1 className='text-[32px] text-secondary'>Put here OTP </h1>
      <div>
        <h1 className='text-2xl text-secondary mt-10'>OTP</h1>
        <div className='space-x-5 mt-5 '>
          <input className='border h-12 w-14 px-4 border-secondary rounded' type="text" />
          <input className='border h-12 w-14 px-4 border-secondary rounded' type="text" />
          <input className='border h-12 w-14 px-4 border-secondary rounded' type="text" />
          <input className='border h-12 w-14 px-4 border-secondary rounded' type="text" />
          <input className='border h-12 w-14 px-4 border-secondary rounded' type="text" />
        </div>

        <NavLink to="/auth/reset-password">
          <button className=' bg-secondary h-[40px] w-[600px] text-white font-semibold mt-10 rounded'>Submit</button>
        </NavLink>
      </div>


    </div>
  )
}
