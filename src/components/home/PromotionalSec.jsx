import arrow from '@/assets/arrow.svg'
import promotionalBg from '@/assets/promotional-bg.png'
import Image from 'next/image'

const PromotionalSec = () => {
    return (
        <div className='pb-20'>
            <div className="h-[450px] bg-[#EEECFB] flex">
                {/* Left Side */}
                <div className="flex-2 flex flex-col justify-center items-start px-8 lg:px-24">
                    <h2 className="text-6xl font-bold leading-tight">
                        <span className="text-[#6F42C1]">30%</span> Off for New Customers
                    </h2>
                    <div className="mt-6 flex justify-center items-center">
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

                {/* Right Side */}
                <div className="flex-1 relative">
                    <Image
                        src={promotionalBg}
                        alt="Promotional"
                        className="absolute bottom-0 right-0 lg:w-full lg:h-auto"
                        style={{ maxHeight: "400px", objectFit: "contain" }}
                    />
                </div>
            </div>
        </div>
    )
}

export default PromotionalSec