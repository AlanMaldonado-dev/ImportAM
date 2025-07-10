import { useContext } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/myContext"



const HomePageProductCard = () => {
    const context = useContext(myContext);
    const { getAllProduct } = context;

    console.log("getAllProduct:", getAllProduct);

    return (
        <div className="mt-10">
            {/* Heading */}
            <div className="">
                <h1 className="text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
            </div>

            {/* Main */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {getAllProduct && getAllProduct.length > 0 ? (
                            getAllProduct.slice(0,8).map((item, index) => {
                                const { id, productImageUrl, title, price } = item;

                                return (
                                    <div key={index} className="p-4 w-full md:w-1/4">
                                        <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                            <Link to={`/productinfo/${id}`}>
                                                <img
                                                    className="lg:h-80 h-auto w-full"
                                                    src={productImageUrl}
                                                    alt="img"
                                                />
                                            </Link>
                                            <div className="p-6">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                    ImportAM
                                                </h2>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                    {title.substring(0, 25)}
                                                </h1>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                    ${price}
                                                </h1>

                                                <div className="flex justify-center">
                                                    <button className="bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                        Add To Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <p className="text-center w-full">No hay productos disponibles</p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePageProductCard;