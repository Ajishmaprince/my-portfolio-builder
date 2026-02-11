import { motion } from "framer-motion";
import { Github, Linkedin, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-card py-16 text-center border-t border-primary/20 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent shadow-neon" />

      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="font-orbitron font-bold text-2xl text-primary text-neon uppercase tracking-[3px]">
            AJISHMA<span className="text-accent">_</span>
          </span>
        </motion.div>

        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              className="w-[50px] h-[50px] bg-primary/10 rounded-lg flex items-center justify-center text-muted-foreground text-lg border border-primary/30 transition-all duration-300 hover:bg-primary hover:text-background hover:shadow-neon-lg hover:border-primary"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        <p className="text-muted-foreground text-sm font-orbitron tracking-wider flex items-center justify-center gap-2">
          © 2025 AJISHMA SRUTHI P. MADE WITH <Heart className="w-3 h-3 text-secondary inline" /> ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
