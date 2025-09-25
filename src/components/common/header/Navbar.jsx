import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white dark:bg-white shadow-md z-50 transition-colors duration-300">
            <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-3 gap-3 md:gap-6">

                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo/newdesirelogo.png"
                        alt="Desire Stays Logo"
                        width={250}
                        height={150}
                        priority
                        className="object-contain max-h-[80px] md:max-h-[120px] w-auto"
                    />
                </Link>

                {/* Contact Info */}
                <div className="flex flex-col md:flex-row items-center md:gap-6 gap-3 text-sm md:text-base text-gray-800 dark:text-gray-200">

                    {/* Phone Numbers */}
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-gray-700 dark:text-black" />
                        <Link
                            href="tel:9990709172"
                            className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-black"
                        >
                            9990709172
                        </Link>
                        <span className="hidden md:inline dark:text-black">,</span>
                        <Link
                            href="tel:9990909172"
                            className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-black"
                        >
                            9990909172
                        </Link>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-gray-700 dark:text-black" />
                        <Link
                            href="mailto:desireventss@gmail.com"
                            className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-black"
                        >
                            desireventss@gmail.com
                        </Link>
                    </div>

                    {/* Instagram */}
                    <Link
                        href="https://www.instagram.com/desires_co_in?igsh=MTB5MXFzeWVjNDQ4ZQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-600 dark:hover:text-pink-400"
                    >
                        <FaInstagram className="text-pink-600 dark:text-pink-400 text-lg" />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
