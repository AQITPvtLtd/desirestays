"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { GrPrevious, GrNext } from "react-icons/gr";

// Custom arrows positioned manually
const PrevArrow = ({ onClick }) => (
    <button
        aria-label="Previous slide"
        onClick={onClick}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 text-black p-2 rounded-full shadow-md z-20 hover:bg-white transition"
    >
        <GrPrevious size={20} />
    </button>
);

const NextArrow = ({ onClick }) => (
    <button
        aria-label="Next slide"
        onClick={onClick}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 text-black p-2 rounded-full shadow-md z-20 hover:bg-white transition"
    >
        <GrNext size={20} />
    </button>
);

const About = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        adaptiveHeight: false,
        swipeable: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                    arrows: false, // hide on small screens
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
        "/about/aboutimg1.avif",
        "/about/aboutimg2.avif",
        "/about/aboutimg3.avif",
        "/about/aboutimg4.jpeg",
        "/about/aboutimg5.jpeg",
        "/about/aboutimg6.jpeg",
        "/about/aboutimg7.jpeg",
        "/about/aboutimg8.jpeg",
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full px-6 md:px-12 lg:px-20 py-8 lg:gap-10 items-center">
            {/* Slider */}
            <div className="relative">
                <div className="relative w-full">
                    <Slider ref={sliderRef} {...settings}>
                        {images.map((src, idx) => (
                            <div key={idx} className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[580px]">
                                <Image
                                    src={src}
                                    alt={`Banner ${idx + 1}`}
                                    fill
                                    className="object-cover rounded-md"
                                    sizes="100vw"
                                    priority={idx === 0}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Text */}
            <div className="p-6 flex flex-col justify-center text-center lg:text-left order-1 lg:order-2">
                <h2
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-black"
                    style={{ fontFamily: "Playfair Display, serif" }}
                >
                    About Us
                </h2>
                <p className="text-black text-base md:text-lg leading-relaxed lg:text-justify mt-4">
                    Welcome to Desire Stays, where every stay transforms into a memorable experience. We specialize in offering
                    premium vacation rentals and luxury properties that combine comfort, elegance, and modern amenities. Whether
                    you’re planning a romantic getaway, a family vacation, or a solo retreat, our curated stays provide the
                    perfect blend of style and convenience. At Desire Stays, your comfort is our priority, and every detail is
                    designed to make you feel at home — only better.
                </p>
            </div>
        </div>
    );
};

export default About;
