// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Features from "./components/Features";
// import Courses from "./components/Courses";
// import Testimonials from "./components/Testimonials";
// import Pricing from "./components/Pricing";
// import About from "./components/About";
// import FAQ from "./components/FAQ";
// import Contact from "./components/Contact";
// import Newsletter from "./components/Newsletter";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <div>
//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in {
//           animation: fadeIn 1s ease-out;
//         }
//       `}</style>
//       <Navbar />
//       <Hero />
//       <Features />
//       <Courses />
//       <Testimonials />
//       <Pricing />
//       <About />
//       <FAQ />
//       <Contact />
//       <Newsletter />
//       <Footer />
//     </div>
//   );
// };

// export default App;








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
// import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideUpFade");
            entry.target.style.animationDelay = `${index * 0.5}s`; // Stagger animation
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of element is visible
    );

    // Select all elements with data-animate attribute
    document.querySelectorAll("[data-animate]").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect(); // Cleanup on unmount
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
      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
};

export default App;