import React, { useState } from 'react'
import logo from "/logo.png"
import { Link } from 'react-router-dom'

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container p-4">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <div>
          <Link to="/" >
            <img src={logo} alt="" />
          </Link>
        </div>

        {/* Menu for main screens */}
        <div className="hidden md:flex space-x-6">
          <ul className='flex gap-8'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/foods">Foods</Link>
            </li >
            <li >
              <Link to="/table-booking">Book A Table</Link>

            </li >

            <button>
              <Link to="/auth/login">Log In</Link>
            </button>

          </ul >
        </div>

        {/*  Menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none">

            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden   mt-4">
          <ul className='space-y-4 '>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/foods">Foods</Link>
            </li >
            <li >
              <Link to="/table-booking">Book A Table</Link>
            </li >
            <li >
              <Link to="/auth/login">Log In</Link>
            </li >
          </ul >
        </div>
      )}
    </nav>
  );
}
