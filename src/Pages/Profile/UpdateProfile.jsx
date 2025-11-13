import React, { use } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const UpdateProfile = () => {
  const { updateUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedInfo = {
      displayName: event.target.name.value,
      photoURL: event.target.photo.value,
    };
    updateUser(updatedInfo)
      .then(() => {
        toast.success("Profile Updated");
        navigate("/profile");
      })
      .catch((error) => {
        toast.error(error.message || error);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-indigo-100 via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 transition-colors duration-300">
      <title>Update Profile</title>

      <div className="w-full max-w-sm bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl p-6 transition-all duration-300">
        <h1 className="text-3xl font-extrabold text-center mb-6 bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
          Update Profile
        </h1>

        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all duration-200"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter Photo URL"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all duration-200"
            />
          </div>

          {/* Update Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 font-semibold rounded-lg bg-linear-to-r from-indigo-500 to-purple-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
