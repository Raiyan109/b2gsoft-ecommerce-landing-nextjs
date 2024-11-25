'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import collectionMen from '@/assets/collection-men.png'
import Image from "next/image";
import arrow from '@/assets/arrow.svg'

const Collections = () => {
    const slides = [
        {
            id: 1,
            image: collectionMen,
            heading: "Men Collection",
        },
        {
            id: 2,
            image: collectionMen,
            heading: "Women Collection",
        },
        {
            id: 3,
            image: collectionMen,
            heading: "Kids Collection",
        },
    ];
    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                <div className="hidden lg:block">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{
                            el: ".custom-pagination",
                            clickable: true,
                        }}
                        spaceBetween={120}
                        slidesPerView={'auto'}
                        className="lg:flex hidden"
                    >
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.id} className="w-fit">
                                {/* Left Side: Image */}
                                <div className="flex flex-col lg:flex-row gap-5 h-full lg:h-96">
                                    <div className="w-1/2 bg-[#EEECFB] relative flex items-center justify-center">
                                        <Image
                                            src={slide.image}
                                            alt={slide.heading}
                                            width={400}
                                            height={400}
                                            className="lg:absolute top-[-15%] object-cover max-h-[90%] lg:max-h-[115%] w-auto"
                                        />
                                    </div>

                                    {/* Right Side: Text */}
                                    <div className="w-1/2 flex flex-col justify-center items-start text-center space-y-4 p-4">
                                        <h2 className="text-xl lg:text-6xl font-bold">{slide.heading}</h2>
                                        <div className="mt-6 flex justify-center items-center">
                                            {/* Shop Now Button */}
                                            <button
                                                className="flex items-center justify-center bg-[#8F71E1] text-white textsm lg:text-lg font-medium rounded-[28px] w-[100px] lg:w-[149px] h-[32px] lg:h-[48px] gap-2 px-4"
                                                style={{ padding: "8px", gap: "8px" }}
                                            >
                                                Shop now
                                            </button>
                                            {/* Arrow Button */}
                                            <button className="flex items-center justify-center bg-[#8F71E1] text-white text-lg font-medium rounded-[28px] w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] gap-2 px-4">
                                                <Image
                                                    width={20}
                                                    height={20}
                                                    alt='arrow'
                                                    src={arrow}
                                                    className="w-20 h-20 object-contain"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Pagination */}
                    <div className="custom-pagination flex justify-center mt-6 space-x-2 lg:flex hidden">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                className="swiper-pagination-bullet w-[32px] h-[8px] rounded-[8px] bg-[#7E53D4]"
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Mobile View */}
                <div className="lg:hidden flex flex-col space-y-6">
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className="flex flex-col items-start text-left space-y-4"
                        >
                            {/* Image */}
                            <div className="w-full bg-[#EEECFB] flex justify-center">
                                <Image
                                    src={slide.image}
                                    alt={slide.heading}
                                    width={300}
                                    height={300}
                                    className="relative top-[-10%] object-cover max-h-[90%] w-auto"
                                />
                            </div>

                            {/* Text */}
                            <div className="space-y-2 px-4">
                                <h2 className="text-2xl font-bold">{slide.heading}</h2>
                                <div className="mt-6 flex justify-center items-center">
                                    {/* Shop Now Button */}
                                    <button
                                        className="flex items-center justify-center bg-[#8F71E1] text-white textsm lg:text-lg font-medium rounded-[28px] w-[100px] lg:w-[149px] h-[32px] lg:h-[48px] gap-2 px-4"
                                        style={{ padding: "8px", gap: "8px" }}
                                    >
                                        Shop now
                                    </button>
                                    {/* Arrow Button */}
                                    <button className="flex items-center justify-center bg-[#8F71E1] text-white text-lg font-medium rounded-[28px] w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] gap-2 px-4">
                                        <Image
                                            width={20}
                                            height={20}
                                            alt='arrow'
                                            src={arrow}
                                            className="w-20 h-20 object-contain"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Collections