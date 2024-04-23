// import React  from 'react';
// import {useEffect,useRef,useState}  from 'react';
// import Image from 'next/image';
// import mockup1 from '../../Images/MockUp1.png';
// type Props = {};

// function Page({ }: Props) {
//   const Page = () => {
//     const featuresRef = useRef(null);
//     const [isFeaturesInView, setIsFeaturesInView] = useState(false);

//     useEffect(() => {
//       const handleScroll = () => {
//         if (featuresRef.current) {
//           const top = featuresRef.current.getBoundingClientRect().top;
//           const bottom = featuresRef.current.getBoundingClientRect().bottom;

//           // Check if the features section is in view
//           setIsFeaturesInView(top < window.innerHeight && bottom >= 0);
//         }
//       };

//       // Attach scroll event listener
//       window.addEventListener('scroll', handleScroll);

//       // Clean up
//       return () => {
//         window.removeEventListener('scroll', handleScroll);
//       };
//     }, []);
//   };
//   return (

//     <div  className="h-screen mb-10">

//       <div  className="flex flex-col justify-center items-center h-full">
//         {/* <section className=" flex mt-12 z-0 w-full">
//       <img
//         src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639174a3de7d11bdf3ccbf01_Frame%20427322885.svg"
//         alt=""
//         className="inline-block max-w-full max-h-full"
//       />
//     </section> */}
//         <h2 className={`text-7xl font-semibold animate-slide-in-left mt-12 text-yellow-500 ${isFeaturesInView ? '' : 'invisible'}`}><span className='text-black'>Our </span>Application's
//           <span className='text-black'>   features</span></h2>
//         <div className='flex p-16  justify-evenly items-center space-x-12 'ref={featuresRef}>
//           {/* <div className='flex flex-col animate-slide-in-left h-96 w-96 border-2 rounded-xl bg-yellow-400 border-black text-black  hover:border-blue2 hover:scale-95 hover:border-4 transition-all transition-delay-2000 hover:cursor-pointer'>
//                         <div className='flex '>
//                             <img className='h-12 w-12 mt-5 ml-4' src="https://cdn-icons-png.flaticon.com/512/8552/8552180.png" alt="check1" />
//                             <p className='font-bold mt-5 ml-3 text-3xl '>Lorem, ipsum dolor.</p>
//                         </div>
//                         <p className='mt-5 text-xl ml-8 mr-10   font-'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                             Perferendis ullam, aperiam soluta alias doloremque debitis quod ab
//                             commodi tempora illo deserunt maiores voluptatum voluptates ea autem,
//                             nulla deleniti aut iusto, magni eius?</p>
//                     </div> */}
//           <div className='flex flex-col animate-slide-up '>
//             <Image className='flex h-96 w-96 hover:scale-125 transition-all  scale-110 ' src={mockup1} alt="List App logo" />
//             <p className='text-black w-3/4 text-center mt-10 flex justify-center'>Lorem ipsum dolor, sit amet consectetur
//               adipisicing elit. Officia, corporis.</p>                    </div>
//           <div className='flex flex-col animate-slide-up '>
//             <Image className='flex   h-96 w-96 hover:scale-125 transition-all  scale-110 ' src={mockup1} alt="List App logo" />
//             <p className='text-black w-3/4 text-center mt-10 flex justify-center'>Lorem ipsum dolor, sit amet consectetur
//               adipisicing elit. Officia, corporis.</p>
//           </div>
//           <div className='flex flex-col animate-slide-up '>
//             <Image className='flex  h-96 w-96 hover:scale-125 transition-all translate-x-10 scale-110 ' src={mockup1} alt="List App logo" />
//             <p className='text-black w-3/4 text-center mt-10 flex justify-center'>Lorem ipsum dolor, sit amet consectetur
//               adipisicing elit. Officia, corporis.</p>
//           </div>
//           {/* <div className=' text-black'>Image 1</div> */}
//           {/* <div className='flex flex-col h-96 w-96 border-2 animate-slide-in-right rounded-xl bg-blueNew border-black text-white  hover:border-yellow-400  hover:scale-95 hover:border-4 transition-all hover:cursor-pointer'>
//                         <div className='flex'>
//                             <img className='h-12 w-12 mt-5 ml-4' src="https://cdn-icons-png.flaticon.com/512/8552/8552180.png" alt="check2" />
//                             <p className='font-bold mt-5 ml-3 text-3xl '>Lorem, ipsum dolor.</p>
//                         </div>
//                         <p className='mt-5 text-xl ml-8 mr-10  font-serif'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                             Voluptatum quia dolor sit aliquam commodi officiis.
//                             Animi quae iure harum necessitatibus eaque dignissimos a? Dolores ipsam rerum quidem.
//                             Saepe in dolorzibus cum tempora</p>
//                     </div> */}

