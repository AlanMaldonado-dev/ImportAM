
import Layout from "../../components/layout/Layout";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import { useSelector } from "react-redux";
import ProductCard from "../../components/product/ProductCard";

const AllProduct = () => {
    const context = useContext(myContext);
    const {getAllProduct} = context;

    const cartItems = useSelector((state) => state.cart)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])

    return (
        <Layout>
    <div className="py-4">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">Todos los productos</h1>
            </div>

            {/* main  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 lg:px-0 py-5 mx-auto">
                    {/* <div className="flex justify-center">
                        {loading && <Loader/>}
                    </div> */}
                    <div className="flex flex-wrap -m-4">
                        {getAllProduct.map((item) => {
                            return (
                                <ProductCard item={item} />
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
        </Layout>
    );
}

export default AllProduct;