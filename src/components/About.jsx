
import React from "react";

const About = () => (
  <section id="about" className="py-16 bg-gray-100 dark:bg-darkNeutral">
    <div className="container mx-auto px-4 pt-3">
      <div className="flex flex-col-reverse sm:flex-row gap-8 items-center">

        <div data-animate className="flex-1" style={{ animationDelay: "0s" }}>
          <img
            src="about1.jpeg"
            alt="About Blaze Academy"
            className="w-full md:h-auto lg:max-h-90 object-cover rounded-lg shadow-md"
          />
        </div>

        <div data-animate className="flex-1" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-3xl text-center sm:text-left font-bold text-primary dark:text-white mb-6 ">
            About Blaze Academy
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 text-justify">
            At Blaze Academy, we believe learning should ignite curiosity, spark
            creativity and open doors to endless opportunities. More than just
            an online school, Blaze Academy is a community of learners,
            dreamers and achievers.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 text-justify">
            We blend modern technology with quality education to create a
            platform where students can learn at their own pace, from anywhere
            in the world. Whether it’s mastering new skills, preparing for
            exams or exploring passions, our courses are designed to make
            learning fun, flexible, and impactful.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 text-justify">
            With experienced instructors, interactive resources and supportive
            mentorship, Blaze Academy ensures that no student ever feels left
            behind. Our mission is simple: to empower every learner with the
            knowledge and confidence to excel in academics and beyond.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 italic font-bold">
            Because at Blaze Academy, we don’t just teach lessons, we ignite
            futures.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;