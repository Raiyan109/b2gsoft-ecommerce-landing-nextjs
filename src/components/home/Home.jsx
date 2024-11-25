import Collections from "./Collections"
import FeaturedProducts from "./featuredProducts/FeaturedProducts"
import PromotionalSec from "./PromotionalSec"
import SummerProducts from "./summer/SummerProducts"




const HomeComponent = () => {
    return (
        <div>
            <FeaturedProducts />
            <PromotionalSec />
            <Collections />
            <SummerProducts />
        </div>
    )
}

export default HomeComponent