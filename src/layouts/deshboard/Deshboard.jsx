import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

export default function Deshboard() {
  return (
    
    <div className='grid grid-cols-12 gap-5 p-5'>
    <SideBar/>
    <div className='col-span-10 bg-slate-700'>
      <Outlet/>
    </div>
    </div>
   
  )
}
