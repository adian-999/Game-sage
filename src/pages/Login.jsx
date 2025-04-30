
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { signIn, googleSignIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((result) => {
        console.log("User signed in:", result.user);
        setError("");
        navigate("/");
      })
      .catch((error) => {
        console.error("Login error:", error);
        setError(error.message);
      });
  };

  const handleGooglesignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log("User signed in with Google:", result.user);
        setError("");
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Successfully logged in",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
        setError(error.message);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="bg-white p-8 rounded-3xl shadow-xl w-full sm:w-[100px] md:w-[700px] lg:w-[800px]">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Login to Your Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-lg font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-purple-950 text-white rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 transition-all"
            >
              Login
            </button>
          </form>

          {/* Google Sign-In */}
          <button
            onClick={handleGooglesignIn}
            className="flex items-center justify-center w-full px-6 py-3 mt-4 text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:ring-4 focus:ring-red-300 transition-all"
          >
            <div className="text-2xl px-3">
              <FcGoogle />
            </div>
            Sign in with Google
          </button>

          {/* Error Message */}
          {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

          <p className="text-gray-600 my-6 text-center">
            Don't have an Account? Please{" "}
            <span className="text-red-600">
              <Link to="/register">Register</Link>
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

