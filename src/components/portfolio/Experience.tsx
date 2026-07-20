"use client";

import { motion } from "framer-motion";

const items = [
  { year: "2024", title: "Full Stack Developer", desc: "Built web apps with React, Node and databases." },
  { year: "2023", title: "Frontend Developer", desc: "Developed responsive UIs with Tailwind and TypeScript." },
  { year: "2022", title: "Junior Developer", desc: "Learned full stack fundamentals and version control." },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="relative border-l border-indigo-500/30 ml-4">
          {items.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="mb-10 ml-8"
            >
              <div className="absolute -left-3 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 border-4 border-[#0b0b1a]" />
              <span className="text-indigo-400 font-semibold">{item.year}</span>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;