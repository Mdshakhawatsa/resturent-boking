import React from 'react'
import image from "/public/bokingapp.png"
import { BiLogoPlayStore } from 'react-icons/bi'
import { RiAppleFill } from 'react-icons/ri'

export default function BokingApp() {
    return (
       
            <div className='lg:grid lg:grid-cols-2 lg:gap-14  items-center justify-center lg:p-20 '>
                <div className='space-y-5'>
                    <h1 className='lg:text-5xl text-3xl text-secondary font-semibold'>It’s Now More Easy to <span className='text-primary'>booking</span> by Our Mobile App</h1>
                    <p className='lg:w-[480px] lg:text-{24px} font-thin '>All you need to do is downlode one of the best delivery apps, make a and most companies are opting  for mobile app devlopment for food delivery</p>

                    <div className='lg:flex items-center gap-8 '>
                        <button className='text-7xl'>
                            <BiLogoPlayStore />
                        </button>
                        <button className='text-7xl'>
                            <RiAppleFill/>
                        </button>
                    </div>

                </div>

                <div className=''>
                    <img  src={image} alt="" />
                </div>

            </div>
        
    )
}
