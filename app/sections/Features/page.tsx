import React from 'react';
import icon1 from '../../Images/icon1.png';
import icon2 from '../../Images/icon2.png';
import icon3 from '../../Images/icon3.png';
import Image from 'next/image';

type Props = {};

function Page({ }: Props) {
   
    return (

        <div id="features" className="h-screen mb-10">
            <div className=''>

                <div className="flex flex-col justify-center items-center h-full">
                    {/* <section className=" flex mt-12 z-0 w-full">
      <img
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639174a3de7d11bdf3ccbf01_Frame%20427322885.svg"
        alt=""
        className="inline-block max-w-full max-h-full"
      />
    </section> */}
                    <h2 className="text-7xl font-semibold animate-slide-in-left mt-12  text-black "><span className='text-yellow-400'>Fea</span>tures</h2>
                    <div className='flex p-16  justify-evenly items-center space-x-12'>
                        <div className='flex flex-col animate-slide-in-left h-96 w-96 border-2 shadow-md hover:rounded-lg shadow-customBlue border-gray-400 text-black
                     hover:border-blue-500  hover:border-2 hover:scale-150 transition-all transition-delay-2000 hover:cursor-pointer'>
                            <div className='flex flex-col items-center '>
                                <Image src={icon1} alt="icon1" className='h-16  z-0 w-16 mt-5 scale-150 ' />
                                {/* <img className='h-12 w-12 mt-5 ' src="https://cdn-icons-png.flaticon.com/512/8552/8552180.png" alt="check1" /> */}
                                <p className='font-bold  text-3xl '>Pharmacy</p>
                            </div>
                            <p className='mt-5 text-xl ml-8 mr-10 font-serif'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Perferendis ullam, aperiam soluta alias doloremque debitis quod ab
                                commodi tempora illo deserunt maiores voluptatum voluptates ea autem,
                                nulla deleniti aut iusto, magni eius?</p>
                        </div>
                        <div className='flex flex-col h-96 w-96 border-2 animate-slide-in-right shadow-md shadow-customBlue hover:rounded-lg border-gray-400 text-black
                     hover:border-blue-500  hover:border-2   hover:scale-95  transition-all hover:cursor-pointer'>
                            <div className='flex flex-col items-center'>
                                <Image src={icon2} alt="icon2" className='h-16 z-0 w-16 mt-5 ' />
                                {/* <img className='h-12 w-12 mt-5' src="https://cdn-icons-png.flaticon.com/512/8552/8552180.png" alt="check2" /> */}
                                <p className='font-bold text-3xl z-10 '>Company</p>

                            </div>
                            <p className='mt-5 text-xl ml-8 mr-10  font-serif'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Voluptatum quia dolor sit aliquam commodi officiis.
                                Animi quae iure harum necessitatibus eaque dignissimos a? Dolores ipsam rerum quidem.
                                Saepe in dolorzibus cum tempora</p>
                        </div>

                        <div className='flex flex-col h-96 w-96 border-2 shadow-md shadow-customBlue hover:rounded-lg justify-center animate-slide-in-right  border-gray-400 text-black 
                     hover:border-blue-500  hover:border-2 hover:scale-95  transition-all hover:cursor-pointer'>
                            <div className='flex flex-col items-center'>
                                <Image src={icon3} alt="icon3" className='h-16  z-0 w-16 mt-4 ' />
                                {/* <img className='h-12 w-12 mb-2 ' src="https://cdn-icons-png.flaticon.com/512/8552/8552180.png" alt="check1" /> */}
                                <p className='font-bold  text-3xl font '>Stockiest</p>
                            </div>
                            <p className='mt-5 text-xl ml-8 mr-10 font-serif '>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
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
