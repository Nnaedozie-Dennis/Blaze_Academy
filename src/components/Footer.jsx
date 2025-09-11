// import React from "react";

// const Footer = () => (
//   <footer className="bg-neutral dark:bg-darkNeutral py-6 text-center text-gray-600 dark:text-gray-300">
//     <p>&copy; 2025 Blaze Academy. All rights reserved.</p>
//   </footer>
// );

// export default Footer;


import React from "react";

const Footer = () => (
  <footer id="footer" className="py-1 bg-primary dark:bg-darkBg text-white">
    <div className="container mx-auto px-4">
      <div className="flex align-middle justify-center space-x-4 m-auto mt-3 cursor-pointer">
        <ion-icon
          name="logo-twitter"
          className="w-6 h-6 text-secondary hover:text-orange-600 transition"
        ></ion-icon>

        <ion-icon
          name="logo-facebook"
          className="w-6 h-6 text-secondary hover:text-orange-600 transition"
        ></ion-icon>

        <ion-icon
          name="logo-instagram"
          className="w-6 h-6 text-secondary hover:text-orange-600 transition"
        ></ion-icon>

        <ion-icon
          name="logo-linkedin"
          className="w-6 h-6 text-secondary hover:text-orange-600 transition"
        ></ion-icon>
      </div>
      <div className="mt-1 text-center text-gray-300 dark:text-gray-200">
       Copyright &copy; 2025 Blaze Academy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
