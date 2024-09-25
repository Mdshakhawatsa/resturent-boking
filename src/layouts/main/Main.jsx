import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function
    () {
    return (
        <>
            <div className=''>
                <Navbar />
                <div className='min-h-screen'>
                    <Outlet />
                </div>
            </div>
            <Footer />

        </>
    )
}
