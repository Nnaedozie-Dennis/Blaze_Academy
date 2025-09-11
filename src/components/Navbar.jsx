



// import React, { useState, useEffect } from "react";

// const Navbar = () => {
//   // Initialize isDark from localStorage, default to false if not set
//   const [isDark, setIsDark] = useState(() => {
//     const savedTheme = localStorage.getItem("theme");
//     return savedTheme === "dark";
//   });

//   // Apply the theme on mount and update localStorage on theme change
//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [isDark]);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//   };

//   return (
//     <nav className="bg-primary dark:bg-darkBg text-white p-4 sticky top-0 z-50 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Blaze Academy</h1>
//         <div className="space-x-6 flex items-center">
//           <a href="#hero" className="hover:text-secondary transition">
//             Home
//           </a>
//           {/* <a href="#features" className="hover:text-secondary transition">
//             Features
//           </a> */}
//           <a href="#courses" className="hover:text-secondary transition">
//             Courses
//           </a>
//           {/* <a href="#testimonials" className="hover:text-secondary transition">
//             Testimonials
//           </a> */}
//           <a href="#pricing" className="hover:text-secondary transition">
//             Pricing
//           </a>
//           <a href="#about" className="hover:text-secondary transition">
//             About
//           </a>
//           {/* <a href="#faq" className="hover:text-secondary transition">
//             FAQ
//           </a> */}
//           <a href="#contact" className="hover:text-secondary transition">
//             Contact
//           </a>
//         </div>
//         <div>
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full bg-secondary hover:bg-orange-600 transition"
//             aria-label="Toggle theme"
//           >
//             {isDark ? "🌞" : "🌙"}
//           </button>

//           <button className="bg-orange-600 hover:bg-secondary px-4 py-2 ml-4 rounded-3xl font-medium transition-transform" >Get Started</button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
















// import React, { useState, useEffect } from "react";

// const Navbar = () => {
//   const [isDark, setIsDark] = useState(() => {
//     const savedTheme = localStorage.getItem("theme");
//     return savedTheme === "dark";
//   });

//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [isDark]);

//   const toggleTheme = () => setIsDark(!isDark);
//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <nav className="bg-primary dark:bg-darkBg text-white p-4 sticky top-0 z-50 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center relative">
//         <h1 className="text-2xl font-bold z-50">Blaze Academy</h1>
//         {/* Desktop Nav */}
//         <div className="space-x-6 flex items-center hidden md:flex z-50">
//           <a href="#hero" className="hover:text-secondary transition">Home</a>
//           <a href="#courses" className="hover:text-secondary transition">Courses</a>
//           <a href="#pricing" className="hover:text-secondary transition">Pricing</a>
//           <a href="#about" className="hover:text-secondary transition">About</a>
//           <a href="#contact" className="hover:text-secondary transition">Contact</a>
//         </div>
//         {/* Desktop Actions */}
//         <div className="hidden md:flex items-center z-50">
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full bg-secondary hover:bg-orange-600 transition"
//             aria-label="Toggle theme"
//           >
//             {isDark ? "🌞" : "🌙"}
//           </button>
//           <button className="bg-orange-600 hover:bg-secondary px-4 py-2 ml-4 rounded-3xl font-medium transition-transform">
//             Get Started
//           </button>
//         </div>
//         {/* Mobile Hamburger & Theme Toggle */}
//         <div className="flex md:hidden items-center space-x-2 z-50">
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full bg-secondary hover:bg-orange-600 transition"
//             aria-label="Toggle theme"
//           >
//             {isDark ? "🌞" : "🌙"}
//           </button>
//           <button onClick={toggleMenu} className="p-2" aria-label="Open menu">
//             <ion-icon
//               name={menuOpen ? "close" : "menu"}
//               size="large"
//             ></ion-icon>
//           </button>
//         </div>
//         {/* Mobile Menu */}
//         <div
//           className={`absolute top-full left-0 w-full px-40 bg-primary dark:bg-darkBg text-white z-30 transition-transform duration-300 ${
//             menuOpen ? "translate-y-2" : "-translate-y-full"
//           } md:hidden`}
//           style={{ boxShadow: menuOpen ? "0 4px 12px rgba(0,0,0,0.15)" : "none" }}
//         >
//           <div className="flex flex-col items-center py-8 space-y-6">
//             <a href="#hero" className="hover:text-secondary transition" onClick={toggleMenu}>Home</a>
//             <a href="#courses" className="hover:text-secondary transition" onClick={toggleMenu}>Courses</a>
//             <a href="#pricing" className="hover:text-secondary transition" onClick={toggleMenu}>Pricing</a>
//             <a href="#about" className="hover:text-secondary transition" onClick={toggleMenu}>About</a>
//             <a href="#contact" className="hover:text-secondary transition" onClick={toggleMenu}>Contact</a>
//             <button className="bg-orange-600 hover:bg-secondary px-4 py-2 rounded-3xl font-medium transition-transform mt-4 mb-6">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


















