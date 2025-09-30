import OrderProductItem from "../../../pages/user/OrderProductItem";


const OrderItem = ({ order }) => {
  const { id, date, status } = order;

  return (
    <div className="mt-5 flex flex-col overflow-hidden rounded-xl border border-blue-100 md:flex-row">
      {/* Left: Order Info */}
      <div className="w-full border-r border-blue-100 bg-blue-50 md:max-w-xs">
        <div className="p-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
            <div className="mb-4">
              <div className="text-sm font-semibold text-black">Id</div>
              <div className="text-sm font-medium text-gray-900">#{id}</div>
            </div>
            <div className="mb-4">
              <div className="text-sm font-semibold">Date</div>
              <div className="text-sm font-medium text-gray-900">{date}</div>
            </div>
            <div className="mb-4">
              <div className="text-sm font-semibold">Total</div>
              <div className="text-sm font-medium text-gray-900">
                $ {order.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}
              </div>
            </div>
            <div className="mb-4">
              <div className="text-sm font-semibold">Estado de orden</div>
              <div className="text-sm font-medium text-green-800 first-letter:uppercase">{status}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Product List */}
      <div className="flex-1">
        <div className="p-8">
          <ul className="-my-7 divide-y divide-gray-200">
            {order.cartItems.map((item, index) => (
              <OrderProductItem key={index} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;