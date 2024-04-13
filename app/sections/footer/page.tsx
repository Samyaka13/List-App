import React from 'react';
import logo from '../../Images/ListApp Logo.png'
import Image from 'next/image';
type Props = {};
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function Page({ }: Props) {
    return (
        <div id='footer' className=" scroll-m-2 border-t-2 rounded-t-lg  border-customBlue text-black py-8 bottom-0">

            <div className="mx-auto px-8 h-full   bottom-0">
                <div className="flex  items-center justify-between bottom-0">
                    <div className="flex items-center">
                        <Image className='w-14 h-14 mr-7' src={logo} alt="" />
                        <span className="text-4xl font-semibold">ListApp</span>
                    </div>
                    <nav className="text-center absolute ">
                        <ul className="flex justify-evenly ml-96 space-x-6 text-lg text-left    ">
                            <div className='pt-32'>
                                <li className='m-5'><a href="#hero" className="hover:text-customBlue hover:font-bold">Home</a></li>
                                <li className='m-5'><a href="#offerLi" target="_blank" className="hover:text-customBlue hover:font-bold">OfferLi</a></li>
                                <li className='m-5'><a href="https://docs.google.com/forms/d/e/1FAIpQLSeo8Dxk4f7ier_yct-uopFmQd3D2rYW5L_fYAExhxa_3_evQg/viewform" target="_blank" className="hover:text-customBlue hover:font-bold">Registartion</a></li>
                            </div>
                            <div className='p-32'>
                                <li className='m-5' ><a href="https://bit.ly/Li-Sub" target="_blank" className="hover:text-customBlue hover:font-bold">Recharge </a></li>
                                <li className='m-5'><a href="#home" target="_blank" className="hover:text-customBlue hover:font-bold">Priority Listing & Advertising</a></li>
                                <li className='m-5'><a href="#features"  className="hover:text-customBlue hover:font-bold">Features</a></li>
                            </div>
                            <div className='p-10'>
                            </div>
                        </ul>
                    </nav>
                    <div className="flex items-center ml-10   text-black ">
                        <div>
                            <p className="text-base font-bold text-customBlue">AIC - 3rd Floor, Prestige Vihar,</p>
                            <p className='text-base font-bold text-customBlue'>Scheme No. 74 Vijay Nagar, </p>
                            <p className='text-base font-bold text-customBlue'>Indore, MP - 452010 </p>
                            <br />
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
