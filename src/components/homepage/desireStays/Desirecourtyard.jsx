"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import { FaUserFriends, FaBed, FaBath, FaWifi, FaTv, FaCar, FaUtensils } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const courtyards = [
    {
        id: "1.0",
        title: "Courtyard 1.0",
        images: [
            "/courtyard/sec.jpg",
            "/courtyard/third.jpg",
            "/banner/newbanner.jpeg",
            "/courtyard/barthboom.jpeg",
            "/courtyard/room.jpeg",
            "/courtyard/room1.jpeg",
            "/courtyard/ten.jpeg",
            "/courtyard/fifth.jpg",
            "/courtyard/sixth.jpeg",
            "/courtyard/seventh.jpg",
            "/courtyard/nine.jpg",
        ],
        fits: "8–10 Guests",
        bedrooms: 3,
        bathrooms: 2,
        price: "₹8,000",
        description:
            "Three thoughtfully designed bedrooms, a well-equipped kitchen, and a charming vibrant lounge for small gatherings.",
        amenities: ["Wifi", "Kitchen", "Dedicated workspace", "Free parking", "TV", "Air conditioning"],
        link: "https://www.airbnb.co.in/rooms/1116734850148809886",
    },
    {
        id: "2.0",
        title: "Courtyard 2.0",
        images: [
            "/courtyard/sec.jpg",
            "/courtyard/third.jpg",
            "/courtyard/barthboom.jpeg",
            "/courtyard/room.jpeg",
            "/courtyard/room1.jpeg",
            "/courtyard/ten.jpeg",
            "/courtyard/fifth.jpg",
            "/courtyard/sixth.jpeg",
            "/courtyard/seventh.jpg",
            "/courtyard/nine.jpg",
        ],
        fits: "4 guests per room",
        bedrooms: 3,
        bathrooms: 3,
        price: "₹3,000 / room",
        description:
            "Two large bedrooms with 7ft beds, one cozy king-size bedroom — all with attached bathrooms for privacy & comfort.",
        amenities: ["Wifi", "Kitchen", "Dedicated workspace", "Free parking", "TV", "Air conditioning"],
        link: "https://www.airbnb.co.in/rooms/1116734850148809886",
    },
    {
        id: "3.0",
        title: "Courtyard 3.0",
        images: [
             "/courtyard/sec.jpg",
            "/courtyard/third.jpg",
            "/courtyard/barthboom.jpeg",
            "/courtyard/room.jpeg",
            "/courtyard/room1.jpeg",
            "/courtyard/ten.jpeg",
            "/courtyard/fifth.jpg",
            "/courtyard/sixth.jpeg",
            "/courtyard/seventh.jpg",
            "/courtyard/nine.jpg",
        ],
        fits: "Up to 15 Guests",
        bedrooms: 1,
        bathrooms: 1,
        price: "₹10,500",
        description:
            "High-energy party hall with ambient lighting, Smart TV & speakers. Perfect for parties, birthdays, and more! Decoration, catering & hookah available at extra cost.",
        amenities: ["Wifi", "Kitchen", "Smart TV", "Speakers", "Catering (extra)", "Hookah (extra)"],
        link: "https://www.airbnb.co.in/rooms/1116734850148809886",
    },
    {
        id: "4.0",
        title: "Courtyard 4.0",
        images: [
           "/courtyard/sec.jpg",
            "/courtyard/third.jpg",
            "/courtyard/barthboom.jpeg",
            "/courtyard/room.jpeg",
            "/courtyard/room1.jpeg",
            "/courtyard/ten.jpeg",
            "/courtyard/fifth.jpg",
            "/courtyard/sixth.jpeg",
            "/courtyard/seventh.jpg",
            "/courtyard/nine.jpg",
        ],
        fits: "Up to 15 Guests",
        bedrooms: 2,
        bathrooms: 2,
        price: "₹12,500",
        description:
            "Unique space with two bedrooms, cozy living area & open terrace — great for stargazing parties. Decoration, catering & hookah available at extra cost.",
        amenities: ["Wifi", "Kitchen", "Open Terrace", "Free parking", "Air conditioning", "Hookah (extra)"],
        link: "https://www.airbnb.co.in/rooms/1116734850148809886",
    },
];

