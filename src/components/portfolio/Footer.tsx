"use client";

import { ArrowUp } from "lucide-react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-white/10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Elias Faqiri. All rights reserved.</p>
        <SocialLinks />
        <a
          href="#home"
          aria-label="Back to top"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-80 transition"
        >
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;