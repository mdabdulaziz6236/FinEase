import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelopeOpenText } from "react-icons/fa";
import Swal from "sweetalert2"; 

const Newsletter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    
 
    // console.log("Subscribed with:", email);


    Swal.fire({
      icon: 'success',
      title: 'Subscribed!',
      text: 'Thank you for joining our newsletter.',
      confirmButtonColor: '#4F46E5'
    });
    
    e.target.reset();
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background linear & Pattern */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-600 via-purple-700 to-indigo-800 dark:from-gray-900 dark:via-gray-800 dark:to-black z-0"></div>
      
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Icon Animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="inline-block p-4 mb-6 bg-white/10 rounded-full backdrop-blur-md border border-white/20 text-yellow-300 shadow-xl"
        >
          <FaEnvelopeOpenText className="text-4xl" />
        </motion.div>

        {/* Heading & Text */}
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
        >
          Stay Financially Smart
        </motion.h2>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg text-indigo-100 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Join <span className="font-bold text-white">50,000+ users</span> receiving weekly tips on saving money, investment strategies, and FinEase updates directly to their inbox.
        </motion.p>

        {/* Input Form */}
        <motion.form 
          onSubmit={handleSubscribe}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-lg mx-auto"
        >
          <div className="relative w-full">
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/20 transition-all backdrop-blur-sm shadow-inner"
              required
            />
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-yellow-400/50 transition-all duration-300"
          >
            <span>Subscribe</span>
            <FaPaperPlane className="text-sm" />
          </motion.button>
        </motion.form>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 text-sm text-indigo-200 opacity-80"
        >
          No spam, ever. Unsubscribe anytime.
        </motion.p>
      </div>
    </section>
  );
};

export default Newsletter;