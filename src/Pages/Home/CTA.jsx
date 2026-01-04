import React from "react";
import { Link } from "react-router";

const CTA = () => {
  return (
    <section className="py-24 bg-linear-to-r from-gray-900 to-gray-800 text-white text-center px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Take Control?</h2>
        <p className="text-lg text-gray-300 mb-10">
          Join thousands of users who are managing their finances smarter with FinEase.
        </p>
        <Link
          to="/register"
          className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-indigo-500/30 transition transform hover:-translate-y-1"
        >
          Get Started for Free
        </Link>
      </div>
    </section>
  );
};

export default CTA;