import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";

function SearchResults() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        const filtered = res.data.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase()),
        );
        setProducts(filtered);
      })
      .catch((err) => console.log(err));
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto py-10 px-8">
      <h1 className="text-4xl font-bold mb-8">Search Results for "{query}"</h1>

      {products.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-4xl font-bold text-red-500">
            No Products Found 😔
          </h2>

          <p className="text-gray-500 mt-4">
            Try searching with another keyword.
          </p>

          <Link
            to="/"
            className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product._id} to={`/product/${product._id}`}>
              <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">
                  <h2 className="text-xl font-bold">{product.name}</h2>

                  <p className="text-gray-600 mt-2">{product.description}</p>

                  <p className="text-blue-600 text-2xl font-bold mt-4">
                    ₹{product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
