




import React from 'react';

const Features = () => (
  <section id="features" className="py-16 bg-white dark:bg-darkBg">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl sm:text-5xl font-bold text-center text-primary dark:text-white ">
        Why Choose Blaze Academy?
      </h2>
      <p className="text-gray-600 text-center text-xl sm:text-2xl mt-2 mb-12">
        Discover what sets us ablaze in education.
      </p>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-8">
        {[
          {
            title: "Expert Instructors",
            desc: "Learn from industry leaders with years of experience.",
            icon: "school",
          },
          {
            title: "Flexible Learning",
            desc: "Study at your own pace, anytime, anywhere.",
            icon: "time",
          },
          {
            title: "Affordable Plans",
            desc: "Quality courses that fit your budget",
            icon: "wallet",
          },
          {
            title: "Certificates of Completion",
            desc: "Earn recognized credentials to enhance your resume.",
            icon: "ribbon",
          },
        ].map((feature, index) => (
          <div
            key={index}
            data-animate
            className="p-6 bg-neutral dark:bg-darkNeutral rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer "
          >
            <ion-icon
              name={feature.icon}
              class="text-orange-500 w-8 h-8 mb-2"
            ></ion-icon>
            <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;

