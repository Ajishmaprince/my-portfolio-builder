import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpeg";
import { Download, ArrowDown } from "lucide-react";

const phrases = [
  "Building the future with intelligent systems",
  "AI/ML Engineer & Web Developer",
  "Solving real-world challenges with data",
];

const stats = [
  { label: "Projects", value: "6+" },
  { label: "Certifications", value: "4+" },
  { label: "Internships", value: "3+" },
];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = phrases[phraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(fullText.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
          if (charIndex + 1 === fullText.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(fullText.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 30 : 60
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, hsl(185 100% 50%), transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, hsl(340 100% 59%), transparent 70%)" }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(hsl(185 100% 50%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(185 100% 50%) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16 w-full pt-20">
        {/* Text Content */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-orbitron text-xs text-primary tracking-wider uppercase">Available for opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-orbitron text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold text-primary text-neon uppercase tracking-[5px] leading-none mb-6"
          >
            AJISHMA
            <br />
            <span className="text-foreground">SRUTHI</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-[2.5rem] font-light text-foreground max-w-[700px] mb-8 relative"
          >
            AI/ML Engineer & Web Developer
            <span className="absolute -bottom-4 left-0 w-[150px] h-[3px] bg-gradient-primary" />
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-orbitron text-accent font-semibold text-lg sm:text-xl tracking-wider min-h-[2rem]"
            style={{ textShadow: "0 0 5px hsl(48 100% 50% / 0.7)" }}
          >
            {text}
            <span className="inline-block w-[10px] h-5 bg-primary animate-blink align-middle ml-1" />
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex gap-8 mt-10 mb-10"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="text-center"
              >
                <div className="font-orbitron text-3xl md:text-4xl font-bold text-primary text-neon">{stat.value}</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-primary text-background font-orbitron font-semibold uppercase tracking-wider shadow-neon-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-neon-xl rounded-sm"
            >
              Connect With Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-10 py-4 border-2 border-primary/50 text-primary font-orbitron font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:shadow-neon rounded-sm"
            >
              View Projects
            </a>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] lg:w-[360px] lg:h-[450px]">
            {/* Animated neon border */}
            <motion.div
              animate={{ rotate: [0, 1, -1, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 border-2 border-primary shadow-neon rounded-sm translate-x-3 translate-y-3"
            />
            <motion.div
              animate={{ rotate: [0, -1, 1, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 border-2 border-secondary/50 rounded-sm -translate-x-2 -translate-y-2"
            />
            <img
              src={profilePhoto}
              alt="Ajishma Sruthi P - AI/ML Engineer"
              className="relative w-full h-full object-cover object-top rounded-sm grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              style={{
                boxShadow: "0 0 30px hsl(185 100% 50% / 0.3), 0 0 60px hsl(185 100% 50% / 0.1)",
              }}
            />
            {/* Scanline overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20 rounded-sm"
              style={{
                background: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(185 100% 50% / 0.05) 2px, hsl(185 100% 50% / 0.05) 4px)",
              }}
            />
            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-accent" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-accent" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-muted-foreground text-xs font-orbitron tracking-[3px] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown className="w-4 h-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
