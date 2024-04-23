"use client"
import { useState, useEffect } from 'react';
import React, { useRef } from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import gif from '../../Images/hero.gif';
import play from '../../Images/PlayStore.png'
import Link from 'next/link';
function Hero() {
  return (
    <div className=''>
      <div id="hero" className="max-w-7xl flex flex-col relative lg:w-full sm:w-[56%]">

        {/* For mobile view */}
        <div className="md:hidden w-full pb-28 h-0">
          <Image className='w-full' src={gif} alt="List App logo" />
        </div>

        <div className="w-full h-screen flex items-center justify-center">

          <div className="w-2/3 text-left text-black">
            <div className='text-6xl font-bold '>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('<span style="color: black;">L</span>')
                    .typeString('<span style="color: #black;">i</span>')
                    .typeString('<span style="color: #black;">s</span>')
                    .typeString('<span style="color: #black;">t</span>')
                    .typeString('<span style="color: #facc15;">A</span>')
                    .typeString('<span style="color: #facc15;">p</span>')
                    .typeString('<span style="color: #facc15;">p</span>')
                    .pauseFor(2500)
                    .start();
                }}
                options={{
                  cursor: ''
                }}
              />
            </div>
            <p className='text-gray-800  md:ml-1  text-left  md:text-left leading-7 max-w-xl mt-8 mx-auto animate-slide-in-right font-serif font-semibold'>
              Welcome to ListApp,
              the premier Android-based Supplier Search app for the Pharmaceutical
              & Healthcare Industry. Revolutionize your ordering process with <span className='font-bold text-yellow-400'>ListApp - Easy, Automated, and Efficient.</span>
            </p>
            {/*Button for mobile view */}
            {/* <button className="md:hidden inline-block mt-8 absolute left-[30%]  md: rounded-xl px-8 py-4 text-center font-semibold text-white animate-slide-in-left bg-black hover:bg-yellow-600 border-b-4 border-yellow-400 hover:border-blue-400">
              Playstore
            </button> */}
            {/*Button for web view */}
            <a className=" mt-8 w-48 flex  rounded-xl pl-[1rem] pt-4 pb-4 text-center font-semibold text-white animate-slide-in-left bg-black hover:bg-yellow-00 border-b-4 border-yellow-400 hover:border-blue-400"
           href='https://bit.ly/Li-Download' target='_blank'>
             <Image className = "h-10 w-10 relative -left-4"  src={play} alt = "playstore"></Image> 
             <span className='mt-2 relative -left-1.5'>PlayStore</span><span className='text-white relative -left-20  -top-1 text-xs font-light'>GET IT ON</span>
             </a>

          </div>
          {/* height= {50} width={50} */}
        </div>

        {/* For desktop view */}
        <div className="hidden md:block">
          <Image className='animate-slide-in-right absolute left-3/4 top-48' src={gif} alt="List App logo" />
        </div>

      </div>
    </div>
  );
}

export default Hero;
