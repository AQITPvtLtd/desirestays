import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Info = () => {
    return (
        <div className="space-y-4">
            {/* Logo */}
            <div className="flex justify-center md:justify-start">
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
            <div className="flex items-center gap-2 text-gray-800">
                <FaPhoneAlt className="text-gray-700" />
                <div className="flex flex-wrap gap-1">
                    <Link href="tel:9990709172" className="hover:text-blue-600">
                        9990709172
                    </Link>
                    <span className="hidden md:inline">,</span>
                    <Link href="tel:9990909172" className="hover:text-blue-600">
                        9990909172
                    </Link>
                </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 text-gray-800">
                <FaEnvelope className="text-gray-700" />
                <Link
                    href="mailto:desireventss@gmail.com"
                    className="hover:text-blue-600 break-words"
                >
                    desireventss@gmail.com
                </Link>
            </div>
        </div>
    );
};

export default Info;
