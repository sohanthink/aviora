"use client"

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import logo from '../public/images/logowhite.png';
import Link from 'next/link';
import { RiWhatsappLine } from "react-icons/ri";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'solutions', label: 'Solutions', href: '#solutions' },
        { id: 'services', label: 'Services & Support', href: '#services' },
        { id: 'why', label: 'Why Aviora?', href: '#why' },
    ];

    return (
        <nav className={`w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm py-2 shadow-lg' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Logo */}
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

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    <ul className="flex gap-8 font-medium">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={item.href}
                                    className="text-white text-sm hover:text-green-400 transition-colors duration-200"
                                    aria-label={item.label}
                                >
                                    {item.label}
                                </a>
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
                                    <a
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-white hover:text-green-400 transition-colors duration-200 py-2 block"
                                    >
                                        {item.label}
                                    </a>
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