import { useContext, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {

  const navigate = useNavigate();
  const [error,setError]=useState();

  const {createUser}=useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    try {
      // Create user with email and password
      const result = await createUser(email, password);
      const user = result.user;

      console.log(user);

      // Update profile with name and photoURL
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });

      navigate("/");

      console.log("User profile updated");

    } catch (error) {
      console.error("Error during registration or updating profile:", error);
      setError(error.message)
    }
  };


  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
  <div className="bg-white p-8 rounded-3xl shadow-xl w-full sm:w-[100px] md:w-[700px] lg:w-[800px]">
    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create Your Account</h2>
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* name field */}

    <div>
              <label className="block text-lg font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>
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

      {/* Photo URL Field */}
      <div>
        <label className="block text-lg font-medium text-gray-700">Profile Photo URL</label>
        <input
          type="text"
          name="photo"
          placeholder="Enter your photo URL"
          className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          required
        />
      </div>



      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 mt-4 bg-purple-950 text-white rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 transition-all"
      >
        Register
      </button>
      <p className="text-red-600">{error}</p>
    </form>
    <p className="text-gray-600 my-6">Already have an Account? Please <span className="text-red-600"><Link to='/login'>Login</Link></span></p>
  </div>
</div>

  <Footer></Footer>
    </div>

  );
};

export default Register;
