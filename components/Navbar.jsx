"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../public/images/logowhite.png';
import Link from 'next/link';
import { RiWhatsappLine } from "react-icons/ri";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="container mx-auto flex justify-between items-center p-4 text-white font-secondary">
            <div className="text-xl font-bold">
                <Image src={logo} alt="logo" width={150} />
            </div>
            <div className="hidden md:flex gap-14 font-medium">
                <a href="#home" className="text-white hover:underline">Solution</a>
                <a href="#about" className="text-white hover:underline">Services & Support</a>
                <a href="#contact" className="text-white hover:underline">Why aviora?</a>
            </div>

            <Link
                href="https://wa.me/message/3V4KLRGQ6IBEP1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2 "
            >
                <RiWhatsappLine />WhatsApp
            </Link>

            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
                    {isOpen ? '✖' : '☰'}
                </button>
            </div>
            {
                isOpen && (
                    <div className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center gap-4 p-4 md:hidden">
                        <a href="#home" className="text-white hover:underline">Solution</a>
                        <a href="#about" className="text-white hover:underline">Services & Support</a>
                        <a href="#contact" className="text-white hover:underline">Why aviora?</a>
                        <Link className="btn-primary" href="#">
                            Sign Up
                        </Link>
                    </div>
                )
            }
        </nav >
    );
};

export default Navbar;
