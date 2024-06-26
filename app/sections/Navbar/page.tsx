"use client"
import React, { useState } from "react";
import Image from 'next/image';
import logo from '../../Images/ListApp Logo.png';
import Link from 'next/link';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div   id="navbar" className="md:fixed z-50 w-full">
      <nav className=" top-0  h-20 w-full items-center justify-between flex shadow-md px-4 md:px-16 text-gray-600 bg-white">
        <a className="flex justify-center items-center" href="#hero">
          <Image src={logo} alt="logo" className="h-12 p w-12  " />
          <h2 className="mt-2 mr-7 text-xl pl-3 text-black font-bold">ListApp</h2>
        </a>
        <div className="flex absolute right-0 md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none focus:text-gray-800"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <ul className={"flex gap-7 md:flex"}>
          <li className="hidden md:block cursor-pointer text-lg text-black hover:transition-all duration-200 hover:text-customBlue hover:font-bold  "><Link href="#hero"> Home </Link></li>
          <li className="hidden md:block cursor-pointer text-lg text-black  hover:transition-all duration-200 hover:text-customBlue hover:font-bold"><Link href="#features">Features</Link></li>
          <li className="hidden md:block cursor-pointer text-lg text-black hover:transition-all duration-200 hover:text-customBlue hover:font-bold"><Link href="https://bit.ly/Li-Recharge" target="blank">Recharge</Link></li>
          <li className="hidden md:block cursor-pointer text-lg text-black hover:transition-all duration-200 hover:text-customBlue hover:font-bold"><Link href="https://bit.ly/ListApp-Supplier-Registration" target="_blank">Registration</Link></li>
          <li className="hidden md:block cursor-pointer text-lg text-black  hover:transition-all duration-200 hover:text-customBlue hover:font-bold"><Link href="#footer">Contact Us</Link></li>
        </ul>
      </nav>
      {showMenu && (
        <div className="md:hidden z-30 flex absolute right-2 bg-white bg-opacity-95 shadow-lg pl-2 rounded-t-none rounded-r-none border-l-1 border-b-1 shadow-gray-500 border-gray-500 rounded-md font-medium w-[35%] animate-slide-in-right  text-left  duration-75 ">
          <ul className="flex relative  left-0 flex-col text-black gap-5  ">
            <li className="cursor-pointer text-md text-black hover:transition-all duration-200 hover:text-customBlue hover:font-bold "><Link href="#navbar">Home</Link></li>
            <li className="cursor-pointer text-md text-black hover:transition-all duration-200 hover:text-customBlue hover:font-bold "><Link href="#features">Features</Link></li>
            <li className="cursor-pointer text-md text-black hover:transition-all duration-200 hover:text-customBlue hover:font-bold "><Link href="https://bit.ly/Li-Recharge" target="blank">Recharge</Link></li>
            <li className="cursor-pointer text-md text-black hover:transition-all duration-200 hover:text-customBlue hover:font-bold "><Link href="https://bit.ly/ListApp-Supplier-Registration" target="_blank">Registration</Link></li>
            <li className="cursor-pointer text-md text-black hover:transition-all duration-200 hover:text-customBlue hover:font-bold "><Link href="#footer">Contact Us</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;