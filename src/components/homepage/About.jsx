"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const About = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full px-6 md:px-12 lg:px-20 py-5 lg:gap-10 items-center">

            {/* Left - Carousel (small devices upar, lg pe left) */}
            <div className="banner-carousel relative rounded-2xl overflow-hidden shadow-lg order-1 lg:order-1"
            style={{ touchAction: "pan-y" }}
            >
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
                    {["/about/aboutimg1.avif", "/about/aboutimg2.avif", "/about/aboutimg3.avif"].map(
                        (src, index) => (
                            <div
                                key={index}
                                className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden"
                            >
                                <Image
                                    src={src}
                                    alt={`About ${index + 1}`}
                                    fill
                                    priority
                                    className="object-cover rounded-2xl"
                                />
                            </div>
                        )
                    )}
                </Carousel>
            </div>

            {/* Right - Text (small devices niche, lg pe right) */}
            <div className="p-6 flex flex-col justify-center text-center lg:text-left order-2 lg:order-2">
                <h2
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-black"
                    style={{ fontFamily: "Playfair Display, serif" }}
                >
                    About Us
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed lg:text-justify mt-4">
                    Welcome to Desire Stays, where every stay transforms into a memorable experience. We specialize in offering premium vacation rentals and luxury properties that combine comfort, elegance, and modern amenities. Whether you’re planning a romantic getaway, a family vacation, or a solo retreat, our curated stays provide the perfect blend of style and convenience. At Desire Stays, your comfort is our priority, and every detail is designed to make you feel at home only better.
                </p>
            </div>
        </div>
    );
};

export default About;
