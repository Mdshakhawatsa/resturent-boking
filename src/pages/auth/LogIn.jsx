import React from 'react'
import authlogo from "/auth-logo.png"
import { NavLink } from 'react-router-dom'

export default function LogIn() {
    return (
        <div>
            <div className=''>
                <div className='text-center  '>
                    <div className='justify-center flex items-center'>
                        <img src={authlogo} alt="" />
                    </div>
                    <h1 className='text-[32px] mb-8 font-semibold'>Great to have you back !</h1>
                </div>
                <div>
                    <h1 className='text-2xl mb-3 font-semibold'>User Name or Email</h1>
                    <input type="email" name="" className='h-[56px] lg:w-[648px] px-4  border rounded-xl border-secondary' id="" />
                    <h1 className='font-semibold text-sm mt-2'>Username or Email is required</h1>
                </div>
                <div className='mt-6'>
                    <div className='flex lg:justify-between'>
                        <h1 className='text-2xl mb-3 font-semibold '>Password</h1>
                        <NavLink to="/auth/forget-password" className='underline'>Forget Password</NavLink>
                    </div>
                    <input type="email" name="" className='h-[56px] lg:w-[648px] border px-4 rounded-xl border-secondary' id="" />
                </div>

                <button className=' bg-secondary h-[56px] lg:w-[648px] text-white mt-10 rounded'>SIGN IN</button>

               <div className=' flex gap-4 justify-center mt-10'>
               <h1 className='text-secondary'>New Hare?</h1>
               <NavLink to="/auth/signup" className="text-primary underline">Sign Up</NavLink>
               </div>
            </div>
        </div>
    )
}
