"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart, payments and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://placehold.co/600x400/1e1b4b/818cf8?text=Project+1",
    demo: "#",
    repo: "https://github.com/repos?q=owner%3A%40me",
  },
  {
    title: "Task Manager",
    description: "Collaborative task board with real-time updates and auth.",
    tech: ["Next.js", "PostgreSQL", "Tailwind"],
    image: "https://placehold.co/600x400/312e81/a5b4fc?text=Project+2",
    demo: "#",
    repo: "https://github.com/repos?q=owner%3A%40me",
  },
  {
    title: "Portfolio CMS",
    description: "Headless CMS to manage personal site content easily.",
    tech: ["Express", "React", "Docker"],
    image: "https://placehold.co/600x400/1e1b4b/818cf8?text=Project+3",
    demo: "#",
    repo: "https://github.com/repos?q=owner%3A%40me",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-xl"
            >
              <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-6">
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
                      <ExternalLink className="mr-1" size={14} /> Live Demo
                    </Button>
                  </a>
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    <Button size="sm" variant="outline" className="rounded-full border-white/20 text-gray-200 hover:bg-white/10">
                      <Github className="mr-1" size={14} /> GitHub
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;