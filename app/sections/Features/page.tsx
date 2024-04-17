import React, { useRef } from 'react';
import icon1 from '../../Images/icon1.png';
import icon2 from '../../Images/icon2.png';
import icon3 from '../../Images/icon3.png';
import Image from 'next/image';

type Props = {};

function Page({ }: Props) {

    return (

        <div id="features" className="mt-10 md:mt-20">
            <div className=''>

                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-7xl font-semibold animate-slide-in-left mt-12  text-black "><span className='text-yellow-400'>Fea</span>tures</h2>
                    <div className='flex flex-col md:flex-row p-16  justify-evenly item-center space-y-12 md:space-y-0 md:space-x-12'>
                        <div className='flex flex-col animate-slide-in-left  md:left-0 
                        relative   h-screen w-[120%] right-6 md:h-96 md:w-96 shadow-md hover:rounded-l-none
                         shadow-customBlue border-gray-400 text-black
                     hover:border-blue-600   hover:scale-150 
                      hover:border-l-2  hover:border-b-2 hover:cursor-pointer'>
                            <div className='flex flex-col items-center '>
                                <Image src={icon1} alt="icon1" className='h-16 z-0 w-16 mt-5 scale-150 ' />
                                <p className='font-bold  text-3xl '>Pharmacy</p>
                            </div>
                            <p className='mt-5 text-xl ml-8 mr-10 md:text-left text-center font-serif'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Perferendis ullam, aperiam soluta alias doloremque debitis quod ab
                                commodi tempora illo deserunt maiores voluptatum voluptates ea autem,
                                nulla deleniti aut iusto, magni eius?</p>
                        </div>
                        <div className='flex flex-col animate-slide-in-left   md:left-0 relative  h-screen w-[120%] right-6
                     md:h-96 md:w-96 shadow-md hover:rounded-l-none
                         shadow-customBlue border-gray-400 text-black
                     hover:border-blue-600   hover:scale-150 
                      hover:border-l-2  hover:border-b-2 hover:cursor-pointer'>
                            <div className='flex flex-col items-center'>
                                <Image src={icon2} alt="icon2" className='h-16 z-0 w-16 mt-5 ' />
                                <p className='font-bold text-3xl z-10 '>Company</p>

                            </div>
                            <p className='mt-5 text-xl ml-8 mr-10  md:text-left text-center font-serif'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Voluptatum quia dolor sit aliquam commodi officiis.
                                Animi quae iure harum necessitatibus eaque dignissimos a? Dolores ipsam rerum quidem.
                                Saepe in dolorzibus cum tempora</p>
                        </div>

                        <div className='flex flex-col animate-slide-in-left  md:left-0 relative   h-screen w-[120%] right-6
                         md:h-96 md:w-96 shadow-md hover:rounded-l-none
                         shadow-customBlue border-gray-400 text-black
                     hover:border-blue-600   hover:scale-150 
                      hover:border-l-2  hover:border-b-2 hover:cursor-pointer'>
                            <div className='flex flex-col items-center'>
                                <Image src={icon3} alt="icon3" className='h-16  z-0 w-16 mt-4 ' />
                                <p className='font-bold  text-3xl font '>Stockiest</p>
                            </div>
                            <p className='mt-5 text-xl ml-8 mr-10 font-serif md:text-left text-center '>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Voluptatum quia dolor sit aliquam commodi officiis.
                                Animi quae iure harum necessitatibus eaque dignissimos a? Dolores ipsam rerum quidem.
                                Saepe in doloribus cum tempora.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Page;
