import React, { use } from "react";
import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
};

const Banner = () => {
  const { user } = use(AuthContext);

  return (
    <motion.section
      className="relative overflow-hidden 
                 bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-500 
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                 text-white 
                 py-7 md:py-10 lg:py1-0  px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 dark:bg-indigo-400/10 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -top-32 -right-32 w-120 h-120 bg-white/10 dark:bg-purple-400/10 rounded-full blur-3xl opacity-40"></div>

      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-linear(rgba(255,255,255,0.05) 1px, transparent 1px), linear-linear(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "2.5rem 2.5rem",
        }}
      >
        <div
          className="absolute inset-0 opacity-10 dark:opacity-50"
          style={{
            backgroundImage:
              "linear-linear(rgba(0,0,0,0.2) 1px, transparent 1px), linear-linear(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)",
            backgroundSize: "2.5rem 2.5rem",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg"
          variants={itemVariants}
        >
          Take Control of Your Finances with <br />
          <span className="text-yellow-300 dark:text-cyan-400">FinEase</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl font-light opacity-95 mb-10 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Welcome, {user ? user.displayName : "Guest"} <br />
          Track your expenses, plan your budget, and grow your savings — all in
          one place.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-5"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/add-transaction"
              className="inline-block 
                         bg-white text-indigo-700 
                         dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-600
                         font-semibold py-3 px-8 rounded-full 
                         shadow-lg dark:shadow-xl 
                         hover:bg-gray-100 transition"
            >
              Add Transaction
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/reports"
              className="inline-flex items-center gap-2 
                         border border-white/50 
                         hover:border-white 
                         py-3 px-8 rounded-full font-medium 
                         hover:bg-white/10 transition"
            >
              View Reports <FaArrowRight className="text-sm" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Banner;
