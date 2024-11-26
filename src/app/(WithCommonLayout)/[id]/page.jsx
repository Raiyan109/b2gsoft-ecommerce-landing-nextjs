import ProductDetails from "@/components/dynamicPage/ProductDetails";
import { products } from "@/data/products";


const DynamicPage = async ({ params }) => {
    const id = parseInt(params.id);
    console.log(id);

    if (!id) {
        return <div>Product Not Found</div>;
    }


    const product = products.find((item) => item.id === id);
    console.log(product);


    return (
        <div>
            <h1 className="text-xl font-bold">Page: {id}</h1>
            <ProductDetails product={product} />
        </div>
    );
};


// Fetch data based on slug
export const getInitialProps = async ({ params }) => {
    const { id } = params;

    let data = null;

    // Match slug to data
    if (slug === "summer") {
        data = summerProducts;
    } else if (slug === "collections") {
        data = collectionSlides;
    } else if (slug === "featured-products") {
        data = featuredProducts;
    }

    return { props: { data, slug } };
};

export default DynamicPage;
