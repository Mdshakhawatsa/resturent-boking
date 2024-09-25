import React from 'react'
import image from "/public/book-table.jpg"
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Menu } from 'lucide-react';
import { CiLocationOn } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';

export default function BookTable() {
  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  const defaultCenter = {
    lat: 23.8103, lng: 90.4125 // Default coordinates (Dhaka, Bangladesh)
  }


  return (
    <div className='container mt-20'>
      <div className='lg:grid lg:grid-cols-2 lg:space-x-4'>
        {/*  */}
        <div>
          <img src={image} alt="" />
          <h1 className='text-2xl mt-2'><span className='text-primary'>Villagio</span> Restaurant & Bar</h1>
          <div className=' bg-secondary h-1 mt-2'></div>

          <div className='lg:flex mt-10'>
            <div className='lg:flex gap-4'>
              <CiLocationOn className='text-primary text-2xl' />
              <h1 className='w-72'>360 San Lorenzo Avenue, Suite
                1430 Coral Gables, FL 33146-1865 |</h1>
            </div>
            <div className='flex gap-2'>
              <h1><Menu /></h1>
              <h1>Villagio restaurant and bar has one mission: to provide guests with a fine and fresh seafood experience. Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional. to provide guests with a fine  <span className='text-primary font-bold'>Read More...</span></h1>
            </div>
          </div>
          {/*  */}
          <NavLink to="">
            <button className=' bg-secondary h-[40px] w-full text-white text-xl font-thin mt-10 rounded'>Book Now</button>
          </NavLink>

        </div>
        {/*  */}
        <div className=''>
          <h1 className='text-center text-3xl '>Here to Find</h1>
          <h1 className='text-center lg:text-3xl text-primary mb-5 '>_______________________________________________</h1>


          <LoadScript
            googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={defaultCenter}
            >
              <Marker position={defaultCenter} />
            </GoogleMap>
          </LoadScript>
          

          <h1 className='text-center text-3xl '>Opaning hours</h1>
          <h1 className='text-center lg:text-3xl text-primary mb-5 '>_______________________________________________</h1>

          <div className='space-y-2 items-center'>
            <div className='grid grid-cols-3'>
              <h1>Saturday</h1>
              <h1>10.00-12.00 PM</h1>
              <h1>10.00-12.00 PM</h1>
            </div>
            <div className='grid grid-cols-3'>
              <h1>Sunday</h1>
              <h1>10.00-12.00 PM</h1>
              <h1>10.00-12.00 PM</h1>
            </div>
            <div className='grid grid-cols-3'>
              <h1>Monday</h1>
              <h1>10.00-12.00 PM</h1>
              <h1>10.00-12.00 PM</h1>
            </div>
            <div className='grid grid-cols-3'>
              <h1>Tuesday</h1>
              <h1>10.00-12.00 PM</h1>
              <h1>10.00-12.00 PM</h1>
            </div>
            <div className='grid grid-cols-3'>
              <h1>Wednesday</h1>
              <h1>10.00-12.00 PM</h1>
              <h1>10.00-12.00 PM</h1>
            </div>
            <div className='grid grid-cols-3'>
              <h1>Thursday</h1>
              <h1>10.00-12.00 PM</h1>
              <h1>10.00-12.00 PM</h1>
            </div>
            <div className='grid grid-cols-3'>
              <h1>Friday</h1>
              <h1>10.00-12.00 PM</h1>
              <h1>10.00-12.00 PM</h1>
            </div>
          </div>


        </div>

      </div>
    </div>
  )
}
