import React, { use, useState } from "react";
// import { useNavigate } from 'react-router';

import { Link, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, setUser, updateUser, googleSignIn } =
    use(AuthContext);

  const handleTogglePasswordShow = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    if (name.length < 5) {
      setNameError("Name should be more then 5 character.");
      return;
    } else {
      setNameError("");
    }
    const email = event.target.email.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
      setEmailError("");
    } else {
      setEmailError(
        " Please enter a valid email address (e.g., user@example.com)"
      );
      return;
    }
    const photoUrl = event.target.photoUrl.value;
    const password = event.target.password.value;
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (regex.test(password)) {
      setPasswordError("");
    } else {
      setPasswordError(
        "Password must include uppercase, lowercase and be at least 6 characters long!"
      );
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateUser({
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoUrl });
            navigate("/");
          })
          .catch((error) => {
            toast.error(error);
            setUser(user);
          });
        toast.success("Register Successfully.");
      })
      .catch((error) => {
        const errorMessage = error.message;

        toast.error(errorMessage);
      });
  };
  const handleSignInWithGoogle = () => {
    googleSignIn()
      .then((result) => {
        const userGoogle = result.user;
        toast.success(`User Sign In ${userGoogle.displayName} `);
        
        navigate("/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
<div className="flex justify-center items-center min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-black px-4">
  <title>Register</title>
  <div className="card bg-linear-to-b from-gray-900 to-gray-800 w-full max-w-sm shrink-0 shadow-2xl rounded-2xl overflow-hidden border border-gray-700/60">
    <h1 className="font-bold text-3xl text-center mt-6 bg-linear-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent drop-shadow-md">
      Register your account
    </h1>

    <form onSubmit={handleRegister} className="card-body space-y-5">
      <fieldset className="fieldset space-y-3">
        {/* Name */}
        <label className="label text-gray-300">Your Name</label>
        <input
          name="name"
          type="text"
          className="input bg-gray-800 text-gray-100 border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="Enter Your Name"
          required
        />
        {nameError && (
          <p className="text-sm text-red-500 text-center">{nameError}</p>
        )}

        {/* Email */}
        <label className="label text-gray-300">Email</label>
        <input
          name="email"
          type="email"
          className="input bg-gray-800 text-gray-100 border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="Enter Your Email"
          required
        />
        {emailError && (
          <p className="text-sm text-red-500 text-center">{emailError}</p>
        )}

        {/* Photo URL */}
        <label className="label text-gray-300">Photo URL</label>
        <input
          name="photoUrl"
          type="text"
          className="input bg-gray-800 text-gray-100 border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 transition"
          placeholder="Enter Your Photo URL"
          required
        />

        {/* Password */}
        <label className="label text-gray-300">Password</label>
        <div className="relative">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            className="input bg-gray-800 text-gray-100 border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Enter Your Password"
            required
          />
          <button
            type="button"
            onClick={handleTogglePasswordShow}
            className="absolute right-7 top-2.5 text-gray-400 hover:text-indigo-400 transition"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {passwordError && (
          <p className="text-sm text-red-500 text-center">{passwordError}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-pink-500 hover:to-indigo-600 text-white py-2 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Sign Up
        </button>
      </fieldset>

      <p className="font-medium text-center text-gray-300">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-indigo-400 font-semibold hover:text-pink-400 hover:underline transition"
        >
          Login
        </Link>
      </p>
    </form>

    {/* Google Sign Up */}
    <div className="flex justify-center pb-6 mt-2">
      <button
        onClick={handleSignInWithGoogle}
        className="btn hover:bg-black hover:text-white bg-white text-black border-[#e5e5e5]"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Sign up with Google
      </button>
    </div>
  </div>
</div>


  );
};

export default Register;
