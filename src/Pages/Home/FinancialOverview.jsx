import React, { useState, useEffect, useContext } from "react";
import {
  FaArrowCircleUp,
  FaArrowCircleDown,
  FaChartLine,
} from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router";

const FinancialOverview = () => {
  const { user } = useContext(AuthContext);
  const [overviewData, setOverviewData] = useState({
    totalIncome: 0,
    totalExpense: 0,
    totalBalance: 0,
  });

  useEffect(() => {
    if (user && user.accessToken) {
      fetch("https://assignment-10-server-kappa-one.vercel.app/totalOverview", {
        method: "GET",
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setOverviewData(data);
          }
        })
        .catch((err) => {
          console.error("Failed to fetch overview", err);
        });
    }
  }, [user]);
  const getBalanceColor = (balance) => {
    if (balance > 0) {
      return "text-green-600 dark:text-green-400";
    } else if (balance < 0) {
      return "text-red-600 dark:text-red-400";
    }
    return "text-indigo-600 dark:text-cyan-400";
  };
  const CardStyle =
    "p-6 sm:p-8 rounded-3xl shadow-2xl transition duration-300 transform hover:scale-[1.03] border";
  const CardColorClasses =
    "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-gray-300/50 dark:shadow-indigo-500/15";
  const InfoCardColorClasses =
    "bg-indigo-50 dark:bg-gray-800 border-indigo-300 dark:border-indigo-700 dark:shadow-lg dark:shadow-cyan-500/20";

  return (
    <section className="md:py-14 py-8 lg:py-20 px-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-4 tracking-tight text-indigo-700 dark:text-cyan-400">
          Your Financial Snapshot
        </h2>
        <p className="text-lg sm:text-xl text-center mb-5 md:mb-10 lg:mb-14 text-gray-600 dark:text-gray-400 font-light">
          Here's your real-time financial overview.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {!user ? (
            <>
              <div className="hidden md:block"></div>
              <Link
                to="/login"
                className={`${CardStyle} ${InfoCardColorClasses} flex flex-col items-center justify-center hover:bg-indigo-200 dark:hover:bg-gray-700`}
              >
                <FaChartLine className="text-4xl sm:text-5xl text-indigo-700 dark:text-cyan-400 mb-5 animate-pulse" />
                <p className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200 text-center">
                  Please log in to see your financial overview
                </p>
                <p className="mt-3 sm:mt-4 text-indigo-600 dark:text-cyan-400 font-extrabold hover:underline">
                  Click here to login
                </p>
              </Link>
              <div className="hidden md:block"></div>
            </>
          ) : (
            <>
              {/* Total Balance Card*/}
              <div className={`${CardStyle} ${CardColorClasses}`}>
                <FaChartLine className="text-4xl text-indigo-500 dark:text-cyan-400 mb-3" />
                <p className="text-lg sm:text-xl font-semibold text-gray-500 dark:text-gray-300">
                  Total Balance
                </p>
                <p
                  className={`text-3xl lg:text-5xl md:text-4xl  font-extrabold mt-1 ${getBalanceColor(
                    overviewData.totalBalance
                  )}`}
                >
                  {overviewData.totalBalance.toFixed(2)}
                </p>
              </div>

              {/* Total Income Card */}
              <div className={`${CardStyle} ${CardColorClasses}`}>
                <FaArrowCircleUp className="text-4xl text-green-600 dark:text-green-400 mb-3" />
                <p className="text-lg sm:text-xl font-semibold text-gray-500 dark:text-gray-300">
                  Total Income
                </p>
                <p className="text-3xl lg:text-5xl md:text-4xl font-extrabold mt-1 text-green-600 dark:text-green-400">
                  {overviewData.totalIncome.toFixed(2)}
                </p>
              </div>

              {/* Total Expenses Card */}
              <div className={`${CardStyle} ${CardColorClasses}`}>
                <FaArrowCircleDown className="text-4xl text-red-600 dark:text-red-400 mb-3" />
                <p className="text-lg sm:text-xl font-semibold text-gray-500 dark:text-gray-300">
                  Total Expenses
                </p>
                <p className="text-3xl lg:text-5xl md:text-4xl font-extrabold mt-1 text-red-600 dark:text-red-400">
                  {overviewData.totalExpense.toFixed(2)}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FinancialOverview;
