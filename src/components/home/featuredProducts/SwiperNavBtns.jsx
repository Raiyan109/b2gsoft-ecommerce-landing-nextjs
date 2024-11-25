import { useSwiper } from "swiper/react"
import arrowLeft from '@/assets/arrow-left.png'
import arrowRight from '@/assets/arrow-right.png'
import Image from "next/image"

const SwiperNavBtns = () => {
    const swiper = useSwiper()
    return (
        <div className="flex space-x-2 swiper-nav-btns" >
            {/* swiper-button-prev */}
            <button className=" "
                onClick={() => swiper.slidePrev()}
            >
                <Image
                    src={arrowLeft}
                    alt='arrow left'
                    width={50}
                    height={50}
                    className="w-full  object-contain"
                />
            </button>
            {/* swiper-button-next  */}
            <button className=""
                onClick={() => swiper.slideNext()}
            >
                <Image
                    src={arrowRight}
                    alt='arrow right'
                    width={50}
                    height={50}
                    className="w-full  object-contain"
                />
            </button>
        </div>
    )
}

export default SwiperNavBtns