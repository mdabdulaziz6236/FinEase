import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router";

const Profile = () => {
  const { user } = use(AuthContext);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <h2 className="text-xl text-gray-700 dark:text-gray-300">
          No user found. Please log in.
        </h2>
      </div>
    );
  }

  return (
    <div className="py-10 flex items-center justify-center bg-linear-to-br from-indigo-100 via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen transition-colors duration-300">
      <title>Profile</title>

      <div className="max-w-md w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300">
        {/* Cover Section */}
        <div className="relative h-32 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-900 shadow-lg ring-4 ring-indigo-500/50"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="pt-16 pb-8 px-6 text-center">
          <h2 className="text-3xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            {user.displayName || "Unknown User"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">{user.email}</p>

          {/* Verification Status */}
          <div className="mt-4">
            {user.emailVerified ? (
              <span className="px-3 py-1 text-sm text-green-700 dark:text-green-300 bg-green-200/60 dark:bg-green-800/40 border border-green-400 dark:border-green-700 rounded-full">
                ✅ Email Verified
              </span>
            ) : (
              <span className="px-3 py-1 text-sm text-red-700 dark:text-red-300 bg-red-200/60 dark:bg-red-800/40 border border-red-400 dark:border-red-700 rounded-full">
                ❌ Email Not Verified
              </span>
            )}
          </div>

          {/* Metadata */}
          <div className="mt-6 text-left bg-gray-100 dark:bg-gray-800/60 p-5 rounded-xl text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
            <p className="mb-2">
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                Created At:
              </span>{" "}
              {new Date(parseInt(user.metadata.createdAt)).toLocaleString()}
            </p>
            <p>
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                Last Login:
              </span>{" "}
              {new Date(parseInt(user.metadata.lastLoginAt)).toLocaleString()}
            </p>
          </div>

          {/* Update Profile Button */}
          <div className="mt-8">
            <Link
              to="/update-profile"
              className=" py-2 px-3 bg-linear-to-r from-indigo-500 to-purple-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 inline-block text-center"
            >
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
