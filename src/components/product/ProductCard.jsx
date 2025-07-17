// src/components/ProductCard.jsx
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);

  const addCart = (product) => {
    const sanitizedItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      productImageUrl: product.productImageUrl,
    };
    dispatch(addToCart(sanitizedItem));
    toast.success("Producto añadido al carrito");
  };

  const deleteCart = (product) => {
    dispatch(deleteFromCart(product.id));
    toast.success("Producto eliminado del carrito");
  };

  const isInCart = cartItems.some((p) => p.id === item.id);

  return (
    <div className="p-4 w-full md:w-1/4">
      <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer bg-[#F5F7FA]">
        <img
          onClick={() => navigate(`/productinfo/${item.id}`)}
          className="lg:h-60 h-60 w-full object-cover"
          src={item.productImageUrl}
          alt={item.title}
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            ImportAM
          </h2>
          <h1 className="title-font text-md font-medium text-gray-900 mb-2">
            {item.title.substring(0, 25)}
          </h1>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            ${item.price}
          </h1>

          <div className="flex justify-center">
            {isInCart ? (
              <button
                onClick={() => deleteCart(item)}
                className="bg-[#00C896] w-full text-white py-[4px] rounded-lg font-bold"
              >
                Delete from Cart
              </button>
            ) : (
              <button
                onClick={() => addCart(item)}
                className="bg-[#007BFF] w-full text-white py-[4px] rounded-lg font-bold"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;