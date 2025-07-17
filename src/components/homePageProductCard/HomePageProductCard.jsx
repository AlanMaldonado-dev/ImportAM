import { useContext } from "react";
import myContext from "../../context/myContext";
import ProductCard from "../product/ProductCard";


const HomePageProductCard = () => {
    const context = useContext(myContext);
    const { getAllProduct } = context;



    return (
        <div className="mt-10">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
            </div>

            {/* main  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {getAllProduct.slice(0, 8).map((item, index) => {
                            return (
                                <ProductCard key={index} item={item} />
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePageProductCard;