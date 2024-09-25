import React from 'react'
import image from "/public/logo.png"
import { FaFacebookF, FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='bg-secondary lg:h-72 h-auto '>
      <div className='flex lg:p-10  justify-between'>
        <div>
          <img src={image} alt="" />
        </div>
        {/*  */}
        <div className='lg:flex font-semibold lg:space-x-8  text-white'>
          <div>
            <h1>Follow Us</h1>
            <div className='flex space-x-3 mt-3'>
              <h1><FaInstagram/></h1>
              <h1><FaFacebookSquare/></h1>
              <h1><FaTwitterSquare/></h1>
            </div>
          </div>
          <div className='text-left '>
              <h1>Call Us</h1>
              <h1>+0034340304</h1>
          </div>
          <div>
          </div>
        </div>
      </div>

      <h1 className='lg:pl-10 mt-7 lg:w-[550px] text-white font-light  '>
        The Food we had enjoyed at the time of dinner. It was really delicious taste 
         with great quality, everything had unique taste which we had ordered, nice 
         arrangement and services from the staff while eating, we found nothing 
         bad about this hotel.
      </h1>


    </div>
  )
}
