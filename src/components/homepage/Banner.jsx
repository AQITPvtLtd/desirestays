"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { GrPrevious, GrNext } from "react-icons/gr";

/* Custom arrow components (react-slick will pass className/style/onClick) */
const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <button
            aria-label="Previous slide"
            className={`${className} !flex !items-center !justify-center bg-white/80 rounded-full p-2 shadow-md`}
            style={{ ...style, zIndex: 2 }}
            onClick={onClick}
        >
            <GrPrevious />
        </button>
    );
};

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <button
            aria-label="Next slide"
            className={`${className} !flex !items-center !justify-center bg-white/80 rounded-full p-2 shadow-md`}
            style={{ ...style, zIndex: 2 }}
            onClick={onClick}
        >
            <GrNext />
        </button>
    );
};

const Banner = () => {
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
        swipeable: false,
        emulateTouch: false,
        stopOnHover: false,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                    arrows: false, // hide arrows on small screens
                },
            },
        ],
    };

    useEffect(() => {
        // start autoplay if slider instance exists
        if (sliderRef.current && typeof sliderRef.current.slickPlay === "function") {
            sliderRef.current.slickPlay();
        }
    }, []);

    const images = [
        "/banner/banner1.png",
        "/banner/banner2.jpeg",
        "/banner/banner3.jpeg",
        "/banner/banner4.jpeg",
        "/banner/banner5.jpeg",
        "/banner/banner6.jpeg",
        "/banner/newbanner.jpeg",
        "/banner/banner8.jpeg",
    ];

    return (
        <div className="relative overflow-hidden">
            <Slider ref={sliderRef} {...settings}>
                {images.map((src, idx) => (
                    <div key={`${src}-${idx}`} className="w-full h-full">
                        {/* parent must be relative when using Image fill */}
                        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[580px]">
                            <Image
                                src={src}
                                alt={`Banner ${idx + 1}`}
                                fill
                                sizes="100vw"
                                className="object-cover"
                                priority={idx === 0}
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;
