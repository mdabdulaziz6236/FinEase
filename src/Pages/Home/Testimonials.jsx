import React from "react";
import { motion } from "framer-motion";

const reviews = [
  { id: 1, name: "Rahim Ahmed", role: "Freelancer", msg: "FinEase changed how I manage my income.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, name: "Fatima Begum", role: "Student", msg: "Best app for students to track savings.", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 3, name: "John Doe", role: "Business Owner", msg: "Simple, clean, and effective.", img: "https://randomuser.me/api/portraits/men/85.jpg" },
  { id: 4, name: "Ayesha Siddiqua", role: "Housewife", msg: "Very easy to use for daily expenses.", img: "https://randomuser.me/api/portraits/women/12.jpg" },
  { id: 5, name: "Karim Ullah", role: "Shopkeeper", msg: "Helps me calculate my daily profit.", img: "https://randomuser.me/api/portraits/men/22.jpg" },
  { id: 6, name: "Tania Khan", role: "Banker", msg: "Love the graphical reports!", img: "https://randomuser.me/api/portraits/women/65.jpg" },
  { id: 7, name: "Sajid Hasan", role: "Developer", msg: "Dark mode is a lifesaver.", img: "https://randomuser.me/api/portraits/men/11.jpg" },
  { id: 8, name: "Nusrat Jahan", role: "Teacher", msg: "I recommend this to all my colleagues.", img: "https://randomuser.me/api/portraits/women/33.jpg" },
  { id: 9, name: "Robert Smith", role: "Investor", msg: "Great for tracking portfolio growth.", img: "https://randomuser.me/api/portraits/men/54.jpg" },
  { id: 10, name: "Mina Akter", role: "Student", msg: "Helps me save money for tuition.", img: "https://randomuser.me/api/portraits/women/29.jpg" },
  { id: 11, name: "Rafiqul Islam", role: "Driver", msg: "Very simple interface, I like it.", img: "https://randomuser.me/api/portraits/men/76.jpg" },
  { id: 12, name: "Emily Davis", role: "Designer", msg: "The UI is beautiful and responsive.", img: "https://randomuser.me/api/portraits/women/67.jpg" },
  { id: 13, name: "Hassan Ali", role: "Entrepreneur", msg: "Budget planning made easy.", img: "https://randomuser.me/api/portraits/men/34.jpg" },
  { id: 14, name: "Sadia Parvin", role: "Doctor", msg: "Quick transaction adding feature is great.", img: "https://randomuser.me/api/portraits/women/89.jpg" },
  { id: 15, name: "Omar Faruk", role: "Engineer", msg: "Secure and fast performance.", img: "https://randomuser.me/api/portraits/men/45.jpg" },
  { id: 16, name: "Lisa Wong", role: "Marketer", msg: "Insights help me cut unnecessary costs.", img: "https://randomuser.me/api/portraits/women/91.jpg" },
  { id: 17, name: "Kamal Hossain", role: "Farmer", msg: "Good app for keeping accounts.", img: "https://randomuser.me/api/portraits/men/19.jpg" },
  { id: 18, name: "Farhana Yeasmin", role: "Nurse", msg: "I check my balance every day.", img: "https://randomuser.me/api/portraits/women/55.jpg" },
  { id: 19, name: "David Miller", role: "Consultant", msg: "Professional grade financial tracking.", img: "https://randomuser.me/api/portraits/men/60.jpg" },
  { id: 20, name: "Salma Khatun", role: "Chef", msg: "Keeps my grocery budget on track.", img: "https://randomuser.me/api/portraits/women/18.jpg" },
  { id: 21, name: "Imran Khan", role: "Gamer", msg: "Tracking my game purchases is easy now.", img: "https://randomuser.me/api/portraits/men/99.jpg" },
  { id: 22, name: "Zara Sheikh", role: "Blogger", msg: "Love the export to PDF feature.", img: "https://randomuser.me/api/portraits/women/77.jpg" },
  { id: 23, name: "Mahmudul Haque", role: "Retired", msg: "Helps me manage my pension funds.", img: "https://randomuser.me/api/portraits/men/14.jpg" },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-full mx-auto text-center px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Trusted by Thousands
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          See what our community has to say about their journey to financial freedom with FinEase.
        </p>

        {/* Marquee Container */}
        <div className="flex w-full p-3 overflow-hidden relative">
          
          {/* Left linear Fade (Optional - for better look) */}
          <div className="absolute top-0 left-0 h-full w-20 bg-linear-to-r from-gray-50 to-transparent dark:from-gray-900 z-10 pointer-events-none"></div>
          
          {/* Moving Track */}
          <motion.div
            className="flex gap-8"

            animate={{ x: "-50%" }}
            transition={{
              duration: 500, 
              ease: "linear",
              repeat: Infinity,
            }}
         
            whileHover={{ animationPlayState: "paused" }} 

          >
            {/* Render items twice to create seamless loop */}
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="w-80 md:w-96 flex-shrink-0 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-14 h-14 rounded-full border-2 border-indigo-500 object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                      {review.name}
                    </h4>
                    <span className="text-sm text-indigo-500 dark:text-cyan-400 font-medium">
                      {review.role}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic text-sm whitespace-normal text-left leading-relaxed">
                  "{review.msg}"
                </p>
              </div>
            ))}
          </motion.div>

          {/* Right linear Fade */}
          <div className="absolute top-0 right-0 h-full w-20 bg-linear-to-l from-gray-50 to-transparent dark:from-gray-900 z-10 pointer-events-none"></div>
        
        </div>
      </div>
    </section>
  );
};

export default Testimonials;