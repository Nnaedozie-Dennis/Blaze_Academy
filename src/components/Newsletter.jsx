import React from "react";

const Newsletter = () => (
  <section
    id="newsletter"
    className="py-16 bg-primary dark:bg-darkBg text-white"
  >
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-6">Stay updated with the latest courses and news!</p>
      <div className="max-w-md mx-auto flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 p-3 rounded-l-lg text-gray-600 dark:text-gray-300"
        />
        <button className="bg-secondary px-6 py-3 rounded-r-lg hover:bg-orange-600 transition">
          Subscribe
        </button>
      </div>
    </div>
  </section>
);

export default Newsletter;
