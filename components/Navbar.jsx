"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../public/images/logowhite.png';
import Link from 'next/link';
import { RiWhatsappLine } from "react-icons/ri";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { id: 'pricing', label: 'Pricing', href: '#pricing' },
        { id: 'features', label: 'Features', href: '#features' },
        { id: 'why', label: 'Why Aviora?', href: '#why' },
    ];

    const handleNavClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        setIsOpen(false);
    };

    return (
        <nav className='w-full z-50 transition-all duration-300'>
            <div className="container mx-auto flex justify-between items-center px-4 py-4">

                <Link href="/" className="z-50">
                    <Image
                        src={logo}
                        alt="Aviora Logo"
                        width={150}
                        height={40}
                        priority
                        className="hover:opacity-90 transition-opacity"
                    />
                </Link>


                <div className="hidden md:flex items-center justify-center gap-10">
                    <ul className="flex gap-8">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.id)}
                                    className="text-white text-sm hover:text-green-400 duration-300 transition-all cursor-pointer"
                                    aria-label={item.label}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="https://wa.me/message/3V4KLRGQ6IBEP1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200"
                        aria-label="Contact us on WhatsApp"
                    >
                        <RiWhatsappLine className="text-lg" />
                        WhatsApp
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-50 p-2 text-white focus:outline-none"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                {/* Mobile Menu - Full Screen */}
                {isOpen && (
                    <div className="fixed inset-0 h-screen w-full bg-gray-900/95 backdrop-blur-md z-40 flex flex-col items-center justify-center">
                        <ul className="flex flex-col items-center gap-8 text-xl">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.id)}
                                        className="text-white text-sm hover:text-green-400 transition-colors duration-200 block cursor-pointer"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="https://wa.me/message/3V4KLRGQ6IBEP1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 text-lg transition-colors duration-200"
                        >
                            <RiWhatsappLine />
                            WhatsApp
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;