import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const { signIn, setUser, setLoading, googleSignIn } = use(AuthContext);
  const location = useLocation();

  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const handleForgetPassword = () => {
    localStorage.setItem("forgetEmail", email); // email save
    navigate("/resetPassword");
  };

  const handleTogglePasswordShow = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
      setEmailError("");
    } else {
      setEmailError(
        " Please enter a valid email address (e.g., user@example.com)"
      );
      return;
    }
    const password = e.target.password.value;
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (regex.test(password)) {
      setPasswordError("");
    } else {
      setPasswordError(
        "Password must include uppercase, lowercase and be at least 6 characters long!"
      );

      return;
    }
    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success(`"user sign in" ${user.displayName}`);
        setUser(user);
        navigate(location?.state || "/");
        setLoading(false);
      })
      .catch((error) => {
        const errorMessage = error.code
          ? error.code.replace("auth/", "")
          : error.message;
        setLoading(false);
        setError(`Login failed: ${errorMessage}`);
        toast.error(`Login failed: ${errorMessage}`);
      });
  };
  const handleSignInWithGoogle = () => {
    googleSignIn()
      .then((result) => {
        const userGoogle = result.user;

        toast.success(`User Sign In ${userGoogle.displayName} `);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-black px-4">
      <title>Login</title>
      <div className="card bg-linear-to-b from-gray-900 to-gray-800 w-full max-w-sm shrink-0 shadow-2xl rounded-2xl overflow-hidden border border-gray-700/60">
        <h1 className="font-bold text-3xl text-center mt-6 bg-linear-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent drop-shadow-md">
          Login to your account
        </h1>

        <form onSubmit={handleLogIn} className="card-body space-y-5">
          <fieldset className="fieldset space-y-3">
            {/* Email */}
            <label className="label text-gray-300">Email</label>
            <input
              name="email"
              type="email"
              className="input bg-gray-800 text-gray-100 border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && (
              <p className="text-sm text-red-500 text-center">{emailError}</p>
            )}

            {/* Password */}
            <label className="label text-gray-300">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input bg-gray-800 text-gray-100 border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 transition"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={handleTogglePasswordShow}
                className="absolute right-7 top-2 btn btn-xs"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {passwordError && (
              <p className="text-sm text-red-500 text-center">
                {passwordError}
              </p>
            )}

            <div className="text-right">
              <Link
                onClick={handleForgetPassword}
                className="text-indigo-400 text-[12px] hover:text-pink-400 hover:underline transition"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-linear-to-r from-indigo-500 to-purple-600 hover:from-pink-500 hover:to-indigo-600 text-white py-2 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Login
            </button>
          </fieldset>

          {/* Register Link */}
          <p className="font-medium text-center text-gray-300">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-400 font-semibold hover:text-pink-400 hover:underline transition"
            >
              Register
            </Link>
          </p>

          {error && (
            <p className="text-center text-red-500 font-semibold mt-2">
              {error}
            </p>
          )}
        </form>

        {/* Google Button  */}
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
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
