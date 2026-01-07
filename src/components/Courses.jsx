

import React from "react";

const Courses = () => (
  <section id="courses" className="py-10 bg-gray-100 dark:bg-darkNeutral">
    <div className="container mx-auto px-4 flex flex-col ">
      <h2 className="text-3xl sm:text-5xl font-bold text-center text-primary dark:text-white mb-4 pt-[30px]">
        Our Courses
      </h2>
      <div className="text-center text-gray-600 sm:text-xl dark:text-gray-300 mb-9">
        From beginner to expert, our curated programs give you the skills to
        thrive in today’s world.
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8 md:mx-[60px] m-auto ">
        {[
          {
            title: "Web Development",
            desc: "Master HTML, CSS, JavaScript, React and build modern websites from scratch.",
            image: "webdev.jpg",
          },
          {
            title: "Data Science",
            desc: "Dive into data analysis and machine learning using Python.",
            image: "science.jpg",
          },
          {
            title: "UI/UX Design",
            desc: "Create stunning, user-friendly designs using Figma and design principles.",
            image: "uiux1.jpg",
          },
          {
            title: "Mobile App Development",
            desc: "Build apps for iOS and Android with React Native.",
            image: "app.jpg",
          },
          {
            title: "Cloud Computing",
            desc: "Learn AWS, Azure, and cloud architecture.",
            image: "cloud.jpg",
          },
          {
            title: "Cybersecurity",
            desc: "Protect systems, detect threats, and stay ahead in cybersecurity.",
            image: "cyber1.jpg",
          },
        ].map((course, index) => (
          <div
            key={index}
            data-animate
            className=" bg-white dark:bg-darkBg rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer max-w-[350px]"
          >
            <img
              src={course.image}
              alt={`${course.title} image`}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <div className="px-6 pb-4">
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{course.desc}</p>
              <a
                href="#"
                className="mt-4 inline-block text-secondary hover:text-orange-600 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Courses;
