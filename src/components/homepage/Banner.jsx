"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const Banner = () => {
    return (
        <div>
            {/* Hide on small screens, show on md and larger */}
            <div className="banner-carousel inset-0 hidden sm:block">
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    interval={3000}
                    swipeable
                    emulateTouch
                >
                    {/* Image 1 */}
                    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[630px]">
                        <Image
                            src="/banner/banner1.jpg"
                            alt="Banner 1"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                    {/* Image 2 */}
                    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[630px]">
                        <Image
                            src="/banner/banner2.jpg"
                            alt="Banner 2"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                    {/* Image 3 */}
                    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[630px]">
                        <Image
                            src="/banner/banner3.jpg"
                            alt="Banner 3"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                    {/* Image 4 */}
                    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[630px]">
                        <Image
                            src="/banner/banner4.jpg"
                            alt="Banner 4"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                    {/* Image 5 */}
                    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[630px]">
                        <Image
                            src="/banner/banner5.jpeg"
                            alt="Banner 5"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;
