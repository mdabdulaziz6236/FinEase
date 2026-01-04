import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Get in Touch</h1>
          <p className="text-gray-600 dark:text-gray-400">Have questions? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-4 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-600 dark:text-indigo-300">
                <FaPhoneAlt className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">+880 1234 567 890</p>
                <p className="text-gray-600 dark:text-gray-400">Mon-Fri 9am-6pm</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-full text-purple-600 dark:text-purple-300">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">support@finease.com</p>
                <p className="text-gray-600 dark:text-gray-400">info@finease.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-4 bg-pink-100 dark:bg-pink-900 rounded-full text-pink-600 dark:text-pink-300">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Office</h3>
                <p className="text-gray-600 dark:text-gray-400">Level 4, FinTower, Gulshan-1,</p>
                <p className="text-gray-600 dark:text-gray-400">Dhaka, Bangladesh</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Name</label>
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Email</label>
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Message</label>
              <textarea rows="4" placeholder="How can we help?" className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition duration-300">
              Send Message
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;