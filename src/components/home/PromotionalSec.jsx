import arrow from '@/assets/arrow.svg'
import promotionalBg from '@/assets/promotional-bg.png'
import Image from 'next/image'

const PromotionalSec = () => {
    return (
        <div className='pb-20'>
            <section className="h-full lg:h-[550px] bg-[#EEECFB] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-8 relative">
                {/* Left Section */}
                <div className="lg:w-3/5 w-full flex flex-col justify-center lg:items-start items-center text-center lg:text-left space-y-4">
                    {/* Subheading */}
                    <p className="text-sm lg:text-2xl text-[#6F42C1] font-medium font-pacifico">Big Deal</p>
                    {/* Heading */}
                    <h1 className="text-4xl lg:text-6xl font-bold max-w-sm lg:max-w-max">
                        <span className="text-[#6F42C1]">30% Off</span> for New Customers
                    </h1>
                    {/* Buttons */}
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

                {/* Right Section */}
                <div className="lg:w-2/5 w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
                    <Image
                        src={promotionalBg} // Replace with your image path
                        alt="Featured Product"
                        className=" lg:absolute lg:bottom-0 lg:right-0 object-contain"
                    />
                </div>
            </section>
        </div>
    )
}

export default PromotionalSec