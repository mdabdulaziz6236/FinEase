import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaWallet } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-gray-900 via-gray-800 to-black text-gray-300 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/*  Website Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <FaWallet className="text-3xl text-indigo-400" />
              <span className="text-2xl font-bold bg-linear-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
                FinEase
              </span>
            </Link>
            <p className="text-sm text-gray-400">
              Take control of your finances — simple, insightful, and secure.
            </p>
          </div>

          {/*  Quick Links */}
          <div>
            <h5 className="text-sm font-semibold uppercase text-indigo-300 tracking-wider mb-4">
              Quick Links
            </h5>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/add-transaction"
                className="hover:text-pink-400 transition-colors"
              >
                Add Transaction
              </Link>
              <Link
                to="/my-transaction"
                className="hover:text-pink-400 transition-colors"
              >
                My Transactions
              </Link>
              <Link
                to="/reports"
                className="hover:text-pink-400 transition-colors"
              >
                Reports
              </Link>
              <Link
                to="/profile"
                className="hover:text-pink-400 transition-colors"
              >
                Profile
              </Link>
            </nav>
          </div>

          {/*  Legal */}
          <div>
            <h5 className="text-sm font-semibold uppercase text-indigo-300 tracking-wider mb-4">
              Legal
            </h5>
            <nav className="flex flex-col space-y-2">
              <Link className="hover:text-pink-400 transition-colors">
                Terms & Conditions
              </Link>
              <Link className="hover:text-pink-400 transition-colors">
                Privacy Policy
              </Link>
              <Link className="hover:text-pink-400 transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-sm font-semibold uppercase text-indigo-300 tracking-wider mb-4">
              Contact Us
            </h5>
            <address className="not-italic flex flex-col space-y-2">
              <a
                href="mailto:support@finease.com"
                className="hover:text-pink-400 transition-colors"
              >
                support@finease.com
              </a>
              <a
                href="tel:+880123456789"
                className="hover:text-pink-400 transition-colors"
              >
                (+880) 123-456-789
              </a>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-indigo-400 font-semibold">FinEase</span>. All
            rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link className="text-gray-400 hover:text-indigo-400 transition-colors">
              <FaFacebook size={20} />
            </Link>
            <Link className="text-gray-400 hover:text-pink-400 transition-colors">
              <FaInstagram size={20} />
            </Link>
            <Link className="text-gray-400 hover:text-blue-400 transition-colors">
              <FaXTwitter size={20} />
            </Link>
            <Link className="text-gray-400 hover:text-gray-100 transition-colors">
              <FaGithub size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
