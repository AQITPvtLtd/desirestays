"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { GrPrevious, GrNext } from "react-icons/gr";

/* ⬅️ Previous Arrow */
const PrevArrow = ({ onClick }) => (
    <button
        aria-label="Previous slide"
        onClick={onClick}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 flex items-center justify-center"
    >
        <GrPrevious className="text-xl sm:text-2xl" />
    </button>
);

/* ➡️ Next Arrow */
const NextArrow = ({ onClick }) => (
    <button
        aria-label="Next slide"
        onClick={onClick}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 flex items-center justify-center"
    >
        <GrNext className="text-xl sm:text-2xl" />
    </button>
);

const Banner = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false, // dots removed
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        swipe: true,
        draggable: true,
    };

    useEffect(() => {
        if (sliderRef.current && typeof sliderRef.current.slickPlay === "function") {
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

    // Helper to return label text
    const getLabel = (index) => {
        if (index < 4) return "Desire Courtyard";
        if (index < 8) return "Desire Penthouse";
        return "Dream Desire";
    };

    return (
        <div className="relative overflow-hidden">
            <Slider ref={sliderRef} {...settings}>
                {images.map((src, idx) => (
                    <div key={idx} className="w-full h-full relative">
                        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[580px]">
                            <Image
                                src={src}
                                alt={`Banner ${idx + 1}`}
                                fill
                                sizes="100vw"
                                className="object-cover"
                                priority={idx === 0}
                            />

                            {/* Overlay Label */}
                            <div className="absolute bottom-6 left-6 bg-black/60 text-white px-4 py-2 rounded-lg text-sm sm:text-base font-medium backdrop-blur-sm">
                                {getLabel(idx)}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Manual navigation buttons */}
            <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
            <NextArrow onClick={() => sliderRef.current?.slickNext()} />
        </div>
    );
};

export default Banner;
