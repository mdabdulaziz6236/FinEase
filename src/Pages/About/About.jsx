import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaHandshake } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            About <span className="text-indigo-600 dark:text-cyan-400">FinEase</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We are on a mission to simplify personal finance management for everyone, everywhere.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Team working" 
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Founded in 2024, FinEase started with a simple idea: Financial freedom shouldn't be complicated. We noticed that most finance apps were either too simple or too complex for the average user.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Today, we help thousands of users track their expenses, set budgets, and achieve their financial goals through our intuitive and secure platform.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition">
            <FaLightbulb className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Innovation</h3>
            <p className="text-gray-600 dark:text-gray-400">Constantly improving to provide the best features.</p>
          </div>
          <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition">
            <FaUsers className="text-4xl text-indigo-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Community</h3>
            <p className="text-gray-600 dark:text-gray-400">We listen to our users and grow together.</p>
          </div>
          <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition">
            <FaHandshake className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Trust</h3>
            <p className="text-gray-600 dark:text-gray-400">Your data security is our top priority.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;