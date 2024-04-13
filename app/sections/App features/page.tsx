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
    <div className="h-screen mb-10">
      <div className="flex flex-col justify-center items-center h-full">
        <h2 className={`text-7xl font-semibold animate-slide-in-left mt-12 text-yellow-500 ${isFeaturesInView ? '' : 'invisible'}`}><span className='text-black'>Our </span>Application's
          <span className='text-black'>   features</span></h2>
        <div className='flex p-16 justify-evenly items-center space-x-12' ref={featuresRef}>
          <div className='flex flex-col animate-slide-up '>
            <Image className='flex h-96 w-96 hover:scale-125 transition-all scale-110 ' src={mockup1} alt="List App logo" />
            <p className='text-black w-3/4 text-center mt-10 flex justify-center'>Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Officia, corporis.</p>                    
          </div>
          <div className='flex flex-col animate-slide-up '>
            <Image className='flex   h-96 w-96 hover:scale-125 transition-all scale-110 ' src={mockup1} alt="List App logo" />
            <p className='text-black w-3/4 text-center mt-10 flex justify-center'>Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Officia, corporis.</p>
          </div>
          <div className='flex flex-col animate-slide-up '>
            <Image className='flex  h-96 w-96 hover:scale-125 transition-all translate-x-10 scale-110 ' src={mockup1} alt="List App logo" />
            <p className='text-black w-3/4 text-center mt-10 flex justify-center'>Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Officia, corporis.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
