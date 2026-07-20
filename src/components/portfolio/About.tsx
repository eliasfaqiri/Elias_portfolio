"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8 text-center md:text-left">
            I'm a dedicated Full Stack Developer with experience building end-to-end web applications. I enjoy solving complex problems and turning ideas into polished, accessible products. My background spans frontend craftsmanship and backend architecture.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-indigo-300 mb-3">Experience</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Full Stack Developer — Freelance & Projects</li>
                <li>• Built REST APIs and React frontends</li>
                <li>• Deployed apps with Docker & CI</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-300 mb-3">Technologies I Use</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• React, Next.js, TypeScript</li>
                <li>• Node.js, Express, MongoDB, PostgreSQL</li>
                <li>• Tailwind CSS, Docker, Git</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;