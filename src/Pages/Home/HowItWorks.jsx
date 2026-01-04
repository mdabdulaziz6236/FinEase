import React from "react";
import { motion } from "framer-motion";
import { FaUserPlus, FaWallet, FaChartPie } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Create Account",
    desc: "Sign up for free in seconds and setup your secure profile.",
  },
  {
    icon: <FaWallet />,
    title: "Add Transactions",
    desc: "Easily log your income and expenses manually.",
  },
  {
    icon: <FaChartPie />,
    title: "Analyze Reports",
    desc: "See where your money goes with detailed charts and insights.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12">
          How FinEase Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-5xl text-indigo-600 dark:text-cyan-400 mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;