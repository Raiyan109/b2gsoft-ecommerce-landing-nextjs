'use client'
import { useState } from "react";
import avatar from '@/assets/avatar.png'
import star from '@/assets/star.png'
import starGray from '@/assets/gray-star.png'
import Image from "next/image";
import { MdOutlineThumbUp } from "react-icons/md";

const ReviewsSection = () => {
    const [activeTab, setActiveTab] = useState("Review & Rating");

    const tabs = ["Details", "Review & Rating", "Discussion"];

    const reviews = [
        {
            avatar: avatar,
            name: "Cameron Williamson",
            rating: 5,
            daysAgo: 5,
            comment: "Very nice!!",
            likes: 10,
        },
        {
            avatar: avatar,
            name: "Cameron Williamson",
            rating: 4,
            daysAgo: 2,
            comment: "Very nice!!",
            likes: 5,
        },
    ];

    const progressData = [
        { stars: 5, percentage: 50 },
        { stars: 4, percentage: 5 },
        { stars: 3, percentage: 10 },
        { stars: 2, percentage: 30 },
        { stars: 1, percentage: 2 },
    ];

    return (
        <section className="px-4 py-8 mt-12">
            {/* Tabs */}
            <div className="flex gap-12">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={` py-2 text-xl font-semibold ${activeTab === tab ? "text-[#7E53D4] " : "text-[#747474]"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            {activeTab === "Review & Rating" && (
                <div className="flex flex-col lg:flex-row-reverse gap-8 mt-6">
                    {/* Right Side */}
                    <div className="lg:w-1/3 space-y-4">
                        <div className="flex gap-12">
                            <h2 className="text-lg font-bold">
                                Product Review
                            </h2>
                            <h2 className="text-lg font-bold text-[#7E53D4]">
                                121 reviews
                            </h2>
                        </div>
                        <div className="flex justify-between items-center">
                            {reviews.slice(0, 1).map((review, index) => (
                                <div key={index} className="space-y-2 border-b border-gray-200 pb-4">
                                    <div className="flex items-start gap-4">
                                        <Image
                                            src={star}
                                            alt='star'
                                            width={30}
                                            height={30}
                                            className=""
                                        />
                                        <Image
                                            src={star}
                                            alt='star'
                                            width={30}
                                            height={30}
                                            className=""
                                        />
                                        <Image
                                            src={star}
                                            alt='star'
                                            width={30}
                                            height={30}
                                            className=""
                                        />
                                        <Image
                                            src={star}
                                            alt='star'
                                            width={30}
                                            height={30}
                                            className=""
                                        />
                                        <Image
                                            src={starGray}
                                            alt='star'
                                            width={30}
                                            height={30}
                                            className=""
                                        />

                                    </div>

                                </div>
                            ))}
                            <span className="text-sm">(4.0)</span>
                        </div>
                        <div className="space-y-2">
                            {progressData.map((item) => (
                                <div key={item.stars} className="flex items-center gap-2">
                                    <span className="text-sm">{item.stars}</span>
                                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                                        <div
                                            style={{ width: `${item.percentage}%` }}
                                            className="bg-[#FFCF11] h-3 rounded-full"
                                        ></div>
                                    </div>
                                    <span className="text-sm">{item.percentage}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Left Side */}
                    <div className="lg:w-2/3 space-y-6">
                        {/* Dropdown */}
                        <div className="w-32">
                            <select
                                className="w-full border border-gray-300 rounded-lg py-2 px-3 text-lg bg-transparent"
                                defaultValue="Newest"
                            >
                                <option>Newest</option>
                                <option>Oldest</option>
                                <option>Most Liked</option>
                            </select>
                        </div>

                        {/* Comments */}
                        {reviews.map((review, index) => (
                            <div key={index} className="space-y-2 border-b border-gray-200 pb-4">
                                <div className="flex items-start gap-4">
                                    {/* Avatar */}
                                    <Image
                                        src={review.avatar}
                                        alt={review.name}
                                        width={30}
                                        height={30}
                                        className="w-12 h-12 rounded-full object-contain"
                                    />
                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex gap-5 items-center mb-1">
                                            <span className="font-semibold">{review.name}</span>
                                            <span className="text-gray-500 text-sm">{review.daysAgo} days ago</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Image
                                                src={star}
                                                alt='star'
                                                width={20}
                                                height={20}
                                                className=""
                                            />
                                            <Image
                                                src={star}
                                                alt='star'
                                                width={20}
                                                height={20}
                                                className=""
                                            />
                                            <Image
                                                src={star}
                                                alt='star'
                                                width={20}
                                                height={20}
                                                className=""
                                            />
                                            <Image
                                                src={star}
                                                alt='star'
                                                width={20}
                                                height={20}
                                                className=""
                                            />
                                            <Image
                                                src={starGray}
                                                alt='star'
                                                width={20}
                                                height={20}
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xl font-bold">{review.comment}</p>
                                <div className="flex items-center gap-1 text-lg text-gray-500">
                                    <button className="">
                                        <MdOutlineThumbUp />
                                    </button>
                                    <span>{review.likes}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default ReviewsSection;
