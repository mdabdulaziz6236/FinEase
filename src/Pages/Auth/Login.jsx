import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const { signIn, setUser, setLoading, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const handleTogglePasswordShow = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleForgetPassword = () => {
    localStorage.setItem("forgetEmail", email);
    navigate("/resetPassword");
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address (e.g., user@example.com)");
      return;
    } else {
      setEmailError("");
    }

    // Password validation
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!regex.test(password)) {
      setPasswordError("Password must include uppercase, lowercase and be at least 6 characters long!");
      return;
    } else {
      setPasswordError("");
    }

    // Sign in
    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success(`Welcome back, ${user.displayName || "User"}!`);
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
        toast.success(`Signed in as ${userGoogle.displayName}`);
        navigate(location?.state || "/");
      })
      .catch((error) => toast.error(error.message));
  };

  const InputClasses =
    "w-full px-4 py-2 rounded-lg border shadow-sm transition-all duration-200 " +
    "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-400 focus:border-indigo-500 dark:border-gray-700";
  const LabelClasses =
    "block mb-1 font-medium text-gray-700 dark:text-gray-300";

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <title>Login</title>
      <div className="card bg-white dark:bg-gray-800 w-full max-w-sm shrink-0 shadow-2xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 dark:shadow-indigo-500/15">
        <h1 className="font-extrabold text-3xl text-center mt-8 bg-linear-to-r from-indigo-600 to-pink-600 dark:from-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent drop-shadow-md">
          Login to your account
        </h1>

        <form onSubmit={handleLogIn} className="card-body space-y-5 pt-6">
          <fieldset className="fieldset space-y-4">
            {/* Email */}
            <div>
              <label className={LabelClasses}>Email</label>
              <input
                name="email"
                type="email"
                className={`${InputClasses} border-gray-300`}
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailError && (
                <p className="text-sm text-red-600 dark:text-red-500 text-center">
                  {emailError}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className={LabelClasses}>Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className={`${InputClasses} border-gray-300`}
                  placeholder="Enter Your Password"
                  required
                />
                <button
                  type="button"
                  onClick={handleTogglePasswordShow}
                  className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition"
                >
                  {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </button>
              </div>
              {passwordError && (
                <p className="text-sm text-red-600 dark:text-red-500 text-center">
                  {passwordError}
                </p>
              )}
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link
                onClick={handleForgetPassword}
                className="text-indigo-600 dark:text-cyan-400 text-sm hover:underline transition"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-linear-to-r from-indigo-600 to-purple-600 dark:from-cyan-500 dark:to-indigo-500 
                        text-white dark:text-gray-900 py-3 rounded-lg font-extrabold 
                        transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl "
            >
              Login
            </button>
          </fieldset>

          {/* Register Link */}
          <p className="font-medium text-center text-gray-700 dark:text-gray-300">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-600 dark:text-cyan-400 font-extrabold hover:underline transition"
            >
              Register
            </Link>
          </p>

          {error && (
            <p className="text-center text-red-600 dark:text-red-500 font-semibold mt-2">
              {error}
            </p>
          )}
        </form>

        {/* Google Sign In */}
        <div className="flex justify-center pb-8 mt-2">
          <button
            onClick={handleSignInWithGoogle}
            className="flex items-center gap-3 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 font-semibold shadow-md 
                       bg-white dark:bg-gray-900 text-gray-800 dark:text-white 
                       hover:bg-gray-100 dark:hover:bg-gray-700 transition"
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
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
