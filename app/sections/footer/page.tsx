import React from 'react';
import logo from '../../Images/ListApp Logo.png'
import Image from 'next/image';
import Link from 'next/link';
type Props = {};

function Page({ }: Props) {
    return (
        <div id='footer' className="border-t-2 rounded-t-lg relative top-0  border-customBlue text-black pt-10 pb-0">
            <div className="mx-auto px-8 md:h-full w-screen  bottom-0">
                <div className="flex md:flex-row flex-col items-center justify-between bottom-0">
                    {/*Mobile Links */}
                    <nav className="md:hidden text-center absolute  ">
                        <ul className="flex md:flex-row flex-col  text-lg text-left  absolute right-0 ">
                            <div className=''>
                                <li className='m-5'><Link href="#navbar" className="hover:text-customBlue hover:font-bold">Home</Link></li>
                                <li className='m-5'><Link href="https://bit.ly/Li-Recharge" target="_blank" className="hover:text-customBlue hover:font-bold">Recharge</Link></li>
                                <li className='m-5'><Link href="https://bit.ly/ListApp-Supplier-Registration" target="_blank" className="hover:text-customBlue hover:font-bold">Registration</Link></li>
                                <li className='m-5' ><Link href="https://bit.ly/Li-OrderList" target="_blank" className="hover:text-customBlue hover:font-bold">OrderList </Link></li>
                                <li className='m-5'><Link href="https://api.whatsapp.com/send?phone=917987202207&text=Hi%2C%0AI%20wish%20to%20know%20more%20about%20listing%20on%20ListApp" target="_blank" className="hover:text-customBlue hover:font-bold">Priority Listing & Advertising</Link></li>
                                <li className='m-5'><Link href="#features" className="hover:text-customBlue hover:font-bold">Features</Link></li>
                                <li className='m-5'><Link href="http://bit.ly/LiDataUpdate" className="hover:text-customBlue hover:font-bold">Download Sample ListApp File</Link></li>
                            </div>

                        </ul>
                    </nav>
                    {/*Mobile */}
                    <div className="flex md:hidden  flex-col md:flex-row  pt-3 pb-14 items-center absolute left-14 mt-[396px]  text-black ">
                        <div className='md:mt-0 mt-[8.5rem]'>
                            <p className="text-base font-bold text-customBlue">AIC - 3rd Floor, Prestige Vihar,</p>
                            <p className='text-base font-bold text-customBlue'>Scheme No. 74 Vijay Nagar, </p>
                            <p className='text-base font-bold text-customBlue'>Indore, MP - 452010 </p>
                            <br />
                            <p className="text-base font-bold text-customBlue">Email: support@listapp.in </p>
                            <br />
                            <p className="text-base font-bold text-customBlue">Phone: 9977773388</p>
                        </div>
                    </div>
                    {/*Logo Mobile */}
                    <div className=" flex md:hidden absolute left-10 pt-3  items-center mt-[360px]">
                        <Image className='w-14 h-14 mr-3' src={logo} alt="" />
                        <span className="text-4xl/[15.5rem] font-semibold">ListApp</span>
                    </div>
                    <div className=" hidden md:flex items-center">
                        <Image className='w-14 h-14 mr-3' src={logo} alt="" />
                        <span className="text-4xl font-semibold">ListApp</span>
                    </div>
                    {/*Md */}
                    <nav className="hidden md:block text-center absolute pt-0 ">
                        <ul className="flex md:flex-row flex-col justify-evenly ml-96 md:space-x-6 text-lg md:text-left    ">
                            <div className='md:pt-32 pr-3'>
                                <li className='m-5'><Link href="#hero" className="hover:text-customBlue hover:transition-all duration-200">Home</Link></li>
                                <li className='m-5 '><Link href="https://bit.ly/Li-Recharge" target="_blank" className="hover:text-customBlue hover:transition-all duration-200">Recharge</Link></li>
                                <li className='m-5 pr-8'><Link href="https://bit.ly/ListApp-Supplier-Registration" target="_blank" className="hover:text-customBlue hover:transition-all duration-200 ">Registration</Link></li>
                            </div>
                            <div className=' md:pt-32 pr-32 pb-32 pl-6'>
                                <li className='m-5' ><Link href="http://bit.ly/LiDataUpdate" target="_blank" className="hover:text-customBlue hover:transition-all duration-200">Download Sample ListApp File </Link></li>
                                <li className='m-5'><Link href="https://api.whatsapp.com/send?phone=917987202207&text=Hi%2C%0AI%20wish%20to%20know%20more%20about%20listing%20on%20ListApp" target="_blank" className="hover:text-customBlue hover:transition-all duration-200">Priority Listing & Advertising</Link></li>
                                <li className='m-5'><Link href="#features" className="hover:text-customBlue hover:transition-all duration-200">Features</Link></li>
                            </div>
                            <div className=' md: pl-0 w-13 relative -left-28 pb-0 pt-32'>
                                <li className='m-5' ><Link href="https://bit.ly/Li-OrderList" target="_blank" className="hover:text-customBlue hover:transition-all duration-200">OrderList</Link></li>
                            </div>

                        </ul>
                    </nav>
                    {/*Md */}
                    <div className="hidden md:flex  flex-col md:flex-row  items-center ml-10   text-black ">
                        <div className='md:mt-0 mt-10'>
                            <p className="text-base font-bold text-customBlue">AIC - 3rd Floor, Prestige Vihar,</p>
                            <p className='text-base font-bold text-customBlue'>Scheme No. 74 Vijay Nagar, </p>
                            <p className='text-base font-bold text-customBlue'>Indore, MP - 452010 </p>
                            <br/>
                            <p className="text-base font-bold text-customBlue">Email: support@listapp.in </p>
                            <br />
                            <p className="text-base font-bold text-customBlue">Phone: 9977773388</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Page;