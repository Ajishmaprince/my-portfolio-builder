import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const phrases = [
  "Building the future with intelligent systems",
  "AI/ML Engineer & Web Developer",
  "Solving real-world challenges with data",
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
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 70% 30%, hsl(185 100% 50% / 0.1) 0%, transparent 50%)",
        }}
      />
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 65%, hsl(185 100% 50% / 0.05) 65%),
            linear-gradient(-45deg, transparent 65%, hsl(340 100% 59% / 0.05) 65%)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-orbitron text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-bold text-primary text-neon uppercase tracking-[5px] leading-none mb-6 animate-glitch"
        >
          AJISHMA SRUTHI
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
          className="font-orbitron text-accent font-semibold text-lg sm:text-xl tracking-wider"
          style={{ textShadow: "0 0 5px hsl(48 100% 50% / 0.7)" }}
        >
          {text}
          <span className="inline-block w-[10px] h-5 bg-primary animate-blink align-middle ml-1" />
        </motion.div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="inline-block mt-8 px-10 py-4 border-2 border-primary text-primary font-orbitron font-semibold uppercase tracking-wider shadow-neon transition-all duration-300 hover:bg-primary/10 hover:text-foreground hover:shadow-neon-lg"
        >
          Connect With Me
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
