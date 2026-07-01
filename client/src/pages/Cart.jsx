import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Your Cart is Empty 🛒</h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-16 px-8">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

      {cart.map((item) => (
        <div
          key={item._id}
          className="flex items-center justify-between border rounded-lg p-4 mb-4"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />

            <div>
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p>₹{item.price}</p>
              <p>Quantity: {item.qty}</p>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(item._id)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}

      <h2 className="text-2xl font-bold text-right mt-8">
        Total: ₹{totalPrice}
      </h2>
    </div>
  );
}

export default Cart;
