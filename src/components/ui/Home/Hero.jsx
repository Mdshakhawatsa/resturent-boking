import React from 'react'
import image from "/public/heroimg.png"
import { Search } from 'lucide-react'

export default function Hero() {
    return (
        <div className='lg:grid lg:grid-cols-2 gap-10 items-center'>
            <div className='space-y-10'>
                <h1 className='lg:text-6xl text-4xl font-semibold'>Good <span className='text-primary'>booking</span>, great memories</h1>
                <p  className='lg:w-4/6 text-3xl font-thin '>Enable diners to customize their  booking by requesting a specific table  location or view.</p>
          <div className='flex border lg:w-2/4 px-2 py-1 rounded-full'>
            <input className='w-full py-1 px-2 outline-none' type="text" placeholder='Search food' />
            <button className='bg-primary text-white w-10  h-9 flex items-center justify-center rounded-full'>
                <Search/>
            </button>
          </div>

            </div>

            <div>
                <img className='w-full' src={image} alt="" />
            </div>

        </div>
    )
}
