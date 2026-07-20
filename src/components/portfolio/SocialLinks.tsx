"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/repos?q=owner%3A%40me", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/elias-faqiri-23529041b/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:elyasfaqery001@gmail.com", label: "Email" },
];

const SocialLinks = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      {socials.map((s) => {
        const Icon = s.icon;
        return (
          <a
            key={s.label}
            href={s.href}
            target={s.label === "Email" ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={s.label}
            className="w-11 h-11 flex items-center justify-center rounded-full backdrop-blur-md bg-white/5 border border-white/10 text-indigo-300 hover:text-white hover:bg-indigo-500/30 transition-all"
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;