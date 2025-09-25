"use client";
import React, { useRef, useEffect, useState } from "react";
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
        aria-label="Previous"
    >
        <GrPrevious size={20} />
    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="p-3 bg-white text-black rounded-full shadow hover:bg-gray-100 transition cursor-pointer"
        aria-label="Next"
    >
        <GrNext size={20} />
    </button>
);

const Video = () => {
    const sliderRef = useRef(null);
    const playersRef = useRef([]);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [centerMode, setCenterMode] = useState(true);

    // determine slidesToShow based on actual window width (more robust than slick's responsive)
    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            if (w < 768) {
                setSlidesToShow(1);
                setCenterMode(false);
            } else if (w < 1024) {
                setSlidesToShow(2);
                setCenterMode(true);
            } else {
                setSlidesToShow(3);
                setCenterMode(true);
            }
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const pauseAllExcept = (current) => {
        playersRef.current.forEach((video) => {
            if (video && video !== current && !video.paused) {
                try { video.pause(); } catch (e) { }
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
        centerMode,
        centerPadding: "0px",
        slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        adaptiveHeight: false,
        // responsive kept empty because we manage slidesToShow via JS
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
                {/* key forces re-init when slidesToShow changes */}
                <Slider key={slidesToShow} ref={sliderRef} {...settings}>
                    {videos.map((src, index) => (
                        <div key={`slide-${index}`} className="px-3">
                            <div className="rounded-xl overflow-hidden shadow-md bg-white">
                                <video
                                    ref={(el) => (playersRef.current[index] = el)}
                                    className="w-full h-[300px] object-cover"
                                    controls
                                    playsInline
                                    // webkit-playsinline helps Safari iOS
                                    webkit-playsinline="true"
                                    preload="metadata"
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
                                    {/* don't force type if container is .MOV; letting browser decide */}
                                    <source src={src} />
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
