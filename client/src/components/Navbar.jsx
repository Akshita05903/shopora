import { FaShoppingCart, FaHeart, FaUser, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext";

function Navbar() {
  const { cart } = useCart();
  const { search, setSearch } = useSearch();
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* LOGO */}
        <Link to="/">
          <h1 className="text-3xl font-bold text-blue-600">Shopora</h1>
        </Link>

        {/* SEARCH BAR */}
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-96">
          <FaSearch className="text-gray-500" />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigate(`/search?query=${search}`);
              }
            }}
            className="bg-transparent outline-none ml-3 w-full"
          />
        </div>

        {/* NAV LINKS */}
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/" className="hover:text-blue-600">
            Products
          </Link>

          <Link to="/" className="hover:text-blue-600">
            Categories
          </Link>

          {/* WISHLIST */}
          <Link to="/wishlist">
            <FaHeart className="text-xl cursor-pointer hover:text-red-500" />
          </Link>

          {/* CART */}
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl cursor-pointer hover:text-blue-600" />

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          {/* LOGIN */}
          <Link to="/login">
            <FaUser className="text-xl cursor-pointer hover:text-blue-600" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
