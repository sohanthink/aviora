import React from 'react';
import { FaClipboard, FaUserFriends, FaFileAlt, FaHandshake } from 'react-icons/fa';

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
        <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center relative">
                <h1 className="text-[32px] sm:text-[40px] md:text-[56px] text-white font-bold leading-tight md:leading-[70px] font-display mb-4">
                    What We Provide
                </h1>
                <p className="text-[16px] sm:text-[18px] md:text-[22px] text-gray-300 font-light font-secondary mb-8 sm:mb-12">
                    Managing Care <span className="font-bold">Shouldn't Be Complicated.</span>
                </p>

                <div className="hidden md:block absolute top-[211px] left-[9%] border-dashed border-1 border-white w-[82%] z-0"></div>

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
