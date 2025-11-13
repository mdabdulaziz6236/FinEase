import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaWallet } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  const LinkColorClass = 
    "text-gray-700 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors font-medium";

  return (
    <footer 
      className="bg-linear-to-b  dark:from-gray-900 dark:via-gray-800 dark:to-black
                 text-gray-800 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 shadow-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Website Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <FaWallet className="text-3xl text-indigo-600 dark:text-cyan-400" />
              <span 
                className="text-2xl font-bold bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent"
              >
                FinEase
              </span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Take control of your finances — simple, insightful, and secure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 
              className="text-sm font-bold uppercase text-indigo-600 dark:text-indigo-300 tracking-wider mb-4 border-b border-indigo-200 dark:border-indigo-800 pb-1"
            >
              Quick Links
            </h5>
            <nav className="flex flex-col space-y-2">
              <Link to="/add-transaction" className={LinkColorClass}>
                Add Transaction
              </Link>
              <Link to="/my-transaction" className={LinkColorClass}>
                My Transactions
              </Link>
              <Link to="/reports" className={LinkColorClass}>
                Reports
              </Link>
              <Link to="/profile" className={LinkColorClass}>
                Profile
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h5 

              className="text-sm font-bold uppercase text-indigo-600 dark:text-indigo-300 tracking-wider mb-4 border-b border-indigo-200 dark:border-indigo-800 pb-1"
            >
              Legal
            </h5>
            <nav className="flex flex-col space-y-2">
              <Link className={LinkColorClass}>
                Terms & Conditions
              </Link>
              <Link className={LinkColorClass}>
                Privacy Policy
              </Link>
              <Link className={LinkColorClass}>
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h5 
              className="text-sm font-bold uppercase text-indigo-600 dark:text-indigo-300 tracking-wider mb-4 border-b border-indigo-200 dark:border-indigo-800 pb-1"
            >
              Contact Us
            </h5>
            <address className="not-italic flex flex-col space-y-2">
              <a
                href="mailto:support@finease.com"
                className={LinkColorClass}
              >
                support@finease.com
              </a>
              <a
                href="tel:+880123456789"
                className={LinkColorClass}
              >
                (+880) 123-456-789
              </a>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-gray-300 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-indigo-600 dark:text-cyan-400 font-extrabold">FinEase</span>. All
            rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link className="text-indigo-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
              <FaFacebook size={20} />
            </Link>
            <Link className="text-indigo-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-cyan-400 transition-colors">
              <FaInstagram size={20} />
            </Link>
            <Link className="text-indigo-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-cyan-400 transition-colors">
              <FaXTwitter size={20} />
            </Link>
            <Link className="text-indigo-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-100 transition-colors">
              <FaGithub size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;