// import React from "react";

// const Pricing = () => (
//   <section id="pricing" className="py-16 bg-gray-100 dark:bg-darkNeutral">
//     <div className="container mx-auto px-4">
//       <h2 className="text-3xl font-bold text-center text-primary dark:text-white mb-12">
//         Pricing Plans
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {[
//           {
//             plan: "Basic",
//             price: "$9.99/mo",
//             features: ["Access to core courses", "Community support"],
//           },
//           {
//             plan: "Pro",
//             price: "$19.99/mo",
//             features: ["All courses", "Priority support", "Certificates"],
//           },
//           {
//             plan: "Premium",
//             price: "$29.99/mo",
//             features: [
//               "All Pro features",
//               "1:1 Mentorship",
//               "Exclusive content",
//             ],
//           },
//         ].map((pricing, index) => (
//           <div
//             key={index}
//             className="p-6 bg-white dark:bg-darkBg rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
//           >
//             <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
//               {pricing.plan}
//             </h3>
//             <p className="text-2xl font-bold text-secondary mb-4">
//               {pricing.price}
//             </p>
//             <ul className="text-gray-600 dark:text-gray-300 mb-4">
//               {pricing.features.map((feature, i) => (
//                 <li key={i} className="mb-2">
//                   • {feature}
//                 </li>
//               ))}
//             </ul>
//             <a
//               href="#"
//               className="inline-block bg-secondary text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
//             >
//               Choose Plan
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default Pricing;









//GROK
// import React from "react";

// const Pricing = () => (
//   <section id="pricing" className="py-16 bg-gray-100 dark:bg-darkNeutral">
//     <div className="container mx-auto px-4">
//       <h2 className="text-3xl font-bold text-center text-primary dark:text-white mb-12">
//         Pricing Plans
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {[
//           {
//             plan: "Basic",
//             price: "$9.99/mo",
//             features: ["Access to core courses", "Community support"],
//           },
//           {
//             plan: "Pro",
//             price: "$19.99/mo",
//             features: ["All courses", "Priority support", "Certificates"],
//           },
//           {
//             plan: "Premium",
//             price: "$29.99/mo",
//             features: [
//               "All Pro features",
//               "1:1 Mentorship",
//               "Exclusive content",
//             ],
//           },
//         ].map((pricing, index) => (
//           <div
//             key={index}
//             data-animate // Add data-animate for Intersection Observer
//             className="p-6 bg-white dark:bg-darkBg rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
//           >
//             <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
//               {pricing.plan}
//             </h3>
//             <p className="text-2xl font-bold text-secondary mb-4">
//               {pricing.price}
//             </p>
//             <ul className="text-gray-600 dark:text-gray-300 mb-4">
//               {pricing.features.map((feature, i) => (
//                 <li key={i} className="mb-2">
//                   • {feature}
//                 </li>
//               ))}
//             </ul>
//             <a
//               href="#"
//               className="inline-block bg-secondary text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
//             >
//               Choose Plan
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default Pricing;










// GOOD

// import React from "react";

// const Pricing = () => {
//   return (
//     <div className="bg-gray-50 py-16 px-6">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-gray-800">Pricing Plans</h2>
//         <p className="mt-2 text-gray-600">
//           Choose a plan that fits your learning journey.
//         </p>
//       </div>

//       {/* Plans */}
//       <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//         {/* Free Plan */}
//         <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
//           <h3 className="text-xl font-semibold text-gray-800">Free</h3>
//           <p className="mt-2 text-gray-600">Perfect for beginners</p>
//           <p className="mt-4 text-3xl font-bold text-gray-800">$0</p>
//           <ul className="mt-6 space-y-2 text-gray-600">
//             <li>✅ Access to basic courses</li>
//             <li>✅ Community support</li>
//             <li>❌ No certifications</li>
//           </ul>
//           <button className="mt-6 w-full py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700">
//             Get Started
//           </button>
//         </div>

//         {/* Pro Plan */}
//         <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-indigo-600">
//           <h3 className="text-xl font-semibold text-gray-800">Pro</h3>
//           <p className="mt-2 text-gray-600">Best for serious learners</p>
//           <p className="mt-4 text-3xl font-bold text-gray-800">$29<span className="text-base font-normal">/mo</span></p>
//           <ul className="mt-6 space-y-2 text-gray-600">
//             <li>✅ Everything in Free</li>
//             <li>✅ Certificates of completion</li>
//             <li>✅ Downloadable resources</li>
//             <li>✅ Priority support</li>
//           </ul>
//           <button className="mt-6 w-full py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700">
//             Choose Pro
//           </button>
//         </div>

//         {/* Enterprise Plan */}
//         <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
//           <h3 className="text-xl font-semibold text-gray-800">Enterprise</h3>
//           <p className="mt-2 text-gray-600">For teams & organizations</p>
//           <p className="mt-4 text-3xl font-bold text-gray-800">$99<span className="text-base font-normal">/mo</span></p>
//           <ul className="mt-6 space-y-2 text-gray-600">
//             <li>✅ Everything in Pro</li>
//             <li>✅ Team analytics</li>
//             <li>✅ Admin dashboard</li>
//             <li>✅ Dedicated support</li>
//           </ul>
//           <button className="mt-6 w-full py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700">
//             Contact Sales
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;









//BETTER
// import React from "react";

// const Pricing = () => (
//   <section id="pricing" className="py-16 bg-gray-100 dark:bg-darkNeutral">
//     <div className="container mx-auto px-4">
//       <h2 className="text-3xl font-bold text-center text-primary dark:text-white mb-12">
//         Pricing Plans
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {[
//           {
//             plan: "Basic",
//             price: "₦0 / Free",
//             tagline: "Start your learning journey at no cost.",
//             features: [
//               { text: "Access to 5 beginner courses", included: true },
//               { text: "Community discussion forum", included: true },
//               { text: "Weekly quizzes & assignments", included: true },
//               { text: "Mobile learning access", included: true },
//               { text: "No live classes", included: false },
//               { text: "No mentorship support", included: false },
//               { text: "No certificates", included: false },
//               { text: "Limited resources & materials", included: false },
//               { text: "No career guidance", included: false },
//             ],
//           },
//           {
//             plan: "Standard",
//             price: "₦10,000 / month",
//             tagline: "Upgrade your skills with expert support.",
//             features: [
//               {
//                 text: "Access to all beginner & intermediate courses",
//                 included: true,
//               },
//               { text: "Certificates of completion", included: true },
//               { text: "Live group classes (weekly)", included: true },
//               { text: "Student community & forums", included: true },
//               { text: "Downloadable learning materials", included: true },
//               {
//                 text: "Career tips & internship opportunities",
//                 included: true,
//               },
//               { text: "No 1-on-1 mentorship", included: false },
//               { text: "Limited personalized feedback", included: false },
//               { text: "No advanced projects", included: false },
//             ],
//           },
//           {
//             plan: "Premium",
//             price: "₦25,000 / month",
//             tagline: "Master your path with full access and mentorship.",
//             features: [
//               { text: "Unlimited courses (all levels)", included: true },
//               { text: "Certificates with verification", included: true },
//               { text: "Weekly live 1-on-1 mentorship", included: true },
//               { text: "Career coaching & job prep", included: true },
//               { text: "Access to premium study groups", included: true },
//               { text: "Priority support from tutors", included: true },
//               { text: "Advanced projects & capstone", included: true },
//               { text: "Internship recommendations", included: true },
//               { text: "Networking events & webinars", included: true },
//               { text: "Early access to new courses", included: true },
//             ],
//           },
//         ].map((pricing, index) => (
//           <div
//             key={index}
//             data-animate
//             className="p-6 bg-white dark:bg-darkBg rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
//           >
//             <h3 className="text-xl font-semibold text-primary dark:text-white mb-2 text-center">
//               {pricing.plan}
//             </h3>
//             <p className="text-2xl font-bold text-secondary mb-2 text-center">
//               {pricing.price}
//             </p>
//             <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
//               {pricing.tagline}
//             </p>
//             <ul className="text-gray-600 dark:text-gray-300 mb-4">
//               {pricing.features.map((feature, i) => (
//                 <li key={i} className="flex items-center mb-2">
//                   {/* <ion-icon
//                     name={
//                       feature.included ? "checkmark-circle" : "close-circle"
//                     }
//                     className={`w-5 h-5 ${
//                       feature.included ? "text-green-500" : "text-red-500"
//                     } mr-2`}
//                   ></ion-icon> */}

//                   <img
//                     src={
//                       feature.included
//                         ? "https://img.icons8.com/color/48/000000/checkmark--v1.png"
//                         : "https://img.icons8.com/color/48/000000/close-window.png"
//                     }
//                     alt={feature.included ? "Checkmark" : "Close"}
//                     className={`w-5 h-5 mr-2 ${
//                       feature.included ? "text-green-500" : "text-red-500"
//                     }`}
//                   />
//                   <span>{feature.text}</span>
//                 </li>
//               ))}
//             </ul>
//             <a
//               href="#"
//               className="inline-block bg-secondary text-white px-6 py-2 rounded-full hover:bg-orange-600 transition w-full text-center"
//             >
//               Choose Plan
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default Pricing;







//HTML
// import React from "react";
// const Pricing = () => (
//   <section id="pricing" className="py-16 bg-gray-100 dark:bg-darkNeutral">
//     <div className="container mx-auto px-4">
//       <h2 className="text-3xl font-bold text-center text-primary dark:text-white mb-12">
//         Pricing Plans
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Basic Plan */}
//         <div
//           data-animate
//           className="p-6 bg-white dark:bg-darkBg rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
//           style={{ animationDelay: "0s" }}
//         >
//           <h3 className="text-xl font-semibold text-primary dark:text-white mb-2 text-center">
//             Basic
//           </h3>
//           <p className="text-2xl font-bold text-secondary mb-2 text-center">
//             ₦0 / Free
//           </p>
//           <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
//             Start your learning journey at no cost.
//           </p>
//           <ul className="text-gray-600 dark:text-gray-300 mb-4">
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="checkmark-circle"
//                 className="w-5 h-5 text-green-500 mr-2"
//               ></ion-icon>
//               <span>Access to 5 beginner courses</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="checkmark-circle"
//                 className="w-5 h-5 text-green-500 mr-2"
//               ></ion-icon>
//               <span>Community discussion forum</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="checkmark-circle"
//                 className="w-5 h-5 text-green-500 mr-2"
//               ></ion-icon>
//               <span>Weekly quizzes & assignments</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="checkmark-circle"
//                 className="w-5 h-5 text-green-500 mr-2"
//               ></ion-icon>
//               <span>Mobile learning access</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="close-circle"
//                 className="w-5 h-5 text-red-500 mr-2"
//               ></ion-icon>
//               <span>No live classes</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="close-circle"
//                 className="w-5 h-5 text-red-500 mr-2"
//               ></ion-icon>
//               <span>No mentorship support</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="close-circle"
//                 className="w-5 h-5 text-red-500 mr-2"
//               ></ion-icon>
//               <span>No certificates</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="close-circle"
//                 className="w-5 h-5 text-red-500 mr-2"
//               ></ion-icon>
//               <span>Limited resources & materials</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="close-circle"
//                 className="w-5 h-5 text-red-500 mr-2"
//               ></ion-icon>
//               <span>No career guidance</span>
//             </li>
//           </ul>
//           <a
//             href="#"
//             className="inline-block bg-secondary text-white px-6 py-2 rounded-full hover:bg-orange-600 transition w-full text-center"
//           >
//             Choose Plan
//           </a>
//         </div>

//         {/* Standard Plan (Highlighted) */}
//         <div
//           data-animate
//           className="p-6 bg-white dark:bg-darkBg rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border-2 border-secondary scale-105"
//           style={{ animationDelay: "0.2s" }}
//         >
//           <div className="text-center mb-2">
//             <span className="inline-block bg-secondary text-white text-sm font-semibold px-3 py-1 rounded-full">
//               Recommended
//             </span>
//           </div>
//           <h3 className="text-xl font-semibold text-primary dark:text-white mb-2 text-center">
//             Standard
//           </h3>
//           <p className="text-2xl font-bold text-secondary mb-2 text-center">
//             ₦10,000 / month
//           </p>
//           <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
//             Upgrade your skills with expert support.
//           </p>
//           <ul className="text-gray-600 dark:text-gray-300 mb-4">
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="checkmark-circle"
//                 className="w-5 h-5 text-green-500 mr-2"
//               ></ion-icon>
//               <span>Access to all beginner & intermediate courses</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="checkmark-circle"
//                 className="w-5 h-5 text-green-500 mr-2"
//               ></ion-icon>
//               <span>Certificates of completion</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="checkmark-circle"
//                 className="w-5 h-5 text-green-500 mr-2"
//               ></ion-icon>
//               <span>Live group classes (weekly)</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="checkmark-circle"
//                 className="w-5 h-5 text-green-500 mr-2"
//               ></ion-icon>
//               <span>Student community & forums</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="checkmark-circle"
//                 className="w-5 h-5 text-green-500 mr-2"
//               ></ion-icon>
//               <span>Downloadable learning materials</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="checkmark-circle"
//                 className="w-5 h-5 text-green-500 mr-2"
//               ></ion-icon>
//               <span>Career tips & internship opportunities</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="close-circle"
//                 className="w-5 h-5 text-red-500 mr-2"
//               ></ion-icon>
//               <span>No 1-on-1 mentorship</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="close-circle"
//                 className="w-5 h-5 text-red-500 mr-2"
//               ></ion-icon>
//               <span>Limited personalized feedback</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="close-circle"
//                 className="w-5 h-5 text-red-500 mr-2"
//               ></ion-icon>
//               <span>No advanced projects</span>
//             </li>
//           </ul>
//           <a
//             href="#"
//             className="inline-block bg-secondary text-white px-6 py-2 rounded-full hover:bg-orange-600 transition w-full text-center"
//           >
//             Choose Plan
//           </a>
//         </div>

//         {/* Premium Plan */}
//         <div
//           data-animate
//           className="p-6 bg-white dark:bg-darkBg rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
//           style={{ animationDelay: "0.4s" }}
//         >
//           <h3 className="text-xl font-semibold text-primary dark:text-white mb-2 text-center">
//             Premium
//           </h3>
//           <p className="text-2xl font-bold text-secondary mb-2 text-center">
//             ₦25,000 / month
//           </p>
//           <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
//             Master your path with full access and mentorship.
//           </p>
//           <ul className="text-gray-600 dark:text-gray-300 mb-4">
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="checkmark-circle"
//                 className="w-5 h-5 text-green-500 mr-2"
//               ></ion-icon>
//               <span>Unlimited courses (all levels)</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="checkmark-circle"
//                 className="w-5 h-5 text-green-500 mr-2"
//               ></ion-icon>
//               <span>Certificates with verification</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="checkmark-circle"
//                 className="w-5 h-5 text-green-500 mr-2"
//               ></ion-icon>
//               <span>Weekly live 1-on-1 mentorship</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="checkmark-circle"
//                 className="w-5 h-5 text-green-500 mr-2"
//               ></ion-icon>
//               <span>Career coaching & job prep</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="checkmark-circle"
//                 className="w-5 h-5 text-green-500 mr-2"
//               ></ion-icon>
//               <span>Access to premium study groups</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="checkmark-circle"
//                 className="w-5 h-5 text-green-500 mr-2"
//               ></ion-icon>
//               <span>Priority support from tutors</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="checkmark-circle"
//                 className="w-5 h-5 text-green-500 mr-2"
//               ></ion-icon>
//               <span>Advanced projects & capstone</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="checkmark-circle"
//                 className="w-5 h-5 text-green-500 mr-2"
//               ></ion-icon>
//               <span>Internship recommendations</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="checkmark-circle"
//                 className="w-5 h-5 text-green-500 mr-2"
//               ></ion-icon>
//               <span>Networking events & webinars</span>
//             </li>
//             <li className="flex items-center mb-2">
//               <ion-icon
//                 name="checkmark-circle"
//                 className="w-5 h-5 text-green-500 mr-2"
//               ></ion-icon>
//               <span>Early access to new courses</span>
//             </li>
//           </ul>
//           <a
//             href="#"
//             className="inline-block bg-secondary text-white px-6 py-2 rounded-full hover:bg-orange-600 transition w-full text-center"
//           >
//             Choose Plan
//           </a>
//         </div>
//       </div>
//     </div>
//   </section>
// );
// export default Pricing;


import React from "react";

const Pricing = () => (
  <section id="pricing" className="py-16 bg-gray-100 dark:bg-darkNeutral">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl sm:text-5xl font-bold text-center text-primary dark:text-white mb-10 pt-[10px]">
        Pricing Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            plan: "Basic",
            price: "₦0 / Free",
            tagline: "Start your learning journey at no cost.",
            features: [
              { text: "Access to 5 beginner courses", included: true },
              { text: "Community discussion forum", included: true },
              { text: "Weekly quizzes & assignments", included: true },
              { text: "Mobile learning access", included: true },
              { text: "No live classes", included: false },
              { text: "No mentorship support", included: false },
              { text: "No certificates", included: false },
              { text: "Limited resources & materials", included: false },
              { text: "No career guidance", included: false },
            ],
          },
          {
            plan: "Standard",
            price: "₦10,000 / month",
            tagline: "Upgrade your skills with expert support.",
            features: [
              {
                text: "Access to all beginner & intermediate courses",
                included: true,
              },
              { text: "Certificates of completion", included: true },
              { text: "Live group classes (weekly)", included: true },
              { text: "Student community & forums", included: true },
              { text: "Downloadable learning materials", included: true },
              {
                text: "Career tips & internship opportunities",
                included: true,
              },
              { text: "No 1-on-1 mentorship", included: false },
              { text: "Limited personalized feedback", included: false },
              { text: "No advanced projects", included: false },
            ],
          },
          {
            plan: "Premium",
            price: "₦25,000 / month",
            tagline: "Master your path with full access and mentorship.",
            features: [
              { text: "Unlimited courses (all levels)", included: true },
              { text: "Certificates with verification", included: true },
              { text: "Weekly live 1-on-1 mentorship", included: true },
              { text: "Career coaching & job prep", included: true },
              { text: "Access to premium study groups", included: true },
              { text: "Priority support from tutors", included: true },
              { text: "Advanced projects & capstone", included: true },
              { text: "Internship recommendations", included: true },
              { text: "Networking events & webinars", included: true },
              { text: "Early access to new courses", included: true },
            ],
          },
        ].map((pricing, index) => (
          <div
            key={index}
            data-animate
            className={`p-6 bg-white dark:bg-darkBg rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer ${
              pricing.plan === "Standard"
                ? "border-2 border-secondary relative overflow-hidden"
                : ""
            }`}
          >
            {pricing.plan === "Standard" && (
              <div className="text-center mb-2">
                <span
                  className="absolute bg-secondary text-white text-sm font-bold px-7 py-2 top-7.5 right-[-35px] rotate-45"
                  // className="inline-block  bg-secondary text-white text-sm font-semibold px-3 py-1 rounded-full"
                >
                  Recommended
                </span>
              </div>
            )}
            <h3 className="text-xl font-semibold text-primary dark:text-white mb-2 text-center">
              {pricing.plan}
            </h3>
            <p className="text-2xl font-bold text-secondary mb-2 text-center">
              {pricing.price}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
              {pricing.tagline}
            </p>
            <ul className="text-gray-600 dark:text-gray-300 mb-4">
              {pricing.features.map((feature, i) => (
                <li key={i} className="flex items-center mb-2">
                  <img
                    src={
                      feature.included
                        ? "https://img.icons8.com/color/48/000000/checkmark--v1.png"
                        : "https://img.icons8.com/color/48/000000/close-window.png"
                    }
                    alt={feature.included ? "Checkmark" : "Close"}
                    className={`w-5 h-5 mr-2 ${
                      feature.included ? "text-green-500" : "text-red-500"
                    }`}
                  />
                  <span>{feature.text} </span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-block bg-secondary text-white px-6 py-2 rounded-full hover:bg-orange-600 transition w-full text-center"
            >
              Choose Plan
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;