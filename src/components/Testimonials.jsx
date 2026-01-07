
import React from "react";

const Testimonials = () => (
  <section id="testimonials" className="py-16 bg-neutral dark:bg-darkNeutral">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold text-primary dark:text-white">
          Success Stories
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          See how Blaze Academy has helped learners achieve their career goals.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Michael Udeh",
            role: "Software Engineer",
            quote:
              "Blaze Academy gave me the confidence and skills to land my dream job in tech. The interactive lessons made learning easy and fun.",
            image: "profile-picture-2.jpeg",
          },
          {
            name: "Jane Francis",
            role: "Digital Marketer",
            quote:
              "The courses at Blaze Academy are practical and industry relevant. I was able to switch careers successfully.",
            image: "profile-picture-3.jpg",
          },
          {
            name: "Okafor Chioma",
            role: "UX Designer",
            quote:
              "I love how flexible the platform is. I could learn at my own pace, and the projects helped me build a solid portfolio.",
            image: "profile-picture-5.jpg",
          },
          {
            name: "Precious Johnson",
            role: "Data Analyst",
            quote:
              "The hands-on projects helped me master data analysis and land a high paying job.",
            image: "profile-picture-1.jpeg",
          },
          {
            name: "Luca Romanio",
            role: "Web Developer",
            quote:
              "Blaze Academy’s clear instruction and real-world projects made learning to code a breeze.",
            image: "profile-picture-6.jpg",
          },
          {
            name: "David Ezeh",
            role: "Cloud Architect",
            quote:
              "The cloud computing course was top notch, giving me skills to excel in my career.",
            image: "profile-picture-4.jpeg",
          },
        ].map((testimonial, index) => (
          <div
            key={index}
            data-animate
            className="p-6 bg-white dark:bg-darkBg rounded-xl shadow-md"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s profile`}
                className="w-10 h-10 rounded-full object-cover object-top "
              />
              <div className="ml-3">
                <h3 className="font-semibold text-primary dark:text-white">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              "{testimonial.quote}"
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;