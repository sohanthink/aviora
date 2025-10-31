"use client"

import Image from 'next/image'
import React from 'react'

import bannerImage from '../public/images/banner.png'
import Link from 'next/link'
import { MdOutlineMailOutline, MdCheckCircle } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";


const Banner = () => {
    const handleScrollToFeatures = (e) => {
        e.preventDefault();
        const element = document.getElementById('features');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className='container mx-auto flex flex-col-reverse md:flex-row gap-10 md:gap-20 items-center justify-between p-4 h-auto md:h-[80vh]'>
            <div className='space-y-6 text-center md:text-left'>
                <div className='flex flex-wrap gap-2 justify-center md:justify-start mb-2'>
                    <span className='px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold border border-primary/30 animate-pulse'>
                        Custom Built
                    </span>
                    <span className='px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold border border-primary/30'>
                        Under Development
                    </span>
                    <span className='px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold border border-primary/30'>
                        24/7 Support
                    </span>
                </div>
                <h1 className='text-[40px] md:text-[70px] text-white font-bold leading-tight md:leading-20 font-display'>
                    <span className='text-primary'>Bespoke</span> Nursing Care Management System - <span className='text-primary'>Built YOUR Way</span>
                </h1>
                <h3 className='text-[18px] md:text-[22px] text-white font-light font-secondary'>
                    <span className='font-bold'>Fully customizable</span> all-in-one solution: <span className='font-bold'>Website + Management Portal + Mobile App.</span> Complete system with <span className='font-bold'>attendance tracking, care plans, appointments, forms,</span> and <span className='font-bold'>client management.</span> Tell us what you need, we'll build it.
                </h3>
                <div className='gap-3 md:gap-5 flex flex-col md:flex-row justify-center md:justify-start'>
                    <Link
                        href="https://wa.me/message/3V4KLRGQ6IBEP1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors duration-300 justify-center"
                    >
                        <RiWhatsappLine className="text-xl" />
                        Book Free Consultation
                    </Link>
                    <button
                        onClick={handleScrollToFeatures}
                        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1d1e37] px-8 py-3 rounded-lg font-bold transition-colors duration-300"
                    >
                        See How It Works
                    </button>
                </div>
                <div className='flex flex-wrap gap-4 text-sm text-gray-300 justify-center md:justify-start pt-2'>
                    <div className='flex items-center gap-2'>
                        <MdCheckCircle className='text-primary text-lg' />
                        <span>Website + Portal Setup Included</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <MdCheckCircle className='text-primary text-lg' />
                        <span>Mobile App Access (Central App)</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <MdCheckCircle className='text-primary text-lg' />
                        <span>Fully Customizable</span>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-auto flex justify-center'>
                <Image src={bannerImage} alt='Banner Image' width={1000} className='max-w-full h-auto' />
            </div>
        </div>
    )
}

export default Banner