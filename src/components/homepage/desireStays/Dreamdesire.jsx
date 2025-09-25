"use client";

import React from "react";
import Image from "next/image";
import { FaUserFriends, FaBed, FaBath, FaWifi, FaTv, FaCar, FaUtensils } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";

const Dreamdesire = () => {
    const images = [
        "/dreamdesire/img1.avif",
        "/dreamdesire/img2.avif",
        "/dreamdesire/img3.avif",
    ];

    const title = "Dream Desire";
    const location = "New Delhi";
    const pricePerNight = 10500;
    const guests = 3;
    const bedrooms = 1;
    const bathrooms = 1;
    const rooms = 1;

    const amenities = ["Wifi", "Dedicated workspace", "Free parking", "TV", "Air conditioning", "Kitchen"];

    const getAmenityIcon = (amen) => {
        if (amen.toLowerCase().includes("wifi")) return <FaWifi />;
        if (amen.toLowerCase().includes("tv")) return <FaTv />;
        if (amen.toLowerCase().includes("parking")) return <FaCar />;
        if (amen.toLowerCase().includes("workspace")) return <MdWork />;
        if (amen.toLowerCase().includes("kitchen")) return <FaUtensils />;
        return null;
    };

    return (
        <div className="bg-white shadow-md overflow-hidden flex flex-col md:flex-row md:px-12 lg:px-20 py-5 items-center">
            {/* LEFT: Image / Carousel */}
            <div className="w-full md:w-2/5 relative rounded-2xl px-5"
                style={{ touchAction: "pan-y" }}
            >
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    interval={4000}
                    swipeable
                    emulateTouch
                    stopOnHover
                    useKeyboardArrows
                >
                    {images.map((src, idx) => (
                        <div key={idx} className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[350px] rounded-2xl">
                            <Image
                                src={src}
                                alt={`${title} image ${idx + 1}`}
                                fill
                                className="object-cover rounded-2xl"
                                priority={idx === 0}
                            />
                        </div>
                    ))}
                </Carousel>

                {/* Heart / Favorite */}
                {/* <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:scale-105 transition z-10">
                               <AiFillHeart className="text-gray-600 text-xl" />
                           </button> */}


            </div>

            {/* RIGHT: Info */}
            <div className="p-6 flex flex-col justify-between w-full md:w-1/2">
                <div>
                    <h2 className="text-2xl font-semibold mt-2 dark:text-black">{title}</h2>
                    <p className="text-gray-500">{location}</p>

                    <div className="flex flex-wrap items-center gap-4 mt-4 text-gray-700 text-sm">
                        <div className="flex items-center gap-1">
                            <FaUserFriends /> <span>{guests} Guests</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaBed /> <span>{bedrooms} Bedroom</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaBath /> <span>{bathrooms} Bathroom</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaUtensils /> <span>{rooms} Room</span>
                        </div>
                    </div>

                    <div className="mt-4 text-xl font-semibold text-gray-900">
                        ₹{pricePerNight.toLocaleString()}{" "}
                        <span className="text-sm font-normal">/ night</span>
                    </div>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-2 mt-5">
                        {amenities.map((amen, idx) => (
                            <span
                                key={idx}
                                className="flex items-center dark:text-black gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm"
                            >
                                {getAmenityIcon(amen)}
                                <span>{amen}</span>
                            </span>
                        ))}
                    </div>

                    <div className="mt-4">
                        <Link
                            className="cursor-pointer dark:text-black font-semibold text-sm px-6 py-2 rounded-xl border-2 mt-2 border-[#9b4a2d] transition duration-300 hover:scale-105 hover:bg-gray-300 hover:text-[#9b4a2d]"
                            href="https://www.airbnb.co.in/rooms/1220828342541295558?guests=1&adults=1&s=39&unique_share_id=a9afef2b-b375-453a-a853-19d84debf56a"
                            target="_blank"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dreamdesire