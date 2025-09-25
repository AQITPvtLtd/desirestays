import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-40">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">

                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo/desirelogo.png"
                        alt="Logo"
                        width={250}
                        height={150}
                        priority
                        className="object-contain max-h-[100px] md:max-h-[140px] w-auto"
                    />
                </Link>

                {/* Contact Info */}
                <div className="flex flex-col md:flex-row items-center md:gap-6 gap-2 text-sm md:text-base">

                    {/* Phone Numbers */}
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-gray-700" />
                        <Link href="tel:9990709172" className="hover:text-blue-600">
                            9990709172
                        </Link>
                        <span className="hidden md:inline">,</span>
                        <Link href="tel:9990909172" className="hover:text-blue-600">
                            9990909172
                        </Link>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-gray-700" />
                        <Link
                            href="mailto:desireventss@gmail.com"
                            className="hover:text-blue-600"
                        >
                            desireventss@gmail.com
                        </Link>
                    </div>

                    {/* Instagram */}

                    <Link
                        href="https://www.instagram.com/desires_co_in?igsh=MTB5MXFzeWVjNDQ4ZQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-600"
                    >
                        <FaInstagram className="text-pink-600 text-lg" />
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
