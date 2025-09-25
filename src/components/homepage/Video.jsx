"use client";
import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious, GrNext } from "react-icons/gr";
import { motion } from "framer-motion";

const videos = [
    "/videos/IMG_3352.MOV",
    "/videos/IMG_3353.MOV",
    "/videos/IMG_3368.MOV",
    "/videos/IMG_3476.MOV",
    "/videos/IMG_3478.MOV",
];

const CustomPrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="p-3 bg-white text-black rounded-full shadow hover:bg-gray-100 transition cursor-pointer"
    >
        <GrPrevious size={20} />
    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="p-3 bg-white text-black rounded-full shadow hover:bg-gray-100 transition cursor-pointer"
    >
        <GrNext size={20} />
    </button>
);

const Video = () => {
    const sliderRef = useRef(null);
    const playersRef = useRef([]);

    const pauseAllExcept = (current) => {
        playersRef.current.forEach((video) => {
            if (video && video !== current && !video.paused) {
                video.pause();
            }
        });
    };

    useEffect(() => {
        return () => {
            playersRef.current = [];
        };
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3, // Desktop default
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024, // Tablet
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 768, // Mobile
                settings: {
                    slidesToShow: 1,
                    centerMode: false,   // ✅ force disable centermode
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 220, // Extra small mobile
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: "0px",
                },
            },
        ],
    };


    return (
        <div className="py-10">
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-center text-black mb-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ fontFamily: "Roboto Slab, serif" }}
            >
                Luxury Living Spaces
            </motion.h2>

            <div className="relative px-4 max-w-7xl mx-auto">
                <Slider ref={sliderRef} {...settings}>
                    {videos.map((src, index) => (
                        <div key={`slide-${index}`} className="px-3">
                            <div className="rounded-xl overflow-hidden shadow-md bg-white">
                                <video
                                    ref={(el) => (playersRef.current[index] = el)}
                                    className="w-full h-[300px] object-cover"
                                    controls
                                    onPlay={(e) => {
                                        sliderRef.current?.slickPause();
                                        pauseAllExcept(e.target);
                                    }}
                                    onPause={() => {
                                        const anyPlaying = playersRef.current.some(
                                            (v) => v && !v.paused
                                        );
                                        if (!anyPlaying) sliderRef.current?.slickPlay();
                                    }}
                                >
                                    <source src={src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    ))}
                </Slider>

                <div className="flex justify-center gap-4 mt-6">
                    <CustomPrevArrow onClick={() => sliderRef.current?.slickPrev()} />
                    <CustomNextArrow onClick={() => sliderRef.current?.slickNext()} />
                </div>
            </div>
        </div>
    );
};

export default Video;
