
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