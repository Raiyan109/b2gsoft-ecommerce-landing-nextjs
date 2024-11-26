'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import saree from '@/assets/featured-saree.png'
import hoodie from '@/assets/featured-hoodie.png'
import plazu from '@/assets/featured-plazu.png'
import jacket from '@/assets/featured-jacket.png'
import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import { products } from '@/data/products';
import SwiperNavBtns from './SwiperNavBtns';
import Link from 'next/link';

const FeaturedProducts = () => {


    return (
        <div className="container mx-auto px-4 py-8 ">
            {/* Top Section: Subheading, Heading, Controls */}
            <div className="flex justify-between items-center">
                {/* Left Section */}
                {/* <div>
                    <p className="text-purple-500 font-medium">Featured Product</p>
                    <h2 className="text-3xl font-bold">New Arrivals</h2>
                </div> */}
                {/* Right Section (Arrows) */}

            </div>

            {/* Swiper Slider */}
            <Swiper
                // autoHeight={true}
                slidesPerView={1}
                spaceBetween={16}

                modules={[Navigation]}
                className="w-full mySwiper"
                // breakpoints={{
                //     640: { slidesPerView: 1 },
                //     768: { slidesPerView: 2 },
                //     1024: { slidesPerView: 4 },
                // }}
                breakpoints={{
                    480: {
                        width: 480,
                        slidesPerView: 1,
                    },
                    // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                }}
            >
                <div className='absolute top-5 z-20 left-10'>
                    <p className="text-purple-500 font-medium">Featured Product</p>
                    <h2 className="text-3xl font-bold">New Arrivals</h2>
                </div>
                <div className='absolute top-10 z-20 right-10'>
                    <SwiperNavBtns />
                </div>
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="border rounded-lg shadow-md p-2 flex flex-col h-full bg-white space-y-6">
                            {/* Product Image */}
                            <div className='bg-[#F5F6FD] rounded-lg'>
                                <Link href={`/${product.id}`}>
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={300}
                                        height={300}
                                        className="w-full h-full lg:h-[400px] object-contain mb-4"
                                    />
                                </Link>
                            </div>
                            {/* Product Title and Price */}
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-medium text-sm lg:text-lg">{product.title}</h3>
                                <p className="font-semibold text-sm lg:text-xl">BDT {product.price}</p>
                            </div>
                            {/* Add to Cart Button */}
                            <button className="mt-auto rounded-lg border border-[#7E53D4] text-[#7E53D4] font-medium py-2 w-full">
                                Add to Cart
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default FeaturedProducts