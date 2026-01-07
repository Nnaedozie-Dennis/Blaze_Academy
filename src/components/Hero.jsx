import React from "react";

const Hero = () => (
  <section
    id="hero"
    className=" bg-neutral dark:bg-darkNeutral h-screen flex items-center justify-center text-center"
    style={{
      backgroundImage:
        "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url('2.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="mx-auto backdrop-blur-sm p-10 rounded-lg">
      <h1 className="text-3xl md:text-5xl font-bold text-primary dark:text-white mb-7 animate-fade-in">
        Fuel Your Future With Blaze Academy
      </h1>
      <p className="text-xl text-black dark:text-gray-300 mb-6">
        Turn your passion into skills by learning in-demand skills from expert
        instructors anytime, anywhere.
        <br />
        <span className="italic"> Start today and unlock your potential.</span>
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
          className="inline-block bg-secondary text-white px-6 py-3 rounded-full hover:bg-orange-600 transition transform hover:scale-105 ml-4"
        >
          Explore Courses
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
