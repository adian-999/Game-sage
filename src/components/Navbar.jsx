
import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const pathName = location.pathname;

  const handleLogout = () => {
    logout()
      .then(() =>{
        console.log("user logged out")
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "successfully logged out",
          showConfirmButton: false,
          timer: 1500
        });
      } )

      .catch(error => console.log(error));
  };

  return (
    <div className="navbar bg-purple-950 shadow-sm px-4 md:px-8">
      {/* Left */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52"
          >
            <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink to="/allreviews" className={({ isActive }) => isActive ? "active" : ""}>All Reviews</NavLink></li>
            <li><NavLink to="/addreviews" className={({ isActive }) => isActive ? "active" : ""}>Add Reviews</NavLink></li>
           
            <li><NavLink to="/watchlist" className={({ isActive }) => isActive ? "active" : ""}>Game WatchList</NavLink></li>
          </ul>
        </div>
        {/* Logo */}
        <div className="flex items-center gap-3 text-white">
          <img
            className="w-12 h-12 rounded-full"
            src="/logo/f6cde031-f81b-4495-85d6-f05443c1adbe.jpeg"
            alt="logo"
          />
          <h2 className="font-bold text-2xl">GameSage</h2>
        </div>
      </div>

      {/* Center (for large screens only) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-8 text-white">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/allreviews" className={({ isActive }) => isActive ? "active" : ""}>All Reviews</NavLink></li>
          <li><NavLink to="/addreviews" className={({ isActive }) => isActive ? "active" : ""}>Add Reviews</NavLink></li>

          <li><NavLink to="/watchlist" className={({ isActive }) => isActive ? "active" : ""}>Game WatchList</NavLink></li>
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4 text-white">
            <p className="hidden md:block">{user.displayName}</p>
            <img
              src={user.photoURL || "/default-avatar.png"}
              alt="User"
              className="w-10 h-10 rounded-full object-cover"
            />
            <button
              onClick={handleLogout}
              className="btn bg-red-500 hover:bg-red-800 text-white btn-sm"
            >
              LogOut
            </button>
          </div>
        ) : (
          <div className="flex gap-3">


            {pathName !== "/login" && (
              <Link className="btn btn-sm" to="/login">
                Login
              </Link>
            )}
            {pathName !== "/register" && (
              <Link className="btn btn-sm" to="/register">
                Register
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

