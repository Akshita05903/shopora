import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-96">
        <h1 className="text-4xl font-bold text-center text-blue-600">Login</h1>

        <p className="text-center text-gray-500 mt-2">
          Welcome back to Shopora
        </p>

        <form className="mt-8 space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
            Login
          </button>
        </form>

        <p className="text-center mt-6">
          Don't have an account?
          <Link to="/signup" className="text-blue-600 font-semibold ml-2">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
