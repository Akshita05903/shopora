import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchContext";

function ProductList() {
  const [products, setProducts] = useState([]);
  const { search } = useSearch();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Filter products according to search text
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="max-w-7xl mx-auto py-16 px-8">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Featured Products
      </h2>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Link
              key={product._id}
              to={`/product/${product._id}`}
              className="block"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 duration-300">
                <img
                  src={
                    product.image ||
                    "https://via.placeholder.com/300x250?text=Shopora"
                  }
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold">{product.name}</h3>

                  <p className="text-gray-600 mt-2">{product.description}</p>

                  <p className="text-2xl font-bold text-blue-600 mt-4">
                    ₹{product.price}
                  </p>

                  <button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <h2 className="text-4xl font-bold text-red-500">
            No Products Found 😔
          </h2>

          <p className="mt-4 text-gray-500">
            Try searching for another product.
          </p>
        </div>
      )}
    </section>
  );
}

export default ProductList;
