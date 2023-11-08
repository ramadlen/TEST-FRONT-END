import ProductView     from "@/views/Product"

import { productType } from "../../ts/product.type";

const ProductionPage = (props: {products: productType[]}) => {
    const { products} = props;
    return(
        <>
            <ProductView products={(products)}/>
        </>
    )
}
export default ProductionPage;




//dipanggil setiap melakukan request
export async function getServerSideProps() {
    //fetch data
    const res = await fetch("http://localhost:3000/api/product");
    const response = await res.json();
    console.log(response);
    return{
        props: {
            products:response.data,
        },
    };
}