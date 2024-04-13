import React from "react";
import Image from 'next/image';
import logo from '../../Images/ListApp Logo.png';
type Props = {};

function Navbar({ }: Props) {
  return (
    <nav className=" sticky top-0 z-20 h-20 items-center justify-between flex shadow-md px-16 text-gray-600  bg-white  ">
      <div className="flex justify-center ">
        <Image src={logo} alt="logo" className="  h-12 p w-12" />
        <h2 className=" mt-2 mr-7 text-xl pl-3  text-black font-bold ">ListApp</h2>
      </div>
      <ul className="flex  gap-10">
        <li className="cursor-pointer text-lg text-black hover:text-customBlue hover:font-bold"><a href="#hero" >Home</a></li>
        <li className="cursor-pointer text-lg text-black hover:text-customBlue hover:font-bold"><a href="#features">Features</a></li>
        <li className="cursor-pointer text-lg text-black hover:text-customBlue hover:font-bold"><a href="#footer">Contact Us</a></li>
      </ul>
    </nav>

  );
}

export default Navbar;
