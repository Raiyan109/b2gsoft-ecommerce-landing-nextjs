import React from "react";
import { FaArrowRight } from "react-icons/fa";

import arrow from '@/assets/arrow.svg'
import Image from "next/image";

const Hero = () => {
    return (
        <div
            className="relative bg-cover bg-no-repeat bg-center h-screen flex items-center justify-center bg-[url('/hero.png')]"

        >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="z-10 text-center px-4 lg:px-0">
                {/* Desktop Content */}
                <div className="hidden lg:block">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Discover the Latest Trends in Sustainable Fashion
                    </h1>
                    <div className="mt-6 flex justify-center items-center space-x-4">
                        {/* Shop Now Button */}
                        <button
                            className="flex items-center justify-center bg-[#8F71E1] text-white text-lg font-medium rounded-[28px] w-[149px] h-[48px] gap-2 px-4"
                            style={{ padding: "8px", gap: "8px" }}
                        >
                            Shop now
                        </button>
                        {/* Arrow Button */}
                        <button className="flex items-center justify-center bg-[#8F71E1] text-white text-lg font-medium rounded-[28px] w-[50px] h-[50px] gap-2 px-4">
                            <Image
                                width={30}
                                height={30}
                                alt='arrow'
                                src={arrow}
                            />
                        </button>
                    </div>
                </div>

                {/* Mobile Content */}
                <div className="lg:hidden">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Elevate Your Everyday Style
                    </h1>
                    <p className="mt-2 text-[#F5F3FF] text-lg font-medium">
                        Discover the Latest Trends in Sustainable Fashion
                    </p>
                    <div className="mt-6 flex justify-center items-center space-x-4">
                        {/* Shop Now Button */}
                        <button
                            className="flex items-center justify-center bg-[#8F71E1] text-white text-lg font-medium rounded-[28px] w-[149px] h-[48px] gap-2 px-4"
                            style={{ padding: "8px", gap: "8px" }}
                        >
                            Shop now
                        </button>
                        {/* Arrow Button */}
                        <button className="flex items-center justify-center bg-[#8F71E1] text-white text-lg font-medium rounded-[28px] w-[50px] h-[50px] gap-2 px-4">
                            <Image
                                width={30}
                                height={30}
                                alt='arrow'
                                src={arrow}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