//           {/* <div className='flex flex-col h-96 w-96 border-2 rounded-xl animate-slide-in-right bg-yellow-400 border-black text-black  hover:border-blue2  hover:scale-95 hover:border-4 transition-all hover:cursor-pointer'>
//                         <div className='flex'>
//                             <img className='h-12 w-12 mt-5 ml-4' src="https://cdn-icons-png.flaticon.com/512/8552/8552180.png" alt="check1" />
//                             <p className='font-bold mt-7 ml-3 text-3xl '>Lorem, ipsum dolor.</p>
//                         </div>
//                         <p className='mt-5 text-xl ml-8 mr-10 font-serif '>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                             Voluptatum quia dolor sit aliquam commodi officiis.
//                             Animi quae iure harum necessitatibus eaque dignissimos a? Dolores ipsam rerum quidem.
//                             Saepe in doloribus cum tempora.</p>
//                     </div> */}
//         </div>
//       </div>

//     </div>

//   );
// }
// export default Page;
"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import mockup1 from '../../Images/MockUp1.png';
import mockup2 from '../../Images/MockUp2.png';
import mockup3 from '../../Images/MockUp3.png';
import mockup4 from "../../Images/MockUp4.png"
import mockup5 from '../../Images/MockUp5.png';
import mockup6 from '../../Images/MockUp6.png';

const Page = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [isFeaturesInView, setIsFeaturesInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (featuresRef.current) {
        const top = featuresRef.current.getBoundingClientRect().top;
        const bottom = featuresRef.current.getBoundingClientRect().bottom;

        // Check if the features section is in view
        setIsFeaturesInView(top < window.innerHeight && bottom >= 0);
        console.log("isFeaturesInView: ", isFeaturesInView);
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
      <div className="flex flex-col justify-center items-center h-full">
        <h2 className={`md:text-7xl text-4xl text-center md:mb-0 mb-6  font-semibold animate-slide-in-left  text-yellow-400`}><span className='text-black'>Our </span>Application's
          <span className='text-black'> features</span></h2>
        <div className='flex md:flex-row flex-col md:p-16 justify-evenly items-center md:space-x-12' >
          <div className='flex flex-col animate-slide-up '>
            <Image className='md:relative md:left-5 flex h-96 w-96 hover:scale-125 transition-all scale-110 ' src={mockup1} alt="List App logo" />
            <p className=' text-[#636262]  font-serif   text-center  md:mb-0 mb-5 mt-5 flex-col justify-center'>
              <span className='font-bold text-black text-center font-sans '>Register with ease <br />
            </span>Register effortlessly and unlock a wealth of features. Get started with ease and harness
             the power of our platform.</p>
          </div>
          <div className='flex flex-col animate-slide-up '>
            <Image className=' md:relative md:left-5 flex   h-96 w-96 hover:scale-125 transition-all scale-110 ' src={mockup6} alt="List App logo" />
            <p className='  text-[#636262]  font-serif  text-center  md:mb-0 mb-5 mt-5 flex-col justify-center'>
              <span className='font-bold text-black font-sans'>Get Various Features <br />
            </span>Get various features like search by medicine search by supplier and search by company and margin calculator  </p>
          </div>
         
 <div className='flex flex-col animate-slide-up '>
            <Image className='md:relative md:left-10 flex h-96 w-96 hover:scale-125 transition-all scale-110 ' src={mockup2} alt="List App logo" />
            <p className='md:relative md:left-10 text-center text-[#636262]  font-serif  md:mb-0 mb-5 mt-5 flex-col justify-center'>
              <span className='font-bold text-black font-sans '>Search by Medicine or Product  <br />
            </span>Get the medicines and related products you were searching for in just a few steps.</p>
          </div>
        </div>
        <div className='flex md:flex-row flex-col md:p-16 justify-evenly items-center md:space-x-12  '>
         
          <div className='flex flex-col animate-slide-up '>
            <Image className=' md:relative  flex h-96 w-96 hover:scale-125 transition-all scale-110 ' src={mockup3} alt="List App logo" />
            <p className=' font-serif md:relative  text-[#636262] text-center  md:mb-0 mb-5 mt-5 flex-col justify-center'>
              <span className='font-bold text-black font-sans'>Search by Supplier  <br />
            </span>Get the details of the supplier you are searching for and contact them easily with the help of our ListApp.</p>
          </div>
          <div className='flex flex-col animate-slide-up '>
            <Image className='flex  md:relative md:left-24 h-96 w-96 hover:scale-125 transition-all scale-110 ' src={mockup4} alt="List App logo" />
            <p className='text-[#636262] relative md:left-16 font-serif text-center md:mb-0 mb-5 mt-5 flex-col justify-center'>
              <span className='font-bold text-black font-sans '>Search By Company <br />
            </span>Get a comprehensive list of all medicines and products supplied by the company you've searched for in just a single click. </p>
          </div>
          <div className='flex flex-col animate-slide-up '>
            <Image className='flex md:relative md:left-20  h-96 w-96 hover:scale-125 transition-all scale-110 ' src={mockup5} alt="List App logo" />
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
