"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Award, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "IT, Cloud & AI Weiterbildung",
    description: "Grundlagen IT, Cloud und KI am Digital Career Institute (DCI) — Client OS, Netzwerk, Windows Server, MS Azure/365.",
    tech: ["MS Azure", "MS 365", "IT-Sicherheit"],
    icon: GraduationCap,
    demo: "#",
    repo: "https://github.com/repos?q=owner%3A%40me",
  },
  {
    title: "Assistent der Geschäftsführung",
    description: "Administrative Aufgaben, Beschaffung und Büroorganisation bei Ebrahim Eysa CO. in Herat, Afghanistan.",
    tech: ["Verwaltung", "Logistik", "Organisation"],
    icon: Briefcase,
    demo: "#",
    repo: "https://github.com/repos?q=owner%3A%40me",
  },
  {
    title: "Zertifikate & Qualifikationen",
    description: "Orientierungskurs DCI 2025, Deutsch B1 2023, Leben in Deutschland 2023 — nachweisbare Qualifikationen.",
    tech: ["Zertifikate", "Deutsch B1", "DCI"],
    icon: Award,
    demo: "#",
    repo: "https://github.com/repos?q=owner%3A%40me",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Qualifications & Experience
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-xl p-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    <Button size="sm" className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                      <ExternalLink className="mr-1" size={14} /> Details
                    </Button>
                  </a>
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    <Button size="sm" variant="outline" className="rounded-full border-white/20 text-gray-200 hover:bg-white/10">
                      <Github className="mr-1" size={14} /> GitHub
                    </Button>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;