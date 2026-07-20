"use client";

import { motion } from "framer-motion";
import { Download, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const profileImg = "/.dyad/media/089fd7b533d29d489e824726b96117f43726bcde656a3e5492388cc7e07e46fc.jpg";
const resumeUrl = "/.dyad/media/183aa60e4d9095442086f1c6fc300713f6c921e9df8a982c074792fc1e718701.pdf";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 pointer-events-none" />
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <p className="text-indigo-400 font-medium mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Elias Faqiri
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">IT Support</h2>
          <p className="text-gray-400 max-w-md mx-auto md:mx-0 mb-8 leading-relaxed">
            Experienced administration and logistics professional currently upskilling in IT, Cloud (MS Azure/365) and AI to connect administrative processes with modern IT infrastructure. Goal-oriented, team-minded and highly motivated.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href={resumeUrl} download>
              <Button className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg">
                <Download className="mr-2" size={18} /> Download Resume
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="rounded-full border-indigo-400/40 text-indigo-300 hover:bg-indigo-500/10">
                <Mail className="mr-2" size={18} /> Contact Me
              </Button>
            </a>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 text-sm text-gray-400 justify-center md:justify-start">
            <a href="tel:+4917644472861" className="flex items-center gap-2 hover:text-indigo-300 transition">
              <Phone size={16} /> +49 176 44472861
            </a>
            <a href="mailto:elyasfaqery001@gmail.com" className="flex items-center gap-2 hover:text-indigo-300 transition">
              <Mail size={16} /> elyasfaqery001@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-30" />
            <img
              src="/imge/profile.jpg"
              alt="Elias Faqiri professional profile"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/10 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;