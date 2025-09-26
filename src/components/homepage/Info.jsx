import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon

const Info = () => {
    return (
        <div className="space-y-2 text-center">
            {/* Logo */}
            <div className="flex justify-center">
                <Image
                    src="/logo/desirelogo.png"
                    alt="Desire Logo"
                    width={250}
                    height={150}
                    priority
                    className="object-contain max-h-[100px] md:max-h-[140px] w-auto"
                />
            </div>

            {/* Phone Numbers */}
            <div className="flex flex-col items-center gap-2 text-gray-800">
                {/* Call */}
                <div className="flex items-center gap-2">
                    <FaPhoneAlt className="text-gray-700" />
                    <Link href="tel:9990709172" className="hover:text-blue-600">
                        9990709172
                    </Link>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-2">
                    <FaWhatsapp className="text-green-600" />
                    <Link
                        href="https://wa.me/9990909172"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600"
                    >
                        9990909172
                    </Link>
                </div>
            </div>

            {/* Email */}
            <div className="flex justify-center items-center gap-2 text-gray-800">
                <FaEnvelope className="text-gray-700" />
                <Link
                    href="mailto:desireventss@gmail.com"
                    className="hover:text-blue-600 break-words"
                >
                    desireventss@gmail.com
                </Link>
            </div>
            <div className="flex justify-center items-center gap-2 text-gray-800">
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
    );
};

export default Info;
