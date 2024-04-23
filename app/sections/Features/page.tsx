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
                    <h2 className=" text-6xl md:text-7xl font-semibold animate-slide-in-left mt-12  text-black "><span className='text-yellow-400'>Fea</span>tures</h2>
                    <div className='flex flex-col md:flex-row p-16  justify-evenly item-center space-y-12 md:space-y-0 md:space-x-12'>
                        <div className='flex flex-col pb-11  animate-slide-in-left  md:left-auto relative max-h-[30%] h-auto w-[120%]  -left-5 right-auto md:right-auto
                         md:h-auto md:w-auto shadow-md hover:rounded-l-none
                         shadow-customBlue md:max-w-[30%]  border-gray-400 text-black
                     hover:border-blue-600   hover:scale-150 
                      hover:border-l-2  hover:border-b-2 hover:cursor-pointer'>
                            <div className='flex flex-col items-center '>
                                <Image src={icon1} alt="icon1" className='h-16 z-0 w-16 mt-5 scale-150 ' />
                                <p className='mt-3 text-xl md:text-2xl font-semibold z-10 text-center '>Search By Medicine/Products</p>
                            </div>
                            <p className='mt-5 text-md md:text-xl ml-8 mr-10 text-left text-[#636262] font-serif'>
                            Instantly find your desired medicine or product by name. Get detailed descriptions and availability information for each item. Locate nearby stores stocking the product for
                             quick and convenient access. </p>
                        </div>
                        <div className='flex flex-col pb-11  animate-slide-in-left   md:left-auto relative -left-5 h-auto w-[120%] right-auto
                     md:h-auto md:w-auto md:max-w-[30%]  shadow-md hover:rounded-l-none
                         shadow-customBlue border-gray-400 text-black
                     hover:border-blue-600   hover:scale-150 
                      hover:border-l-2  hover:border-b-2 hover:cursor-pointer'>
                            <div className='flex flex-col items-center'>
                                <Image src={icon2} alt="icon2" className='h-16 z-0 w-16 mt-5 ' />
                                <p className='  mt-3 text-xl md:text-2xl font-semibold z-10 '>Search by Company</p>

                            </div>
                            <p className='mt-5 text-md md:text-xl ml-8 mr-10 text-[#636262]  text-left font-normal font-serif'>  Quickly find medicines
                                from specific manufacturers. Enter the company name and discover their product range. Locate nearby stores
                                stocking these medicines for easy
                                procurement.</p>
                        </div>

                        <div className='flex flex-col pb-11  animate-slide-in-left  md:left-auto relative h-auto w-[120%]  -left-5 right-auto md:right-auto
                         md:h-auto md:w-auto shadow-md hover:rounded-l-none
                         shadow-customBlue md:max-w-[30%]  border-gray-400 text-black
                     hover:border-blue-600   hover:scale-150 
                      hover:border-l-2  hover:border-b-2 hover:cursor-pointer'>
                            <div className='flex flex-col items-center'>
                                <Image src={icon3} alt="icon3" className='h-16  z-0 w-16 mt-4 ' />
                                <p className='mt-3 text-xl md:text-2xl font-semibold z-10'>Search by Supplier</p>
                            </div>
                            <p className='mt-5 text-md md:text-xl ml-8 mr-10 font-serif text-left text-[#636262] '> Easily locate medicines supplied by a
                                particular vendor. Enter the supplier's name to view available products and detailed information. Find out
                                where these products are stocked for convenient access</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Page;
