"use client";
import { useState, useEffect } from 'react';
import React, { useRef } from 'react';
import Image from 'next/image';
import image1 from '../../Images/Slider1.jpg';
import image2 from '../../Images/Slider2.jpg';
import image3 from '../../Images/Slider3.jpg';

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
                    <Image src={image2} width={250} height={250} alt="Image2" />
                </li>
                <li>
                    <Image src={image3} width={250} height={250} alt="Image3" />
                </li>
                <li>
                    <Image src={image1} width={250} height={250} alt="Image1" />
                </li>
                <li>
                    <Image src={image2} width={250} height={250} alt="Image2" />
                </li>
                <li>
                    <Image src={image3} width={250} height={250} alt="Image3" />
                </li>
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                <li>
                    <Image src={image1} width={250} height={250} alt="Image1" />
                </li>
                <li>
                    <Image src={image2} width={250} height={250} alt="Image2" />
                </li>
                <li>
                    <Image src={image3} width={250} height={250} alt="Image3" />
                </li>
                <li>
                    <Image src={image1} width={250} height={250} alt="Image1" />
                </li>
                <li>
                    <Image src={image2} width={250} height={250} alt="Image2" />
                </li>
                <li>
                    <Image src={image3} width={250} height={150} alt="Image3" />
                </li>
            </ul>

        </div>
    );
}
export default slider;
