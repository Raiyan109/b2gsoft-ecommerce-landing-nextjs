'use client'

import { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { MdOutlineAdd, MdOutlineRemove } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import bagImg from '@/assets/bag.png'
import ReviewsSection from "./ReviewsSection";

const ProductDetails = ({ product }) => {
    if (!product) return null;
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    return (
        <div className="container mx-auto px-4 py-8 ">
            <div className="lg:flex lg:space-x-8">
                {/* Left Section */}
                <div className="lg:w-2/4 w-full">
                    {/* Image Slider */}
                    <div className="relative">
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            navigation
                            modules={[Navigation]}
                            className="w-full"
                        >
                            <SwiperSlide>
                                <Image
                                    src={product.image}
                                    width={100}
                                    height={100}
                                    alt="Product"
                                    className="w-full h-96 object-contain"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={product.image}
                                    width={100}
                                    height={100}
                                    alt="Product"
                                    className="w-full h-96 object-contain"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={product.image}
                                    width={100}
                                    height={100}
                                    alt="Product"
                                    className="w-full h-96 object-contain"
                                />
                            </SwiperSlide>
                        </Swiper>
                        {/* Slide Number for Mobile */}
                        <div className="absolute bottom-2 right-2 bg-[#E0DCF8] text-sm px-3 py-1 rounded-full">
                            1/3
                        </div>
                    </div>

                    {/* Small Images for Desktop */}
                    <div className="hidden lg:flex space-x-4 mt-4">
                        <Image
                            src={product.image}
                            width={100}
                            height={100}
                            alt="Product"
                            className="w-1/4 h-32 object-contain bg-[#ECE9FE] rounded-[8px]"
                        />
                        <Image
                            src={product.image}
                            width={100}
                            height={100}
                            alt="Product"
                            className="w-1/4 h-32 object-contain bg-[#ECE9FE] rounded-[8px]"
                        />
                        <Image
                            src={product.image}
                            width={100}
                            height={100}
                            alt="Product"
                            className="w-1/4 h-32 object-contain bg-[#ECE9FE] rounded-[8px]"
                        />
                        {/* <div className=""> */}
                        <Image
                            src={product.image}
                            width={100}
                            height={100}
                            alt="Product"
                            className="h-32 object-contain bg-[#ECE9FE] w-1/4 rounded-[8px]"
                        />
                        {/* </div> */}
                    </div>
                </div>

                {/* Right Section */}
                <div className="lg:w-2/4 w-full mt-8 lg:mt-0 relative">
                    {/* Sticky Cart Preview */}
                    <div className="hidden lg:flex justify-center items-center flex-col gap-1 bg-[#581FC1] text-white px-6 py-4 rounded-l-xl absolute top-32 h-fit right-0">
                        <Image
                            src={bagImg}
                            width={20}
                            height={20}
                            alt="Product"
                            className=""
                        />
                        <h3 className="font-bold text-sm">Your Bag</h3>
                        <p className="text-sm">0</p>
                    </div>
                    {/* New Arrival */}
                    <button className="bg-[#2F1C59] text-[#F4F8FF] px-6 py-2 rounded-md text-sm mb-4">
                        New Arrival
                    </button>

                    {/* Product Name */}
                    <h1 className="text-2xl font-bold mb-4">{product.title}</h1>

                    {/* Rating Section */}
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="flex items-center text-yellow-400">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                            <FaRegStar />
                        </div>
                        <p className="text-sm">(4.0)</p>
                        <p className="text-sm text-[#7E53D4]">121 reviews</p>
                    </div>

                    {/* Product Price */}
                    <p className="text-2xl font-bold mb-4">BDT {product.price}</p>
                    <hr className="border-[#CECECE] mb-4" />

                    <div className="flex flex-col lg:flex-row gap-48">
                        {/* Available Size */}
                        <div className="flex flex-col space-y-2 mb-4">
                            <h3 className="font-bold">Available Size</h3>
                            <div className="flex space-x-4">
                                {["S", "M", "L", "XL"].map((size) => (
                                    <button
                                        key={size}
                                        className="bg-[#F6F5FD] px-2 py-2 rounded-md text-sm"
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>


                        {/* Available Color */}
                        <div className="flex flex-col space-y-2 mb-4">
                            <h3 className="font-bold">Available Color</h3>
                            <div className="flex space-x-4 items-center">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="color"
                                        className="form-radio"
                                        defaultChecked
                                    />
                                    <span>Off White</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="radio" name="color" className="form-radio" />
                                    <span>Black</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <hr className="border-[#CECECE] mb-4" />

                    {/* Quantity */}
                    <div className="flex flex-col space-y-2 mb-4">
                        <h3 className="font-bold">Quantity</h3>
                        <div className="flex items-center space-x-4 bg-[#ECE9FE] p-2 rounded-full w-fit text-lg">
                            <button
                                onClick={decreaseQuantity}
                                className="bg-[#ECE9FE] p-2 rounded-full"
                            >
                                <MdOutlineRemove />
                            </button>
                            <span className="bg-[#ECE9FE] px-4 py-2 rounded-full">
                                {quantity}
                            </span>
                            <button
                                onClick={increaseQuantity}
                                className="bg-[#ECE9FE] p-2 rounded-full"
                            >
                                <MdOutlineAdd />
                            </button>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-4">
                        <button className="bg-[#7E53D4] text-white px-6 py-2 rounded-md w-full">
                            Buy Now
                        </button>
                        <button className="border border-[#7E53D4] text-[#7E53D4] px-6 py-2 rounded-md w-full">
                            Add to Cart
                        </button>
                    </div>
                </div>

            </div>
            <ReviewsSection />
        </div>
    );
};

export default ProductDetails;
