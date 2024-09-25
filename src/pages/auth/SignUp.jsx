import React from 'react'
import { NavLink } from 'react-router-dom'
import authlogo from "/auth-logo.png"

export default function SignUp() {
  return (
    <div>
      <div className=' text-secondary'>

        <div className='text-center mb-10 '>
          <div className='justify-center flex h-[200px] items-center'>
            <img src={authlogo} alt="" />
          </div>
          <h1 className='text-[32px] mb-5 font-semibold'>Great to have you back !</h1>
        </div>

        {/*First Name  */}
        <div>
          <h1 className='text-xl mb-1 font-semibold'>First Name</h1>
          <input type="email" placeholder='Enter your first name' name="" className='h-[40px] w-[600px] px-4  border rounded border-secondary' id="" />

        </div>
        {/* Last Name */}
        <div>
          <h1 className='text-xl mb-1  font-semibold'>Last Name </h1>
          <input type="email" name=""  placeholder='Enter your Last name' className='h-[40px] w-[600px] px-4  border rounded border-secondary' id="" />

        </div>
        {/* Contact Number */}
        <div>
          <h1 className='text-xl mb-1 font-semibold'>Contact Number</h1>
          <input type="email" name=""  placeholder='Enter your Contact Number' className='h-[40px] w-[600px] px-4  border rounded border-secondary' id="" />

        </div>
        {/*  Email */}
        <div>
          <h1 className='text-xl mb-1 font-semibold'>Email</h1>
          <input type="email" name=""  placeholder='Enter your Email' className='h-[40px] w-[600px] px-4  border rounded border-secondary' id="" />
        </div>
        {/* New Password */}
        <div>
          <h1 className='text-xl mb-1 font-semibold'>New Password </h1>
          <input type="email" name=""  placeholder='Enter your New Password' className='h-[40px] w-[600px] px-4  border rounded border-secondary' id="" />

        </div>
        {/* Confirm Password */}
        <div>
          <h1 className='text-xl mb-1 font-semibold'>Confirm Password</h1>
          <input type="email" name=""  placeholder='Enter your Confirm Password' className='h-[40px] w-[600px] px-4  border rounded border-secondary' id="" />

        </div>
        {/*  */}







        <button className=' bg-secondary h-[40px] w-[600px] text-white font-semibold mt-10 rounded'>Create Account</button>

      </div>

    </div>
  )
}
