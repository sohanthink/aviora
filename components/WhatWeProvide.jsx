import React from 'react';
import { FaClipboard, FaUserFriends, FaFileAlt, FaHandshake } from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';
import provideimg from '@/public/images/whatweprovide.png';
import Image from 'next/image';
import Link from 'next/link';
import { RiWhatsappLine } from "react-icons/ri";

const features = [
    {
        icon: <FaClipboard className="text-white text-3xl sm:text-4xl" />,
        bgColor: 'bg-[#A0444A]',
        shadowColor: 'bg-[#EA595526]',
        title: 'Manual Paperwork & lost documents?',
    },
    {
        icon: <FaUserFriends className="text-white text-3xl sm:text-4xl" />,
        bgColor: 'bg-[#265A93]',
        shadowColor: 'bg-[#2B7BC726]',
        title: 'Difficulty Assigning Clients to Nurses?',
    },
    {
        icon: <FaFileAlt className="text-white text-3xl sm:text-4xl" />,
        bgColor: 'bg-[#4C8A2F]',
        shadowColor: 'bg-[#67C72B26]',
        title: 'No Central System for Client Profiles & Forms?',
    },
    {
        icon: <FaHandshake className="text-white text-3xl sm:text-4xl" />,
        bgColor: 'bg-[#A7763D]',
        shadowColor: 'bg-[#F4A74126]',
        title: 'Scheduling chaos Between Employees & clients?',
    },
];

const WhatWeProvide = () => {
    return (
        <section className="py-16 pb-12 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center relative flex flex-col items-center justify-center">
                <h1 className="text-[32px] sm:text-[40px] md:text-[56px] text-white font-bold leading-tight md:leading-[70px] font-display mb-4">
                    All-in-One Solution
                </h1>
                <p className="text-[16px] sm:text-[18px] md:text-[22px] text-gray-300 font-light font-secondary mb-8 sm:mb-12">
                    Managing Care <span className="font-bold">Shouldn't Be Complicated.</span> Get your <span className="font-bold">website + management portal</span> in one seamless, <span className="font-bold">fully bespoke</span> package.
                </p>

                <div className='flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-8 space-y-6 md:space-y-0 mb-12 max-w-5xl bg-gradient-to-br from-[#E4E4E40D] to-[#E4E4E405] border border-primary/20 p-8 md:p-12 z-50 rounded-xl shadow-lg'>
                    <div className='md:w-1/2 w-full flex justify-center'>
                        <Image src={provideimg} alt="Website and Portal Integration" width={700} className="rounded-lg" />
                    </div>
                    <div className='text-white flex items-start flex-col space-y-4 md:w-1/2 w-full'>
                        <span className="bg-primary px-3 py-1.5 text-sm rounded-full inline-block text-start font-semibold">Included in Every Package</span>
                        <h1 className='text-start font-primary font-bold text-[28px] md:text-[32px] leading-tight'>Your Website + Management Portal in One Place</h1>
                        <p className='text-start font-secondary font-light text-[12px] md:text-[16px] leading-relaxed'>
                            Get a <span className="font-bold">professional, fully-branded website</span> (domain.com) and your <span className="font-bold">complete management portal</span> (domain.com/login) all in one integrated solution. We handle everything from design to deployment.
                        </p>
                        <div className='space-y-2 w-full'>
                            <div className='flex items-center gap-2 text-gray-300'>
                                <MdCheckCircle className='text-primary flex-shrink-0' />
                                <span className='font-light text-sm md:text-base'>Professional website with your branding</span>
                            </div>
                            <div className='flex items-center gap-2 text-gray-300'>
                                <MdCheckCircle className='text-primary flex-shrink-0' />
                                <span className='font-light text-sm md:text-base'>Integrated admin dashboard portal</span>
                            </div>
                            <div className='flex items-center gap-2 text-gray-300'>
                                <MdCheckCircle className='text-primary flex-shrink-0' />
                                <span className='font-light text-sm md:text-base'>Fully bespoke and customizable</span>
                            </div>
                            <div className='flex items-center gap-2 text-gray-300'>
                                <MdCheckCircle className='text-primary flex-shrink-0' />
                                <span className='font-light text-sm md:text-base'>Complete setup and deployment included</span>
                            </div>
                        </div>
                        {/* <Link
                            href="https://wa.me/message/3V4KLRGQ6IBEP1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 transition-colors duration-300 mt-4"
                        >
                            <RiWhatsappLine className="text-lg" />
                            Learn More
                        </Link> */}
                    </div>
                </div>

                <div className="hidden md:block absolute top-[85%] left-[9%] border-dashed border-1 border-white w-[82%] z-0"></div>

                <div
                    className="hidden md:block absolute top-[80%] left-1/2 border-dashed border border-white w-[2px] h-[11%] z-0 transform -translate-x-1/2 -translate-y-1/2"
                ></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center space-y-4 relative text-center">
                            <div className={`${feature.bgColor} p-5 sm:p-6 rounded-full z-50 mx-auto`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-[16px] sm:text-[18px] md:text-[20px] text-white font-bold z-50">
                                {feature.title}
                            </h3>
                            <div className={`w-30 h-30 md:w-50 md:h-50 absolute top-7 left-1/2 md:left-28 transform -translate-x-1/2 ${feature.shadowColor} rounded-full`}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeProvide;
