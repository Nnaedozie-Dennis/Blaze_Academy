import React from "react";

const Hero = () => (
  <section
    id="hero"
    className="bg-neutral dark:bg-darkNeutral min-h-screen flex items-center justify-center text-center"
  >
    <div className="container mx-auto px-4">
      <h1 className="text-5xl font-bold text-primary dark:text-white mb-4 animate-fade-in">
        Fuel Your Future With Blaze Academy
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
        {/* Ignite your future with world-class education and personalized learning. */}
        Turn your passion into skills by learning in-demand skills from expert
        instructors anytime, anywhere.
        <br />
        Start today and unlock your potential.
      </p>
      <div>
        <a
          href="#login"
          className="inline-block bg-secondary text-white px-6 py-3 rounded-full hover:bg-orange-600 transition transform hover:scale-105"
        >
          Get Started
        </a>

        <a
          href="#courses"
          className="inline-block bg-secondary text-white px-6 py-3 rounded-full hover:bg-orange-600 transition transform hover:scale-105 ml-7"
        >
          Explore Courses
        </a>
      </div>
      {/* <a
        href="#courses"
        className="inline-block bg-secondary text-white px-6 py-3 rounded-full hover:bg-orange-600 transition transform hover:scale-105"
      >
        Explore Courses
      </a> */}
    </div>
  </section>
);

export default Hero;