const getAmenityIcon = (amen) => {
    const a = amen.toLowerCase();
    if (a.includes("wifi")) return <FaWifi />;
    if (a.includes("tv")) return <FaTv />;
    if (a.includes("parking")) return <FaCar />;
    if (a.includes("workspace")) return <MdWork />;
    if (a.includes("kitchen")) return <FaUtensils />;
    return null;
};

export default function Desirecourtyard() {
    const [active, setActive] = useState(courtyards[0]);

    return (
        <div className="bg-white shadow-md overflow-hidden flex flex-col md:flex-row md:px-12 lg:px-20 lg:py-5 items-center">

            {/* CONTENT: left carousel, right info */}

            {/* LEFT - Carousel */}
            <div className="w-full md:w-2/5 relative px-5">
                <div className="rounded-2xl overflow-hidden">
                    <Carousel
                        autoPlay
                        infiniteLoop
                        showThumbs={false}
                        showStatus={false}
                        interval={3000}
                        swipeable={false}
                        emulateTouch={false}
                        stopOnHover={false}
                        useKeyboardArrows
                    >
                        {active.images.map((src, idx) => (
                            <div key={idx} className="relative w-full h-[360px] sm:h-[420px]">
                                <Image
                                    src={src}
                                    alt={`${active.title} image ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                    priority={idx === 0}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>

            {/* RIGHT - Info */}
            <div className="p-6 flex flex-col justify-between w-full md:w-3/5">

                {/* STATIC MAIN TITLE */}
                <div className="">
                    <h1 className="text-2xl font-bold text-[#111827]">Desire Courtyard</h1>
                    <p className="text-gray-500">New Delhi</p>
                </div>

                {/* TABS / BUTTONS */}
                <div className="flex flex-wrap gap-3 pt-2 pb-3">
                    {courtyards.map((c) => (
                        <button
                            key={c.id}
                            onClick={() => setActive(c)}
                            aria-pressed={active.id === c.id}
                            className={`px-3 py-1 rounded-full border-2 text-sm font-medium transition cursor-pointer ${active.id === c.id
                                ? "bg-[#9b4a2d] text-white border-[#9b4a2d]"
                                : "text-[#9b4a2d] border-[#9b4a2d] hover:bg-[#9b4a2d] hover:text-white"
                                }`}
                        >
                            {c.title}
                        </button>
                    ))}
                </div>


                {/* small active title (optional) */}
                <h2 className="text-2xl font-semibold text-gray-900">{active.title}</h2>

                {/* Icons row: Guests / Bedrooms / Bathrooms */}
                <div className="flex flex-wrap items-center gap-6 mt-2 text-gray-700 text-sm">
                    <div className="flex items-center gap-2">
                        <FaUserFriends />
                        <span>{active.fits}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaBed />
                        <span>{active.bedrooms} Bedrooms</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaBath />
                        <span>{active.bathrooms} Bathrooms</span>
                    </div>
                </div>

                {/* Price */}
                <div className="mt-4 text-xl font-bold text-gray-900">
                    ₹{active.price.replace(/[^0-9,.-]/g, "")?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    <span className="text-sm font-normal">/ night</span>
                </div>

                {/* Description */}
                <p className="mt-3 text-gray-700">{active.description}</p>

                {/* AMENITIES */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {active.amenities.map((amen, i) => (
                        <span
                            key={i}
                            className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                        >
                            {getAmenityIcon(amen)}
                            <span>{amen}</span>
                        </span>
                    ))}
                </div>

                {/* Book Now */}
                <div className="mt-3">
                    <Link
                        href={active.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer dark:text-black font-semibold text-sm px-6 py-2 rounded-xl border-2 mt-2 border-[#9b4a2d] transition duration-300 hover:scale-105 hover:bg-gray-300 hover:text-[#9b4a2d]"
                    >
                        Book Now
                    </Link>
                </div>
            </div>

        </div>
    );
}
