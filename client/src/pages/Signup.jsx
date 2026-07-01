import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-96">
        <h1 className="text-4xl font-bold text-center text-blue-600">Signup</h1>

        <p className="text-center text-gray-500 mt-2">
          Create your Shopora account
        </p>

        <form className="mt-8 space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

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
            Signup
          </button>
        </form>

        <p className="text-center mt-6">
          Already have an account?
          <Link to="/login" className="text-blue-600 font-semibold ml-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
