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
            Experienced administration and logistics professional with solid knowledge in management, organization and procurement. Currently in further training in IT, Cloud (MS Azure/365) and AI to combine administrative processes with modern IT infrastructure. Goal-oriented, team-minded and highly motivated to contribute my skills successfully to a German company.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-indigo-300 mb-3">Key Knowledge</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Office Organization & Administration</li>
                <li>• Microsoft 365 & Office</li>
                <li>• IT-Support & Cloud (MS Azure)</li>
                <li>• Windows Server & Active Directory</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-300 mb-3">Languages</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• English: C1</li>
                <li>• Deutsch: B1</li>
                <li>• Persisch: Muttersprache</li>
              </ul>
              <h3 className="text-xl font-semibold text-indigo-300 mt-4 mb-3">Interests</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Reading & Further Education</li>
                <li>• Sport & Fitness</li>
                <li>• Music & Writing</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;