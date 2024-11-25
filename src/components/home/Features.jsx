import { FaShippingFast, FaSyncAlt, FaLock } from "react-icons/fa";
import featured1 from '@/assets/featured-1.png'
import featured2 from '@/assets/featured-2.png'
import featured3 from '@/assets/featured-3.png'
import Image from "next/image";

const Features = () => {
    return (
        <div
            className="relative h-full lg:h-[100px] flex items-center justify-center bg-cover bg-center bg-[url('/featured-bg.png')]"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#6441C2F2]"></div>

            {/* Background Blur */}
            <div
                className="absolute -top-[800px] left-1/2 -z-10  -translate-x-1/2 transform-gpu blur-3xl"
                aria-hidden="true"
            >
                <div className="aspect-[1097/845]  bg-[#6441C2F2]"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                {/* Desktop Layout */}
                <div className="hidden lg:flex justify-between items-center text-white space-x-6">
                    {/* Column 1 */}
                    <div className="flex items-start space-x-4">
                        <Image
                            width={40}
                            height={40}
                            alt='arrow'
                            src={featured1}
                        />
                        <div className="flex flex-col">
                            <h3 className="font-bold text-lg">FREE SHIPPING</h3>
                            <p className="text-sm">BUY BDT 3000+ & GET FREE DELIVERY</p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex items-start space-x-4">
                        <Image
                            width={40}
                            height={40}
                            alt='arrow'
                            src={featured2}
                        />
                        <div className="flex flex-col">
                            <h3 className="font-bold text-lg">7 DAYS EXCHANGE</h3>
                            <p className="text-sm">
                                EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS
                            </p>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex items-start space-x-4">
                        <Image
                            width={40}
                            height={40}
                            alt='arrow'
                            src={featured3}
                        />
                        <div className="flex flex-col">
                            <h3 className="font-bold text-lg">100% PAYMENT SECURE</h3>
                            <p className="text-sm">
                                CASH ON DELIVERY AND SECURED ONLINE PAYMENT
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="flex flex-col lg:hidden text-white text-center space-y-4">
                    {/* Column 1 */}
                    <div className="flex items-center space-x-4">
                        <FaShippingFast className="text-2xl" />
                        <div className="flex flex-col">
                            <h3 className="font-bold text-lg">FREE SHIPPING</h3>
                            <p className="text-sm">BUY BDT 3000+ & GET FREE DELIVERY</p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex items-center space-x-4">
                        <FaSyncAlt className="text-2xl" />
                        <div className="flex flex-col">
                            <h3 className="font-bold text-lg">7 DAYS EXCHANGE</h3>
                            <p className="text-sm">
                                EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS
                            </p>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex items-center space-x-4">
                        <FaLock className="text-2xl" />
                        <div className="flex flex-col">
                            <h3 className="font-bold text-lg">100% PAYMENT SECURE</h3>
                            <p className="text-sm">
                                CASH ON DELIVERY AND SECURED ONLINE PAYMENT
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Features