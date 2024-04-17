"use client"
import { useState, useEffect } from 'react';
import React, { useRef } from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import gif from '../../Images/hero.gif';

function Hero() {
  return (
    <div className=''>
      <div id="hero" className="max-w-7xl flex flex-col relative lg:w-full sm:w-[56%]">

        {/* For mobile view */}
        <div className="md:hidden w-full">
          <Image className='w-full' src={gif} alt="List App logo" />
        </div>

        <div className="w-full h-screen flex items-center justify-center">

          <div className="w-2/3 text-left text-black">
            <div className='text-6xl font-bold '>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('<span style="color: black;">L</span>')
                    .typeString('<span style="color: #black;">I</span>')
                    .typeString('<span style="color: #black;">S</span>')
                    .typeString('<span style="color: #black;">T</span>')
                    .typeString('<span style="color: #f59e0b;">A</span>')
                    .typeString('<span style="color: #f59e0b;">P</span>')
                    .typeString('<span style="color: #f59e0b;">P</span>')
                    .pauseFor(2500)
                    .start();
                }}
                options={{
                  cursor: ''
                }}
              />
            </div>
            <p className='text-gray-800 font-medium md:ml-1  text-center  md:text-left leading-7 max-w-xl mt-8 mx-auto animate-slide-in-right'>
              Welcome to ListApp,
              the premier Android-based Supplier Search app for the Pharmaceutical
              & Healthcare Industry. Revolutionize your ordering process with <span className='font-bold text-yellow-600'>ListApp - Easy, Automated, and Efficient.</span>
            </p>
            {/*Button for mobile view */}
            <button className="md:hidden inline-block mt-8 absolute left-[30%]  md: rounded-xl px-8 py-4 text-center font-semibold text-white animate-slide-in-left bg-black hover:bg-yellow-600 border-b-4 border-yellow-600 hover:border-blue-500">
              Get Started
            </button>
            {/*Button for web view */}
            <button className=" mt-8 hidden md:inline-block md: rounded-xl px-8 py-4 text-center font-semibold text-white animate-slide-in-left bg-black hover:bg-yellow-600 border-b-4 border-yellow-600 hover:border-blue-500">
              Get Started
            </button>
          </div>

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
