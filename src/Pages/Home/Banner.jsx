import React, { useContext } from "react";
import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion  } from "framer-motion";
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
  const { user } = useContext(AuthContext);

  return (
    <motion.section
      className="relative overflow-hidden bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-500 text-white py-15 lg:33 md:py-23 px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Subtle background glow circles */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -top-32 -right-32 w-120 h-120 bg-white/10 rounded-full blur-3xl opacity-40"></div>

      {/* Pattern grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "2.5rem 2.5rem",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg"
          variants={itemVariants}
        >
          Take Control of Your Finances with <br />
          <span className="text-yellow-300">FinEase</span>
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
              className="inline-block bg-white text-indigo-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              Add Transaction
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/reports"
              className="inline-flex items-center gap-2 border border-white/50 py-3 px-8 rounded-full font-medium hover:bg-white/10 transition"
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
