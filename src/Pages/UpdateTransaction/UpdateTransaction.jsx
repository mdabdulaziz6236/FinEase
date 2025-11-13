import React, { useState, useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../Context/AuthContext";

const UpdateTransaction = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [transaction, setTransaction] = useState(
    location.state?.transaction || null
  );
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const changedData = {
      type: e.target.type.value,
      category: e.target.category.value,
      amount: Number(e.target.amount.value),
      description: e.target.description.value,
      date: e.target.date.value,
    };

    try {
      setLoading(true);
      const res = await fetch(
        `https://assignment-10-server-kappa-one.vercel.app/transaction/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user.accessToken}`,
          },
          body: JSON.stringify(changedData),
        }
      );
      const data = await res.json();
      setLoading(false);

      if (data.message === "Transaction updated successfully") {
        Swal.fire("Success!", "Transaction has been updated.", "success");
        navigate(`/transactionDetails/${id}`);
      } else {
        Swal.fire("Error!", data.message || "Something went wrong.", "error");
      }
    } catch (err) {
      setLoading(false);
      Swal.fire("Error!", err.message, "error");
    }
  };

  if (loading) return <Loading />;

  if (!transaction)
    return (
      <p className="text-center mt-10 text-gray-700 dark:text-gray-400">
        Transaction not found.
      </p>
    );

  const inputClasses =
    "w-full mb-4 p-3 rounded-lg border focus:ring-2 focus:outline-none transition-all duration-200 " +
    "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100";
  const labelClasses = "block mb-2 font-semibold";

  return (
    <div className=" flex justify-center items-center px-4 py-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <title>Update Transaction</title>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-200 dark:border-gray-700 dark:shadow-cyan-500/10"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent">
          Update Transaction
        </h2>

        {/* Type */}
        <label
          className={`${labelClasses} text-indigo-600 dark:text-indigo-300`}
        >
          Type
        </label>
        <select
          name="type"
          value={transaction.type}
          onChange={handleChange}
          className={`${inputClasses} border-indigo-300 dark:border-indigo-500/30 focus:ring-indigo-500 focus:border-indigo-500`}
          required
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        {/* Category */}
        <label className={`${labelClasses} text-pink-600 dark:text-pink-300`}>
          Category
        </label>
        <input
          type="text"
          name="category"
          value={transaction.category}
          onChange={handleChange}
          className={`${inputClasses} border-pink-300 dark:border-pink-500/30 focus:ring-pink-500 focus:border-pink-500`}
          required
        />

        {/* Amount */}
        <label className={`${labelClasses} text-green-600 dark:text-green-300`}>
          Amount
        </label>
        <input
          type="number"
          name="amount"
          value={transaction.amount}
          onChange={handleChange}
          className={`${inputClasses} border-green-300 dark:border-green-500/30 focus:ring-green-500 focus:border-green-500`}
          required
        />

        {/* Description */}
        <label
          className={`${labelClasses} text-yellow-600 dark:text-yellow-300`}
        >
          Description
        </label>
        <textarea
          name="description"
          value={transaction.description}
          onChange={handleChange}
          className={`${inputClasses} border-yellow-300 dark:border-yellow-500/30 focus:ring-yellow-500 focus:border-yellow-500`}
          placeholder="Write a short note..."
        />

        {/* Date */}
        <label className={`${labelClasses} text-cyan-600 dark:text-cyan-300`}>
          Date
        </label>
        <input
          type="date"
          name="date"
          value={transaction.date}
          onChange={handleChange}
          className={`${inputClasses} mb-6 border-cyan-300 dark:border-cyan-500/30 focus:ring-cyan-500 focus:border-cyan-500`}
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg font-extrabold transition duration-150 
                      bg-indigo-600 dark:bg-cyan-500 text-white dark:text-gray-900"
        >
          Update Transaction
        </button>
      </form>
    </div>
  );
};

export default UpdateTransaction;
