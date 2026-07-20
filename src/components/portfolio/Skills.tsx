"use client";

import { motion } from "framer-motion";
import { Code2, FileCode, Coffee, Triangle, Atom, Hexagon, Server, Wind, Database, Container, GitBranch, Boxes } from "lucide-react";

const skills = [
  { name: "HTML", icon: FileCode },
  { name: "CSS", icon: Wind },
  { name: "JavaScript", icon: Coffee },
  { name: "TypeScript", icon: Code2 },
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Triangle },
  { name: "Node.js", icon: Hexagon },
  { name: "Express", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "Tailwind CSS", icon: Wind },
  { name: "Git", icon: GitBranch },
  { name: "Docker", icon: Container },
  { name: "Redux", icon: Boxes },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-3 shadow-lg hover:shadow-indigo-500/20 transition-shadow"
              >
                <Icon className="text-indigo-400" size={32} />
                <span className="text-gray-200 text-sm font-medium">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;