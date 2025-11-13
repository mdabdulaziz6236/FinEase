import React, { use } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { ImProfile } from "react-icons/im";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";

const Navbar = () => {
  const { user, LogOut } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const links = (
    <>
      {user ? (
        <>
          <li className="text-[18px] font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-500 dark:text-cyan-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-cyan-400"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-[18px] font-medium">
            <NavLink
              to="/add-transaction"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-500 dark:text-cyan-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-cyan-400"
              }
            >
              Add Transaction
            </NavLink>
          </li>
          <li className="text-[18px] font-medium">
            <NavLink
              to="/my-transaction"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-500 dark:text-cyan-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-cyan-400"
              }
            >
              My Transaction
            </NavLink>
          </li>
          <li className="text-[18px] font-medium">
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-500 dark:text-cyan-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-cyan-400"
              }
            >
              Reports
            </NavLink>
          </li>
        </>
      ) : (
        <>
          {" "}
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[18px] font-medium text-pink-500 dark:text-cyan-400"
                  : "text-[18px] font-medium text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-cyan-400"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[18px] font-medium text-pink-500 dark:text-cyan-400"
                  : "text-[18px] font-medium text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-cyan-400"
              }
              to="/register"
            >
              Register
            </NavLink>
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

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className="drop-shadow-lg sticky top-0 z-50 
                 bg-white text-gray-900 shadow-md
                 dark:bg-gray-900 dark:text-white dark:shadow-xl dark:shadow-gray-800/50"
    >
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-gray-700 dark:text-white"
            >
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
              tabIndex={0}
              className="menu menu-sm dropdown-content 
                         bg-gray-100 dark:bg-gray-700 
                         rounded-box z-1 mt-3 w-52 p-2 shadow"
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
              className="hover:underline 
                         text-pink-500 dark:text-cyan-400 
                         font-bold text-2xl lg:text-3xl"
            >
              FinEase
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <button
            onClick={handleTheme}
            className="p-2 rounded-full border-2 dark:border-none border-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {theme === "dark" ? (
              <HiSun className="w-5 h-5 text-yellow-400" />
            ) : (
              <HiMoon className="w-5 h-5 text-gray-700" />
            )}
          </button>

          {user ? (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-9 border-2 border-gray-300 dark:border-cyan-400 bg-base-100 rounded-full">
                  <img
                    alt="User Avatar"
                    referrerPolicy="no-referrer"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content 
                           bg-gray-100 dark:bg-gray-700 
                           rounded-box z-50 mt-3 w-52 p-2 shadow 
                           text-gray-700 dark:text-white"
              >
                <div className=" pb-3 border-b border-b-gray-300 dark:border-b-gray-600">
                  <li className="text-sm font-bold dark:text-cyan-400">
                    {user.displayName}
                  </li>
                  <li className="text-xs">{user.email}</li>
                </div>
                <li className="my-3">
                  <Link to={"/profile"}>
                    <ImProfile className="text-[20px]" /> Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn rounded btn-primary 
                               bg-pink-500 hover:bg-pink-600 border-none 
                               dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="btn rounded  
                         bg-pink-500 hover:bg-pink-600 border-none 
                         dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white"
            >
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
