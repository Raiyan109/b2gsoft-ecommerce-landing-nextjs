import Collections from "./Collections"
import FeaturedProducts from "./featuredProducts/FeaturedProducts"
import Features from "./Features"
import Hero from "./Hero"
import PromotionalSec from "./PromotionalSec"
import SummerProducts from "./summer/SummerProducts"




const HomeComponent = () => {
    return (
        <div>
            <Hero />
            <Features />
            <div className="max-w-[1800px] mx-auto">
                <FeaturedProducts />
                <PromotionalSec />
                <Collections />
                <SummerProducts />
            </div>
        </div>
    )
}

export default HomeComponent