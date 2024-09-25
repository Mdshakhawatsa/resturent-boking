import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ForgetPassword() {
  return (
    <div className='text-secondary'>

      <h1 className='text-[32px] mb-5 font-semibold'>Forgot Password ?</h1>

      <div>
        <h1 className='text-xl mb-1 font-semibold'>Email</h1>
        <input type="email" name="" placeholder='Enter your Email' className='h-[40px] w-[600px] px-4  border rounded border-secondary' id="" />
      </div>
      <NavLink  to="/auth/otp-verify">
        <button className=' bg-secondary h-[40px] w-[600px] text-white font-semibold mt-10 rounded'>Submit</button>
      </NavLink>
    </div>
  )
}
