import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  { q: "Is FinEase free to use?", a: "Yes! The core features of FinEase are completely free for individual users." },
  { q: "Is my financial data secure?", a: "Absolutely. We use industry-standard encryption to protect your data." },
  { q: "Can I export my data?", a: "Yes, you can export your transaction history to CSV or PDF formats from the reports page." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left font-medium text-gray-900 dark:text-white focus:outline-none"
              >
                {faq.q}
                {openIndex === index ? <FaMinus className="text-indigo-500" /> : <FaPlus className="text-indigo-500" />}
              </button>
              {openIndex === index && (
                <div className="p-5 pt-0 text-gray-600 dark:text-gray-400 border-t dark:border-gray-700">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;