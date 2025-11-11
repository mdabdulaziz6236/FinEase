import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";

import toast from "react-hot-toast";
import { auth } from "../../Firebase/Firebase.config";
import { Link } from "react-router";

const ResetPassword = () => {
  const [email, setEmail] = useState(() => {
    return localStorage.getItem("forgetEmail") || "";
  });
  const handleResetPassword = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setEmail("");
        e.target.reset();
        toast.success("Email sent Your Email.");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-indigo-900 via-gray-900 to-black px-4">
      <div className="max-w-sm w-full bg-gray-900/80 backdrop-blur-xl border border-gray-800 shadow-2xl rounded-2xl p-6">
        <title>Forget Password</title>

        <h2 className="text-3xl font-extrabold mb-6 text-center bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Reset Your Password
        </h2>

        <form onSubmit={handleResetPassword}>
          <input
            type="email"
            className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none placeholder-gray-400"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full py-3 font-semibold rounded-lg bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:from-purple-500 hover:to-indigo-600 transition duration-300"
          >
            Send Reset Link
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-4">
          Remember your password?{" "}
          <Link
            to="/login"
            className="text-indigo-400 hover:text-indigo-300 underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
