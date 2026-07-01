import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  //console.log(product);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (
    <div className="max-w-6xl mx-auto py-16 px-8">
      <h1 className="text-4xl font-bold mb-8">Product Details</h1>

      <p className="text-gray-500 mb-8">Product ID: {id}</p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Product Image */}
        <img
          src={
            product.image || "https://via.placeholder.com/400x400?text=Shopora"
          }
          alt={product.name}
          className="w-full h-96 object-cover rounded-xl shadow-lg"
        />

        {/* Product Information */}
        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>

          <p className="text-blue-600 text-2xl font-bold mt-4">
            ₹{product.price}
          </p>

          <p className="mt-6 text-gray-600">{product.description}</p>

          <p className="mt-4 text-green-600 font-semibold">In Stock</p>

          <button
            onClick={() => addToCart(product)}
            className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
