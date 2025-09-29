'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import { motion } from "framer-motion";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

export default function Review() {
    const images = [
        "/reviews/IMG_5037.PNG",
        "/reviews/IMG_5038.PNG",
        "/reviews/IMG_5039.PNG",
        "/reviews/IMG_5040.PNG",
        "/reviews/IMG_5041.PNG",
        "/reviews/IMG_5042.PNG",
        "/reviews/IMG_5045.PNG",
        "/reviews/IMG_5046.PNG",
        "/reviews/IMG_5048.PNG",
        "/reviews/IMG_5049.PNG",
        "/reviews/IMG_5050.PNG",
        "/reviews/IMG_5051.PNG",
        "/reviews/IMG_5052.PNG",
        "/reviews/review1.jpeg",
        "/reviews/review2.jpeg",
        "/reviews/review3.jpeg",
        "/reviews/review4.jpeg",
        "/reviews/review5.jpeg",
        "/reviews/review6.jpeg",
        "/reviews/review7.jpeg",
    ];

    return (
        <section className="w-full py-14 bg-gradient-to-b from-[#f8f5f2] to-[#f1eae4]">
            <div className="max-w-7xl mx-auto px-4 overflow-hidden">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center text-black mb-5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontFamily: "Roboto Slab, serif" }}
                >
                    Client Reviews
                </motion.h2>

                <Swiper
                    modules={[EffectCoverflow, Navigation, Autoplay]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 10 },
                        640: { slidesPerView: 1, spaceBetween: 15 },
                        768: { slidesPerView: 2, spaceBetween: 25 },
                        1024: { slidesPerView: 3, spaceBetween: 40 },
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 120,
                        modifier: 1.3,
                        slideShadows: false,
                    }}
                    className="pb-10 relative"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <div className="relative w-full max-w-[360px] h-[300px] sm:h-[320px] md:h-[340px] rounded-2xl bg-white/90 backdrop-blur-md shadow-xl border border-gray-100 overflow-hidden transition-transform hover:scale-[1.02]">
                                <Image
                                    src={src}
                                    alt={`Review ${index + 1}`}
                                    fill
                                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
                                    className="object-contain p-4"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom CSS for navigation buttons */}
                <style jsx global>{`
                    .swiper-button-next,
                    .swiper-button-prev {
                        color: #000; /* arrow color */
                        width: 30px;
                        height: 30px;
                        top: 50%; /* center vertically */
                        transform: translateY(-50%);
                    }
                    .swiper-button-next {
                        right: -40px; /* outside right */
                    }
                    .swiper-button-prev {
                        left: -40px; /* outside left */
                    }
                    .swiper-button-next::after,
                    .swiper-button-prev::after {
                        font-size: 18px !important; /* smaller arrow icon */
                        font-weight: bold;
                    }
                `}</style>
            </div>
        </section>
    );
}
