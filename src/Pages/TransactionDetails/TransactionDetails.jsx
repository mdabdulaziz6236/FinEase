import React, { useState, useEffect, use } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import Loading from "../Loading/Loading";

const TransactionDetails = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);

  const [transaction, setTransaction] = useState(null);
  const [categoryTotal, setCategoryTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      return;
    }
    setLoading(true);
    fetch(
      `https://assignment-10-server-kappa-one.vercel.app/transaction/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTransaction(data.transaction);
        setCategoryTotal(data.categoryTotal);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching transaction details:", err);
        setLoading(false);
      });
  }, [id, user]);

  if (loading) return <Loading />;

  if (!transaction)
    return (
      <div
        className="text-center my-10 p-8 
                   bg-white dark:bg-gray-800 
                   max-w-md mx-auto rounded-xl shadow-lg border border-gray-200 dark:border-gray-700
                   text-gray-700 dark:text-gray-400"
      >
        <title>Transaction Details</title>
        Transaction not found.
      </div>
    );
  const isIncome = transaction.type === "income";
  const typeColorClass = isIncome
    ? "text-green-600 dark:text-green-400"
    : "text-red-600 dark:text-red-400";
  const headerBgClass = isIncome
    ? "bg-linear-to-r from-green-600 to-emerald-700"
    : "bg-linear-to-r from-red-600 to-rose-700";

  return (
    <div className="flex justify-center items-center  py-10 px-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
      <title>Transaction Details</title>
      <div
        className="max-w-2xl w-full 
                   bg-white dark:bg-gray-800 shadow-2xl 
                   rounded-3xl border border-gray-200 dark:border-gray-700 
                   dark:shadow-indigo-500/15 overflow-hidden"
      >
        {/* Header (Accent linear) */}
        <div className={`p-6 sm:p-8 ${headerBgClass} text-white`}>
          <h2 className="text-3xl sm:text-4xl font-extrabold capitalize drop-shadow-md">
            {transaction.type}
          </h2>
          <p className="text-lg opacity-90 capitalize">
            {transaction.category}
          </p>
        </div>

        {/* Details Content */}
        <div className="p-6 sm:p-8 space-y-6 sm:space-y-8">
          {/* Description Block */}
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              <strong className="text-indigo-600 dark:text-cyan-400 font-bold">
                Description:
              </strong>{" "}
              <span className="text-gray-800 dark:text-gray-100">
                {transaction.description || "N/A"}
              </span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {/* Amount Card */}
            <div className="text-center bg-gray-100 dark:bg-gray-700/60 p-4 sm:p-6 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-cyan-400 transition transform hover:scale-[1.01]">
              <p className="text-sm sm:text-lg text-gray-500 dark:text-gray-400 font-medium">
                Amount
              </p>
              <p
                className={`text-2xl sm:text-3xl font-extrabold mt-1 ${typeColorClass}`}
              >
                {isIncome ? "+" : "-"}
                {parseFloat(transaction.amount).toFixed(2)}
              </p>
            </div>

            {/* Date Card */}
            <div className="text-center bg-gray-100 dark:bg-gray-700/60 p-4 sm:p-6 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-pink-500 dark:hover:border-purple-400 transition transform hover:scale-[1.01]">
              <p className="text-sm sm:text-lg text-gray-500 dark:text-gray-400 font-medium">
                Date
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
                {new Date(transaction.date).toLocaleDateString("en-GB")}
              </p>
            </div>
          </div>

          <hr className="border-gray-200 dark:border-gray-700" />

          {/* Category Total Summary Card */}
          <div
            className="bg-linear-to-r from-indigo-50 dark:from-gray-900/60 to-purple-50 dark:to-gray-900/60
                       p-6 rounded-xl border border-indigo-200 dark:border-indigo-900 
                       shadow-md dark:shadow-lg dark:shadow-indigo-500/20"
          >
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-medium">
              Total{" "}
              <span className={`font-extrabold ${typeColorClass}`}>
                {isIncome ? "Income" : "Expense"}
              </span>{" "}
              for{" "}
              <span className="text-indigo-600 dark:text-cyan-400 font-extrabold capitalize">
                "{transaction.category}"
              </span>{" "}
              category
            </p>
            <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 tracking-wide">
              {/* Amount formatting updated to Taka denomination */}
              {parseFloat(categoryTotal).toFixed(2)} Taka
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
