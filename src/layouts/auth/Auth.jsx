import React from 'react'
import { Outlet } from 'react-router-dom'
import authimage from "/auth.png"


export default function Auth() {
    return (
        <div className='lg:flex items-center justify-around m-auto  lg:w-[1300px] lg:h-[850px] mt-8 rounded-lg '>
            <div className='h-[410px] w-[529px]  '>
                <img src={authimage} alt="" />
            </div>
            <div>
                <Outlet />
            </div>

        </div>
    )
}
