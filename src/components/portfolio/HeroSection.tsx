import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpeg";
import { ArrowDown, Sparkles } from "lucide-react";

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
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

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
    <section ref={containerRef} className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />

      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10 + i * 3, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 200 + i * 80,
            height: 200 + i * 80,
            left: `${10 + i * 18}%`,
            top: `${15 + i * 12}%`,
            background: `radial-gradient(circle, ${
              i % 3 === 0
                ? "hsl(185 100% 50% / 0.08)"
                : i % 3 === 1
                ? "hsl(280 100% 60% / 0.06)"
                : "hsl(340 100% 59% / 0.05)"
            }, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />
      ))}

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(hsl(185 100% 50%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(185 100% 50%) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-8 relative z-10 flex flex-col lg:flex-row items-center gap-20 w-full pt-24">
        {/* Text Content */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="font-space text-xs text-primary/80 tracking-wider uppercase">Available for opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-orbitron text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-[6px] leading-[0.9] mb-8"
          >
            <span className="text-gradient">AJISHMA</span>
            <br />
            <span className="text-foreground/90">SRUTHI</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-space text-xl sm:text-2xl md:text-3xl font-light text-muted-foreground max-w-[600px] mb-8"
          >
            AI/ML Engineer{" "}
            <span className="text-primary/60">&</span>{" "}
            Web Developer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-space text-accent/90 text-lg tracking-wide min-h-[2rem] mb-10"
          >
            <span className="text-primary/40 mr-2">{">"}</span>
            {text}
            <span className="inline-block w-[2px] h-5 bg-primary animate-blink align-middle ml-1" />
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex gap-10 mb-12"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="relative"
              >
                <div className="font-orbitron text-4xl md:text-5xl font-black text-gradient">{stat.value}</div>
                <div className="text-muted-foreground text-xs uppercase tracking-[3px] mt-2 font-space">{stat.label}</div>
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
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-primary text-background font-orbitron font-bold uppercase tracking-wider rounded-lg overflow-hidden transition-all duration-500 hover:shadow-neon-xl hover:-translate-y-1"
            >
              <span className="relative z-10">Connect With Me</span>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-10 py-4 glass rounded-lg text-primary font-orbitron font-bold uppercase tracking-wider hover-glow"
            >
              View Projects
            </a>
          </motion.div>
        </div>

        {/* Profile Image with 3D tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative flex-shrink-0 perspective"
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative w-[300px] h-[380px] sm:w-[340px] sm:h-[430px] lg:w-[380px] lg:h-[480px] preserve-3d"
          >
            {/* Gradient border glow */}
            <div className="absolute -inset-[2px] bg-gradient-primary rounded-2xl opacity-60 blur-sm" />
            <div className="absolute -inset-[1px] bg-gradient-primary rounded-2xl opacity-30" />

            {/* Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <img
                src={profilePhoto}
                alt="Ajishma Sruthi P - AI/ML Engineer"
                className="w-full h-full object-cover object-top grayscale-[15%] hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-2 shadow-neon"
            >
              <span className="font-orbitron text-xs text-primary">AI/ML</span>
            </motion.div>

            {/* Orbiting dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-2 h-2 rounded-full bg-accent shadow-neon"
                style={{ transformOrigin: "0 -200px" }}
              />
            </div>

            {/* Corner accents */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-accent/60 rounded-tl-lg" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-accent/60 rounded-br-lg" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-muted-foreground/50 text-[10px] font-space tracking-[5px] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown className="w-4 h-4 text-primary/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
