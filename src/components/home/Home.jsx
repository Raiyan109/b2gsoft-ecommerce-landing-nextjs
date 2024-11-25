import Collections from "./Collections"
import FeaturedProducts from "./featuredProducts/FeaturedProducts"
import PromotionalSec from "./PromotionalSec"




const HomeComponent = () => {
    return (
        <div>
            <FeaturedProducts />
            <PromotionalSec />
            <Collections />
        </div>
    )
}

export default HomeComponent