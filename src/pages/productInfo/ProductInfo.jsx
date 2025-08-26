import { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import { useParams } from "react-router";
import { fireDB } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const ProductInfo = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [product, setProduct] = useState('')
    // console.log(product)

    const { id } = useParams()

    // console.log(product)

    // getProductData
    const getProductData = async () => {
        setLoading(true)
        try {
            const productTemp = await getDoc(doc(fireDB, "products", id))
            // console.log({...productTemp.data(), id : productTemp.id})
            setProduct({...productTemp.data(), id : productTemp.id})
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
  const sanitizedItem = {
    id: item.id,
    title: item.title,
    price: item.price,
    productImageUrl: item.productImageUrl,
  };

  dispatch(addToCart(sanitizedItem));
  toast.success("Producto añadido al carrito");
};

    const deleteCart = (item) => {
    // Solo pasamos el ID del producto al dispatch
    dispatch(deleteFromCart(item.id));
    toast.success("Producto eliminado del carrito");
};

    // console.log(cartItems)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])


    useEffect(() => {
        getProductData()

    }, [])
    return (
        <Layout>
            <section className="py-5 lg:py-16 font-poppins dark:bg-gray-600">
                {loading ?
                    <>
                        <div className="flex justify-center items-center">
                            <Loader />
                        </div>
                    </>

                    :

                    <>
                        <div className="max-w-6xl px-4 mx-auto">
                            <div className="flex flex-wrap mb-24 -mx-4">
                                <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                                    <div className="">
                                        <div className="">
                                            <img
                                                className=" w-full lg:h-[39em] rounded-lg"
                                                src={product?.productImageUrl}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/2">
                                    <div className="lg:pl-20">
                                        <div className="mb-6 ">
                                            <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                                                {product?.title}
                                            </h2>
                                            
                                            <p className="inline-block text-2xl font-semibold text-gray-900 dark:text-gray-900 ">
                                                <span>$ {product?.price}</span>
                                            </p>
                                        </div>
                                        <div className="mb-6 ">
                                            
                                            <p className="text-black">{product?.description}</p>
                                        </div>

                                        <div className="mb-6 " />
                                        <div className="flex flex-wrap items-center mb-6">
                                            {cartItems.some((p) => p.id === product.id)
                                                ?
                                                <button
                                                    onClick={() => deleteCart(product)}
                                                    className="w-full px-4 py-3 text-center text-white bg-red-500 border border--600  hover:bg-red-600 hover:text-gray-100  rounded-xl"
                                                >
                                                    Borrar del carrito
                                                </button>
                                                :
                                                <button
                                                    onClick={() => addCart(product)}
                                                    className="w-full px-4 py-3 text-center text-white bg-[#ff2301] border border-transparent  hover:bg-white hover:text-[#000000] rounded-xl"
                                                >
                                                    Agregar al carrito
                                                </button>
                                            }
                                        </div>
                                        <div className="flex gap-4 mb-6">
                                            <button
                                                className="w-full px-4 py-3 text-center text-gray-100 bg-[#ff2301] border border-transparent hover:border-transparent dark:border-gray-700 hover:border-pink-500 hover:text-black hover:bg-white rounded-xl cursor-pointer"
                                            >
                                                Comprar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>}
            </section>

        </Layout>
    );
}

export default ProductInfo;