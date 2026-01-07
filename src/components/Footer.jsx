import React from "react";
import { MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer id="footer" className="py-1 bg-primary dark:bg-darkBg text-white">
    <div className="container mx-auto px-4 mt-2">
      <div className="flex align-middle justify-center space-x-4 m-auto mt-3 cursor-pointer">
        <Facebook className="w-6 h-6 text-secondary hover:text-orange-600 transition" />

        <Instagram className="w-6 h-6 text-secondary hover:text-orange-600 transition" />

        <Linkedin className="w-6 h-6 text-secondary hover:text-orange-600 transition" />

        <MessageCircle className="w-5 h-6 text-secondary hover:text-orange-600 transition" />
      </div>
      <div className="mt-1 text-center text-gray-300 dark:text-gray-200">
        Copyright &copy; 2025 Blaze Academy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
