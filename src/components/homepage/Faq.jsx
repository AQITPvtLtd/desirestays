"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// FAQ data
const faqs = [
    {
        question: "How do I book a stay at Desire Stays?",
        answer:
            "Book directly through our website or contact our customer support for instant assistance.",
    },
    {
        question: "Are your properties pet-friendly?",
        answer:
            "Certain properties allow pets. Check the property details before booking.",
    },
    {
        question: "What amenities do you provide?",
        answer:
            "Most properties offer Wi-Fi, air conditioning, fully equipped kitchens, entertainment systems, and premium toiletries.",
    },
    {
        question: "Can I request early check-in or late check-out?",
        answer: "Yes, based on availability. Please contact us in advance.",
    },
    {
        question: "Is parking available?",
        answer:
            "Designated parking is available at most properties. Refer to the property listing for details.",
    },
];

// ChevronDownIcon component using inline SVG
const ChevronDownIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-6 h-6 ${className}`}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
    </svg>
);

// Animation Variants
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // ek-ek karke show
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="max-w-3xl mx-auto pt-10 px-6">
            <div className="text-center mb-12">
                {/* <h2
                    className="text-4xl font-bold leading-tight"
                    style={{ fontFamily: "Roboto Slab, serif" }}
                >
                  
                </h2> */}

                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center text-black mb-5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontFamily: "Roboto Slab, serif" }}
                >
                    Frequently Asked <br /> Questions
                </motion.h2>
            </div>

            {/* FAQ list with animation */}
            <motion.div
                className="space-y-4 hidden lg:block" // sirf large devices par visible
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }} // repeat when re-scroll
            >
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        className="border-b border-black pb-4"
                        variants={item}
                    >
                        <button
                            className="w-full flex justify-between items-center cursor-pointer text-left text-lg font-semibold text-gray-800 focus:outline-none"
                            onClick={() => toggle(index)}
                        >
                            <span>{faq.question}</span>
                            <ChevronDownIcon
                                className={`transform transition-transform duration-300 ${activeIndex === index ? "rotate-180 text-blue-500" : ""
                                    }`}
                            />
                        </button>
                        {activeIndex === index && (
                            <p className="mt-3 text-base text-gray-800 leading-relaxed">
                                {faq.answer}
                            </p>
                        )}
                    </motion.div>
                ))}
            </motion.div>

            {/* Small devices ke liye normal version without animation */}
            <div className="space-y-4 lg:hidden">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-black pb-4">
                        <button
                            className="w-full flex justify-between items-center cursor-pointer text-left text-lg font-semibold text-gray-800 focus:outline-none"
                            onClick={() => toggle(index)}
                        >
                            <span>{faq.question}</span>
                            <ChevronDownIcon
                                className={`transform transition-transform duration-300 ${activeIndex === index ? "rotate-180 text-blue-500" : ""
                                    }`}
                            />
                        </button>
                        {activeIndex === index && (
                            <p className="mt-3 text-base text-gray-800 leading-relaxed">
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;
