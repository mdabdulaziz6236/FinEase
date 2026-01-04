import React from "react";
import { FaShieldAlt, FaMobileAlt, FaCloudDownloadAlt } from "react-icons/fa";

const Features = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Powerful features to keep your finances on track.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex gap-4 items-start">
            <FaShieldAlt className="text-4xl text-indigo-600 dark:text-cyan-400" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Secure Data</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Your financial data is encrypted and safe with us. We prioritize your privacy.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <FaMobileAlt className="text-4xl text-indigo-600 dark:text-cyan-400" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Mobile Friendly</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Access your dashboard from any device, anywhere, at any time.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <FaCloudDownloadAlt className="text-4xl text-indigo-600 dark:text-cyan-400" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Export Reports</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Download your monthly statements and reports easily for offline use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;