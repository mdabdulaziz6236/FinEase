// components/BlogPreview.jsx
import React from "react";

const blogs = [
  { title: "5 Tips to Save Money Fast", date: "Jan 10, 2026", img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=400&q=80" },
  { title: "Understanding Crypto in 2026", date: "Jan 05, 2026", img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=400&q=80" },
  { title: "Budgeting for Beginners", date: "Dec 28, 2025", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80" },
];

const BlogPreview = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-4">
                <img src={blog.img} alt={blog.title} className="w-full h-48 object-cover group-hover:scale-110 transition duration-300" />
              </div>
              <p className="text-sm text-indigo-500 dark:text-cyan-400 mb-2">{blog.date}</p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition">
                {blog.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;