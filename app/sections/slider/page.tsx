"use client";
import { useState, useEffect } from 'react';
import React, { useRef } from 'react';
import Image from 'next/image';
import image1 from '../../Images/Slider1.jpg';
import image2 from '../../Images/Slider2.jpg';
import image3 from '../../Images/Slider3.jpg';
import image4 from '../../Images/Slider4.jpg';
import image5 from '../../Images/Slider5.jpg';
import image6 from '../../Images/Slider6.jpg';
function slider() {
    return (
        // <div className='w-full h-full'>
        //   <div className=' w-auto h-80 inline-flex flex-nowrap overflow-hidden'>
        //   </div>        
        // </div>
        <div className=" inline-flex flex-nowrap overflow-hidden">
            <ul className="flex items-center wjustify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                <li>
                    <Image src={image1} width={250} height={250} alt="Image1" />
                </li>
                <li>
                    <Image src={image2} width={250} height={250} alt="Image1" />
                </li>
                <li>
                    <Image src={image3} width={250} height={250} alt="Image1" />
                </li>
                <li>
                    <Image src={image4} width={250} height={250} alt="Image1" />
                </li>
                <li>
                    <Image src={image5} width={250} height={250} alt="Image1" />
                </li>
                <li>
                    <Image src={image6} width={250} height={250} alt="Image1" />
                </li>
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                <li>
                    <Image src={image1} width={250} height={250} alt="Image1" />
                </li>
                <li>
                    <Image src={image2} width={250} height={250} alt="Image1" />
                </li>
                <li>
                    <Image src={image3} width={250} height={250} alt="Image1" />
                </li>
                <li>
                    <Image src={image4} width={250} height={250} alt="Image1" />
                </li>
                <li>
                    <Image src={image5} width={250} height={250} alt="Image1" />
                </li>
                <li>
                    <Image src={image6} width={250} height={150} alt="Image1" />
                </li>
            </ul>

        </div>
    );
}
export default slider;
