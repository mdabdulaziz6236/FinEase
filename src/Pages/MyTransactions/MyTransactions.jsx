import React, { useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import Loading from "../Loading/Loading";
import Swal from "sweetalert2";

const MyTransactions = () => {
  const { user } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    setLoading(true);
    fetch(
      `https://assignment-10-server-kappa-one.vercel.app/my-transactions?email=${user?.email}`,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user?.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((err) => toast.error(`${err.message}`))
      .finally(() => setLoading(false));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-10-server-kappa-one.vercel.app/transaction/${id}`,
          {
            method: "DELETE",
            headers: { authorization: `Bearer ${user?.accessToken}` },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.message === "Transaction deleted successfully") {
              setTransactions((prev) => prev.filter((t) => t._id !== id));
              Swal.fire("Deleted!", "Transaction has been deleted.", "success");
            }
          })
          .catch((err) => Swal.fire("Error!", err.message, "error"));
      }
    });
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 py-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
      <title>My Transaction</title>
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center text-indigo-700 dark:text-cyan-400">
        My Transactions
      </h2>

      {transactions.length === 0 ? (
        <div
          className="text-center text-lg p-10 
                     bg-white dark:bg-gray-800 
                     rounded-xl shadow-lg border border-gray-200 dark:border-gray-700
                     text-gray-600 dark:text-gray-400"
        >
          <p className="text-xl font-semibold mb-3">
            You have not added any transactions yet.
          </p>
          <Link
            to="/add-transaction"
            className="text-indigo-600 dark:text-cyan-400 hover:text-indigo-700 dark:hover:text-cyan-300 mt-2 inline-block font-medium underline"
          >
            Add your first transaction
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transactions.map((transaction) => {
            const isIncome = transaction.type === "income";
            const typeColor = isIncome
              ? "text-green-600 dark:text-green-400"
              : "text-red-600 dark:text-red-400";
            const borderAccent = isIncome
              ? "border-green-500"
              : "border-red-500";
            const bgAccent = isIncome
              ? "bg-green-100 dark:bg-green-900"
              : "bg-red-100 dark:bg-red-900";

            return (
              <div
                key={transaction._id}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col justify-between 
                            transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-1 
                            border border-gray-200 dark:border-gray-700
                            border-b-4 ${borderAccent}
                            `}
              >
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    {/* Type Tag */}
                    <span
                      className={`px-3 py-1 rounded-full capitalize text-sm font-bold ${bgAccent} ${typeColor} `}
                    >
                      {transaction.type}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(transaction.date).toLocaleDateString("en-GB")}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mb-2">
                    {/* Category */}
                    <h3 className="text-xl font-extrabold capitalize text-gray-800 dark:text-gray-100">
                      {transaction.category}
                    </h3>
                    {/* Amount */}
                    <p className={`text-3xl font-extrabold ${typeColor}`}>
                      {isIncome ? "+" : "-"}
                      {parseFloat(transaction.amount).toFixed(2)}
                    </p>
                  </div>

                  {/* Description */}
                  <p
                    className="text-gray-600 dark:text-gray-400 text-sm truncate"
                    title={transaction.description}
                  >
                    {transaction.description || "No description"}
                  </p>
                </div>

                {/* Actions Bar */}
                <div
                  className="flex justify-end items-center gap-4 border-t border-gray-200 dark:border-gray-700 
                              bg-gray-50 dark:bg-gray-900 px-5 py-2.5 rounded-b-xl"
                >
                  {/* View Details */}
                  <Link
                    to={`/transactionDetails/${transaction._id}`}
                    className="text-indigo-500 dark:text-cyan-400 hover:text-indigo-600 dark:hover:text-cyan-300 transition-colors"
                    title="View Details"
                  >
                    <FaEye size={20} />
                  </Link>
                  {/* Update */}
                  <Link
                    to={`/transaction/update/${transaction._id}`}
                    state={{ transaction }}
                    className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors"
                    title="Update"
                  >
                    <FaEdit size={20} />
                  </Link>
                  {/* Delete */}
                  <button
                    onClick={() => handleDelete(transaction._id)}
                    className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                    title="Delete"
                  >
                    <MdDelete size={20} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyTransactions;
