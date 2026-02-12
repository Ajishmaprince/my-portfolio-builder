import { motion } from "framer-motion";
import { Github, Linkedin, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="relative py-16 text-center">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-primary opacity-40" />

      <div className="max-w-[1400px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="font-orbitron font-black text-2xl tracking-[4px]">
            <span className="text-gradient">AJISHMA</span>
            <span className="text-accent">_</span>
          </span>
        </motion.div>

        <div className="flex justify-center gap-3 mb-8">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              className="w-12 h-12 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-neon transition-all duration-300"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        <p className="text-muted-foreground/40 text-xs font-space tracking-[3px] flex items-center justify-center gap-2 uppercase">
          © 2025 Ajishma Sruthi P · Made with <Heart className="w-3 h-3 text-secondary" /> · All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