// import React, { useState, useEffect } from 'react';

// const Navbar = () => {
//   const [isDark, setIsDark] = useState(() => {
//     const savedTheme = localStorage.getItem('theme');
//     return savedTheme === 'dark';
//   });
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [isDark]);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-primary dark:bg-darkBg text-white p-4 sticky top-0 z-50 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Blaze Academy</h1>
//         <button
//           className="md:hidden text-white hover:text-secondary focus:outline-none"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           <ion-icon name={isMenuOpen ? 'close-outline' : 'menu-outline'} size="large"></ion-icon>
//         </button>
//         <div className="hidden md:flex space-x-6 items-center">
//           <a href="#hero" className="hover:text-secondary transition">Home</a>
//           <a href="#courses" className="hover:text-secondary transition">Courses</a>
//           <a href="#pricing" className="hover:text-secondary transition">Pricing</a>
//           <a href="#about" className="hover:text-secondary transition">About</a>
//           <a href="#contact" className="hover:text-secondary transition">Contact</a>
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full bg-secondary hover:bg-orange-600 transition"
//             aria-label="Toggle theme"
//           >
//             {isDark ? '🌞' : '🌙'}
//           </button>
//           <button className="bg-orange-600 hover:bg-secondary px-4 py-2 rounded-3xl font-medium transition-transform">
//             Get Started
//           </button>
//         </div>
//       </div>
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//           isMenuOpen ? 'max-h-96' : 'max-h-0'
//         } mobile-menu`}
//       >
//         <div className="flex flex-col items-center space-y-4 py-4">
//           <a href="#hero" className="hover:text-secondary transition" onClick={toggleMenu}>Home</a>
//           <a href="#courses" className="hover:text-secondary transition" onClick={toggleMenu}>Courses</a>
//           <a href="#pricing" className="hover:text-secondary transition" onClick={toggleMenu}>Pricing</a>
//           <a href="#about" className="hover:text-secondary transition" onClick={toggleMenu}>About</a>
//           <a href="#contact" className="hover:text-secondary transition" onClick={toggleMenu}>Contact</a>
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full bg-secondary hover:bg-orange-600 transition"
//             aria-label="Toggle theme"
//           >
//             {isDark ? '🌞' : '🌙'}
//           </button>
//           <button className="bg-orange-600 hover:bg-secondary px-4 py-2 rounded-3xl font-medium transition-transform">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;









import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary dark:bg-darkBg text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Blaze Academy</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-secondary transition">Home</a>
          <a href="#courses" className="hover:text-secondary transition">Courses</a>
          <a href="#pricing" className="hover:text-secondary transition">Pricing</a>
          <a href="#about" className="hover:text-secondary transition">About</a>
          <a href="#contact" className="hover:text-secondary transition">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary hover:bg-orange-600 transition"
            aria-label="Toggle theme"
          >
            {isDark ? '🌞' : '🌙'}
          </button>
          <button className="hidden md:block bg-orange-600 hover:bg-secondary px-4 py-2 rounded-3xl font-medium transition-transform">
            Get Started
          </button>
          <button
            className="md:hidden text-white hover:text-secondary focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <ion-icon name={isMenuOpen ? 'close-outline' : 'menu-outline'} size="large"></ion-icon>
          </button>
        </div>
      </div>
      <div
        className={`absolute left-0 right-0 bg-primary dark:bg-darkBg md:hidden overflow-hidden transition-all duration-700 ease-in-out ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        } mobile-menu z-40`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <a href="#hero" className="hover:text-secondary transition" onClick={toggleMenu}>Home</a>
          <a href="#courses" className="hover:text-secondary transition" onClick={toggleMenu}>Courses</a>
          <a href="#pricing" className="hover:text-secondary transition" onClick={toggleMenu}>Pricing</a>
          <a href="#about" className="hover:text-secondary transition" onClick={toggleMenu}>About</a>
          <a href="#contact" className="hover:text-secondary transition" onClick={toggleMenu}>Contact</a>
          <button className="bg-orange-600 hover:bg-secondary px-4 py-2 rounded-3xl font-medium transition-transform">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;