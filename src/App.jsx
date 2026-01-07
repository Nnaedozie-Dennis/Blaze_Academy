




import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideUpFade");
            entry.target.style.animationDelay = `${index * 0.5}s`; 
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.1 } 
    );

    document.querySelectorAll("[data-animate]").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect(); 
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <Testimonials />
      <Pricing />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;