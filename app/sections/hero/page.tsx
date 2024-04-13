  "use client";
  import { useState, useEffect } from 'react';
  import React, { useRef } from 'react';
  import Image from 'next/image';
  import Typewriter from 'typewriter-effect';
  import gif from '../../Images/hero.gif'
  function Hero() {

    // const [typedText, setTypedText] = useState('');
    // const textToType = 'LIST APP';
    // const typingSpeed = 500;
    // useEffect(() => {
    //   let currentIndex = 0;
    //   const typingInterval = setInterval(() => {
    //     if (currentIndex < textToType.length) {
    //       setTypedText(prevText =>  prevText + textToType[currentIndex]);
    //       currentIndex++;
    //     } else {
    //       clearInterval(typingInterval);
    //     }
    //   }, typingSpeed);

    //   return () => clearInterval(typingInterval);
    // }, []);

    return (
      <div className=''>
        <div id="hero" className="w-full max-w-7xl flex flex-col relative">
          <div className="w-full h-screen flex items-center justify-center ">
            <div className="w-2/3 text-left text-black">
              <div className='text-6xl  font-bold '>

                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString('<span style="color: black;">L</span>')
                    typewriter.typeString('<span style="color: #black;">I</span>')
                    typewriter.typeString('<span style="color: #black;">S</span>')
                    typewriter.typeString('<span style="color: #black;">T</span>')
                    typewriter.typeString('<span style="color: #f59e0b;">A</span>')
                    typewriter.typeString('<span style="color: #f59e0b;">P</span>')
                    typewriter.typeString('<span style="color: #f59e0b;">P</span>')
                      // typewriter.typeString('<span style="color:blue;">List</span>')
                      .pauseFor(2500)
                      .start();
                  }}
                  options={{
                    cursor: ''
                  }}
                />
              </div>
              <p className="text-gray-800  font-medium ml-1 leading-7 max-w-xl mt-8 mx-auto animate-slide-in-right">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
                voluptatem quisquam praesentium assumenda reprehenderit, non fuga
                dolorem delectus architecto sit blanditiis porro tempora laborum
                eligendi, provident suscipit! Nihil, et iusto?
              </p>
              {/* <a
              href="#"
              className="inline-block mt-8 rounded-xl bg-black px-8 py-4 text-center font-semibold text-white animate-slide-in-left"
            >
              Get Started
            </a> */}
              <button className="inline-block mt-8 rounded-xl px-8 py-4 text-center font-semibold text-white animate-slide-in-left  bg-black hover:bg-yellow-600  border-b-4 border-yellow-600 hover:border-blue-500 ">
                Get Started
              </button>
            </div>
            {/* <div className='flex-grow'></div> This will push the following box to the right */}
            {/* <div className='bg-black h-full absolute right-0 w-96'>BOX</div> */}
          </div>
          <Image className='animate-slide-in-right absolute  
        left-3/4 top-48' src= {gif} alt="List App logo" />
        </div>        
      </div>
    );
  }
  export default Hero;
