// import React from "react";

// const Contact = () => (
//   <section id="contact" className="py-16 bg-white dark:bg-darkBg">
//     <div className="container mx-auto px-4">
//       <h2 className="text-3xl font-bold text-center text-primary dark:text-white mb-12">
//         Get in Touch
//       </h2>
//       <div className="max-w-lg mx-auto">
//         <div className="space-y-4">
//           <input
//             type="text"
//             placeholder="Name"
//             className="w-full p-3 rounded-lg bg-neutral dark:bg-darkNeutral text-gray-600 dark:text-gray-300"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full p-3 rounded-lg bg-neutral dark:bg-darkNeutral text-gray-600 dark:text-gray-300"
//           />
//           <textarea
//             placeholder="Message"
//             className="w-full p-3 rounded-lg bg-neutral dark:bg-darkNeutral text-gray-600 dark:text-gray-300"
//             rows={5}
//           ></textarea>
//           <button className="w-full bg-secondary text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
//             Send Message
//           </button>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default Contact;




import React from "react";

const Contact = () => (
  <section id="contact" className="py-16 bg-gray-100 dark:bg-darkNeutral">
    <div className="container mx-auto px-4 pt-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Text Content */}
        <div data-animate style={{ animationDelay: "0s" }} className="sm:px-5">
          <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">
            Get in Touch with Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            {/* We’d love to hear from you! Whether you have questions about our
            courses, need help with enrollment, or simply want to share
            feedback, our team is here to support you. */}
            We’d love to hear from you! Whether you have questions about our
            courses, need help with enrollment, or simply want to share
            feedback—our team is here to support you. At Blaze Academy, we
            believe learning is a journey best taken together, and your voice
            helps us improve every step of the way. Don’t hesitate to reach
            out—whether it’s a big question, a small concern, or just to say
            hello. We’re always happy to connect with you.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <ion-icon
                name="location-outline"
                className="text-secondary w-6 h-6 mr-3"
              ></ion-icon>
              <p className="text-gray-600 dark:text-gray-300">
                123 Blaze Street, Learning City
              </p>
            </div>
            <div className="flex items-center">
              <ion-icon
                name="call-outline"
                className="text-secondary w-6 h-6 mr-3"
              ></ion-icon>
              <p className="text-gray-600 dark:text-gray-300">
                +234-700-123-4567
              </p>
            </div>
            <div className="flex items-center">
              <ion-icon
                name="mail-outline"
                className="text-secondary w-6 h-6 mr-3"
              ></ion-icon>
              <p className="text-gray-600 dark:text-gray-300">
                hello@blazeacademy.com
              </p>
            </div>
          </div>
        </div>
        {/* Right Side: Form */}
        <div data-animate style={{ animationDelay: "0.2s" }}>
          <div className="p-6 bg-white dark:bg-darkBg rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary dark:text-white mb-4">
              Send Us a Message
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 bg-white dark:bg-darkBg border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-gray-900 dark:text-gray-100"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 bg-white dark:bg-darkBg border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-gray-900 dark:text-gray-100"
              />
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full p-3 bg-white dark:bg-darkBg border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-gray-900 dark:text-gray-100"
              ></textarea>
              <button
                className="w-full bg-secondary text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
                onClick={() => alert("Message submission placeholder")}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
