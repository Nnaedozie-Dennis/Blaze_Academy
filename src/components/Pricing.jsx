
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