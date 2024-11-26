import ProductDetails from "@/components/dynamicPage/ProductDetails";
import { products } from "@/data/products";


const DynamicPage = async ({ params }) => {
    const id = parseInt(params.id);

    if (!id) {
        return <div>Product Not Found</div>;
    }
    const product = products.find((item) => item.id === id);
    return (
        <div>
            <ProductDetails product={product} />
        </div>
    );
};
export default DynamicPage;
