"use client";

import { motion } from "framer-motion";

const items = [
  { year: "2026–2027", title: "Weiterbildung IT, Cloud & KI", desc: "Digital Career Institute (DCI), Deutschland — Client OS, Netzwerk, Windows Server, MS Azure/365, IT-Sicherheit." },
  { year: "02.2025", title: "DHL — Brief & Paket Zustellung", desc: "Stade: Kommissionierung, Verpackung, praktische Erfahrung in deutschem Unternehmen." },
  { year: "2014–2017", title: "Assistent der Geschäftsführung", desc: "Ebrahim Eysa CO., Herat — Verwaltung, Beschaffung, Inventar, Büroorganisation." },
  { year: "2009–2012", title: "Bachelor Englische Literatur", desc: "Universität Herat, Afghanistan." },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Experience & Education
        </h2>
        <div className="relative border-l border-indigo-500/30 ml-4">
          {items.map((item, i) => (
            <motion.div
              key={item.year + item.title}
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