import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-10 mt-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-white">🎮 GameSage</h2>
        <p className="text-sm mt-2 text-gray-400">
          Discover honest and in-depth game reviews, ratings, and more!
        </p>

        <div className="flex justify-center space-x-6 mt-6 text-lg font-semibold">
          <a href="#" className="hover:text-blue-400 transition duration-300">About</a>
          <a href="#" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition duration-300">Contact</a>
        </div>

        <div className="flex justify-center space-x-6 mt-6">
          <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300 text-2xl">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300 text-2xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300 text-2xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-red-500 transition duration-300 text-2xl">
            <FaYoutube />
          </a>
        </div>

        <p className="text-sm mt-6 text-gray-500">
          &copy; {new Date().getFullYear()} GameSage. All Rights Reserved.
        </p>

        <div className="mt-4">
          <span className="text-xs text-gray-500">Powered by ⚡ Gaming Enthusiasts</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

