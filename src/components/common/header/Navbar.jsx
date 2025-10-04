import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-colors duration-300">
            <div className="w-full flex flex-col md:flex-row items-center md:items-center justify-between px-4 md:px-10 py-2">

                {/* Logo */}
                <Link href="/" className="flex justify-center md:justify-start items-center">
                    <Image
                        src="/logo/newdesirelogo.png"
                        alt="Desire Stays Logo"
                        width={220}
                        height={140}
                        priority
                        className="object-contain max-h-[80px] md:max-h-[100px] w-auto"
                    />
                </Link>

                {/* Desktop / Tablet View */}
                <div className="hidden md:flex items-start gap-10 text-sm md:text-base text-gray-800">
                    {/* Phone + WhatsApp */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt className="text-gray-700" />
                            <Link href="tel:+919990909172" className="hover:text-blue-600">
                               +91 9990909172
                            </Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaWhatsapp className="text-green-600" />
                            <Link
                                href="https://wa.me/+919990709172"
                                target="_blank"
                                className="hover:text-green-600"
                            >
                               +91 9990709172
                            </Link>
                        </div>
                    </div>

                    {/* Email + Instagram */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <FaEnvelope className="text-gray-700" />
                            <Link href="mailto:desireventss@gmail.com" className="hover:text-blue-600">
                                desireventss@gmail.com
                            </Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaInstagram className="text-pink-600" />
                            <Link
                                href="https://www.instagram.com/desires_co_in?igsh=MTB5MXFzeWVjNDQ4ZQ=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-600"
                            >
                                desires_co_in
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mobile View (<768px) */}
                <div className="flex md:hidden justify-center gap-6 mt-3 text-xl text-gray-700">
                    <Link href="tel:+919990909172" className="hover:text-blue-600">
                        <FaPhoneAlt />
                    </Link>
                    <Link href="https://wa.me/9990709172" target="_blank" className="hover:text-green-600">
                        <FaWhatsapp />
                    </Link>
                    <Link href="mailto:desireventss@gmail.com" className="hover:text-blue-600">
                        <FaEnvelope />
                    </Link>
                    <Link
                        href="https://www.instagram.com/desires_co_in?igsh=MTB5MXFzeWVjNDQ4ZQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-600"
                    >
                        <FaInstagram />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
