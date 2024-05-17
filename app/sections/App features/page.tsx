
"use client";
import React from 'react';
import Image from 'next/image';
import mockup1 from '../../Images/MockUp1.png';
import mockup2 from '../../Images/MockUp2.png';
import mockup3 from '../../Images/MockUp3.png';
import mockup4 from "../../Images/MockUp4.png"
import mockup5 from '../../Images/MockUp5.png';
import mockup6 from '../../Images/MockUp6.png';
type Props = {};

function Page({ }: Props) {
  return (
    
      <div className="flex flex-col justify-center items-center h-full">
        <h2 className="md:text-7xl text-4xl text-center md:mb-0 mb-6  font-semibold animate-slide-in-left  text-yellow-400"><span className='text-black'>Our </span>Application's
          <span className='text-black'> features</span></h2>
        <div className='flex md:flex-row flex-col md:p-16 justify-evenly items-center md:space-x-12' >
          <div className='flex flex-col animate-slide-up '>
            <Image className='md:relative md:left-[7rem] flex h-96 w-96 hover:scale-125 transition-all scale-110 ' src={mockup1} alt="List App logo" />
            <p className=' text-[#636262]  font-serif   text-center  md:mb-0 mb-5 mt-5 flex-col justify-center'>
              <span className='font-bold text-black text-center font-sans '>Register with ease <br />
            </span>Register effortlessly and unlock a wealth of features. Get started with ease and harness
             the power of our platform.</p>
          </div>
          <div className='flex flex-col animate-slide-up '>
            <Image className=' md:relative md:left-[6rem] flex   h-96 w-96 hover:scale-125 transition-all scale-110 ' src={mockup6} alt="List App logo" />
            <p className='  text-[#636262]  font-serif  text-center  md:mb-0 mb-5 mt-5 flex-col justify-center'>
              <span className='font-bold text-black font-sans'>Get Various Features <br />
            </span>Get various features like search by medicine search by supplier and search by company and margin calculator  </p>
          </div>
         
 <div className='flex flex-col animate-slide-up '>
            <Image className='md:relative md:left-[4rem] flex h-96 w-96 hover:scale-125 transition-all scale-110 ' src={mockup2} alt="List App logo" />
            <p className='md:relative md:left-10 text-center text-[#636262]  font-serif  md:mb-0 mb-5 mt-5 flex-col justify-center'>
              <span className='font-bold text-black font-sans '>Search by Medicine or Product  <br />
            </span>Get the medicines and related products you were searching for in just a few steps.</p>
          </div>
        </div>
        <div className='flex md:flex-row flex-col md:p-16 justify-evenly items-center md:space-x-12  '>
         
          <div className='flex flex-col animate-slide-up '>
            <Image className=' md:relative md:left-[5rem] flex h-96 w-96 hover:scale-125 transition-all scale-110 ' src={mockup3} alt="List App logo" />
            <p className=' font-serif md:relative  text-[#636262] text-center  md:mb-0 mb-5 mt-5 flex-col justify-center'>
              <span className='font-bold text-black font-sans'>Search by Supplier  <br />
            </span>Get the details of the supplier you are searching for and contact them easily with the help of our ListApp.</p>
          </div>
          <div className='flex flex-col animate-slide-up '>
            <Image className='flex  md:relative md:left-[10rem] h-96 w-96 hover:scale-125 transition-all scale-110 ' src={mockup4} alt="List App logo" />
            <p className='text-[#636262] relative md:left-16 font-serif text-center md:mb-0 mb-5 mt-5 flex-col justify-center'>
              <span className='font-bold text-black font-sans '>Search By Company <br />
            </span> Get a comprehensive list of all medicines and products supplied by the company you've searched for in just a single click. </p>
          </div>
          <div className='flex flex-col animate-slide-up '>
            <Image className='flex md:relative md:left-[7rem]  h-96 w-96 hover:scale-125 transition-all scale-110 ' src={mockup5} alt="List App logo" />
            <p className='  text-center font-serif
             text-[#636262] md:relative md:left-14 md:mb-0 mb-5 mt-5 flex-col justify-center'>
              <span className='font-bold  text-black font-sans'>Margin Calculator <br />
            </span>Calculate margins effortlessly with our Margin Calculator tool, streamlining your financial analysis process.</p>
          </div>
        </div>
      </div>
  );
};

export default Page;
