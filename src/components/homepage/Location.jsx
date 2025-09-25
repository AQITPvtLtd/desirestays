"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const locations = [
    {
        title: "Desire Courtyard",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.40502080051!2d77.07834509999999!3d28.617620899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04c9c43e707b%3A0x9917d7ab4b8f0dd6!2sDesire%20Courtyard!5e0!3m2!1sen!2sin!4v1758698231590!5m2!1sen!2sin",
    },
    {
        title: "Desire Penthouse",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.171013781479!2d77.194528!3d28.564626999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a163dee745%3A0x58109bd1c77a1c6e!2sDesire%20Penthouse!5e0!3m2!1sen!2sin!4v1758705269832!5m2!1sen!2sin",
    },
    {
        title: "Dream Desire",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.355098696273!2d77.1981072!3d28.5590978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3aa57f99aa5%3A0xd10a1cf1ee8252df!2sDream%20Desire!5e0!3m2!1sen!2sin!4v1758775573643!5m2!1sen!2sin",
    },


];

const Location = () => {
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        if (window.innerWidth >= 1024) {
            // Left map animation
            gsap.from(leftRef.current, {
                x: -180,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: leftRef.current,
                    start: "top 80%",
                    toggleActions: "restart none none reset",
                },
            });

            // Right map animation
            gsap.from(rightRef.current, {
                x: 180,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: rightRef.current,
                    start: "top 80%",
                    toggleActions: "restart none none reset",
                },
            });

            // Bottom map animation
            gsap.from(bottomRef.current, {
                y: 150,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: bottomRef.current,
                    start: "top 90%",
                    toggleActions: "restart none none reset",
                },
            });
        }
    }, []);

    return (
        <div className="mt-16 px-4 lg:px-10">
            <div className="text-center mb-8">

                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center text-black mb-5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontFamily: "Roboto Slab, serif" }}
                >
                    Our Locations
                </motion.h2>
            </div>

            {/* Top row (2 maps) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden">
                <div ref={leftRef} className="text-center">
                    <h1
                        className="text-2xl font-bold mb-4 dark:text-black"
                        style={{ fontFamily: "Roboto Slab, serif" }}
                    >
                        {locations[0].title}
                    </h1>
                    <iframe
                        src={locations[0].src}
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        className="rounded-xl"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div ref={rightRef} className="text-center">
                    <h1
                        className="text-2xl font-bold mb-4 dark:text-black"
                        style={{ fontFamily: "Roboto Slab, serif" }}
                    >
                        {locations[1].title}
                    </h1>
                    <iframe
                        src={locations[1].src}
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        className="rounded-xl"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            {/* Bottom row (1 map center) */}
            <div className="py-10 flex justify-center overflow-hidden">
                <div ref={bottomRef} className="w-full md:w-3/4 lg:w-2/3 text-center">
                    <h1
                        className="text-2xl font-bold mb-4 dark:text-black"
                        style={{ fontFamily: "Roboto Slab, serif" }}
                    >
                        {locations[2].title}
                    </h1>
                    <iframe
                        src={locations[2].src}
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        className="rounded-xl"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Location;
