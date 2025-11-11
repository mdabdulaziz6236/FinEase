// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {FaTrophy,FaChartLine,FaMoneyBillWave,} from "react-icons/fa";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};
const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
};

const AchieveGoals = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-950 py-15 lg:py-25 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* --- Section Heading --- */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Your Goals, Within Reach
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Managing money isn't just about numbers. It's about building the
            future you dream of, one step at a time.
          </p>
        </motion.div>

        {/* Motivational Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Card 1 */}
          <motion.div
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
            variants={cardVariants}
          >
            <FaMoneyBillWave className="text-4xl text-indigo-500 mb-5" />{" "}
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Plan Your Savings
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Set and track tangible goals, from a new laptop to your dream
              vacation.
            </p>
          </motion.div>

         {/*  Card 2 */}
          <motion.div
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
            variants={cardVariants}
          >
            <FaChartLine className="text-4xl text-green-500 mb-5" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              See Your Growth
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Watch your net worth grow as you make smarter financial decisions
              every day.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
            variants={cardVariants}
          >
            <FaTrophy className="text-4xl text-yellow-500 mb-5" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Achieve Milestones
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Celebrate when you pay off debt or hit a new savings milestone.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchieveGoals;
