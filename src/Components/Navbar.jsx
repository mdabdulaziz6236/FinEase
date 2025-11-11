import React, { use, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { ImProfile } from "react-icons/im";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, LogOut } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const links = (
    <>
      {user ? (
        <>
          <li className="text-[18px] font-medium">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-[18px] font-medium">
            <NavLink to="/profile">My Profile</NavLink>
          </li>
          <li className="text-[18px] font-medium">
            <NavLink to="/add-transaction">Add Transaction</NavLink>
          </li>
          <li className="text-[18px] font-medium">
            <NavLink to="/my-transaction">My Transaction</NavLink>
          </li>
          <li className="text-[18px] font-medium">
            <NavLink to="/reports">Reports</NavLink>
          </li>
        </>
      ) : (
        <>
          {" "}
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
    </>
  );
  const handleLogOut = () => {
    LogOut()
      .then(() => {
        toast.success("Logged out successfully!");
        navigate("/", { state: { from: location.pathname } });
      })
      .catch((error) => {
        if (error) {
          toast.error("Logout failed!");
        }
      });
  };
  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };
  return (
    <div className=" drop-shadow-lg sticky text-white top-0 z-50 bg-gray-900  shadow-sm">
      <div className=" navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-gray-600 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <img
              className="w-9"
              src="https://i.ibb.co.com/hF94bSFJ/download-1.png"
              alt="financial-image"
            />
            <Link
              to="/"
              className="hover:underline text-pink-500 hover:text-blue-500 font-bold text-3xl"
            >
              FinEase
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          {user ? (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-9 border-2 border-gray-300 bg-base-100 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    referrerPolicy="no-referrer"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu  menu-sm dropdown-content bg-gray-600 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <div className=" pb-3 border-b border-b-gray-200">
                  <li className="text-sm font-bold">{user.displayName}</li>
                  <li className="text-xs">{user.email}</li>
                </div>
                <li className="mt-3">
                  <Link to={"/profile"}>
                    <ImProfile className="text-[20px]" /> Profile
                  </Link>
                </li>
                <div className=" p-2">
                  <input
                    onChange={(e) => handleTheme(e.target.checked)}
                    type="checkbox"
                    defaultChecked={localStorage.getItem("theme") === "dark"}
                    className="toggle text-pink-600"
                  />
                </div>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn rounded btn-primary text-white"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/login"} className="btn rounded btn-primary text-white">
              {" "}
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
