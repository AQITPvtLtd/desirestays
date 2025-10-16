"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { GrPrevious, GrNext } from "react-icons/gr";

// ⬅️ Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
    <button
        aria-label="Previous slide"
        onClick={onClick}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 text-black p-2 rounded-full shadow-md z-20 hover:bg-white transition-all duration-200"
    >
        <GrPrevious className="text-lg sm:text-xl" />
    </button>
);

// ➡️ Custom Next Arrow
const NextArrow = ({ onClick }) => (
    <button
        aria-label="Next slide"
        onClick={onClick}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 text-black p-2 rounded-full shadow-md z-20 hover:bg-white transition-all duration-200"
    >
        <GrNext className="text-lg sm:text-xl" />
    </button>
);

const About = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false, // 🔹 Dots removed
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: false,
        adaptiveHeight: false,
        swipeable: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false, // Hide arrows on mobile
                },
            },
        ],
    };

    useEffect(() => {
        if (sliderRef.current?.slickPlay) {
            sliderRef.current.slickPlay();
        }
    }, []);

    const images = [
        // Desire Courtyard
        "/banner/banner/courtyardimg1.jpeg",
        "/banner/banner/courtyardimg2.jpeg",
        "/banner/banner/courtyardimg3.jpeg",
        "/banner/banner/courtyardimg4.jpeg",

        // Desire Penthouse
        "/banner/banner/penthouseimg1.jpg",
        "/banner/banner/penthouseimg2.jpg",
        "/banner/banner/penthouseimg3.jpg",
        "/banner/banner/penthouseimg4.jpg",

        // Dream Desire
        "/banner/banner/dreamdesireimg1.jpg",
        "/banner/banner/dreamdesireimg2.jpg",
        "/banner/banner/dreamdesireimg3.jpg",
        "/banner/banner/dreamdesireimg4.jpg",
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full px-6 md:px-12 lg:px-20 lg:gap-10 items-center py-8">
            {/* LEFT: Slider Section */}
            <div className="relative lg:block hidden">
                <div className="relative w-full">
                    <Slider ref={sliderRef} {...settings}>
                        {images.map((src, idx) => (
                            <div key={idx} className="relative w-full h-[250px] sm:h-[350px] md:h-[480px] lg:h-[550px]">
                                <Image
                                    src={src}
                                    alt={`About Section Image ${idx + 1}`}
                                    fill
                                    className="object-cover rounded-lg"
                                    sizes="100vw"
                                    priority={idx === 0}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* RIGHT: Text Section */}
            <div className="p-6 flex flex-col justify-center text-center lg:text-left">
                <h2
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-black"
                    style={{ fontFamily: "Playfair Display, serif" }}
                >
                    About Us
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed lg:text-justify mt-4">
                    Welcome to <span className="font-semibold">Desire Stays</span>, where every stay transforms into a memorable
                    experience. We specialize in offering premium vacation rentals and luxury properties that combine comfort,
                    elegance, and modern amenities. Whether you’re planning a romantic getaway, a family vacation, or a solo
                    retreat, our curated stays provide the perfect blend of style and convenience. At Desire Stays, your comfort
                    is our priority, and every detail is designed to make you feel at home — only better.
                </p>
            </div>
        </div>
    );
};

export default About;
