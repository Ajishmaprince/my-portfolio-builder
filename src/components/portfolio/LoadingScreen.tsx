import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal">("loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase("reveal");
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  const clampedProgress = Math.min(progress, 100);

  return (
    <AnimatePresence>
      {phase !== "reveal" || clampedProgress < 100 ? null : null}
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background overflow-hidden"
      >
        {/* Scan lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(185 100% 50% / 0.03) 2px, hsl(185 100% 50% / 0.03) 4px)",
          }}
        />

        {/* Animated grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(hsl(185 100% 50% / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(185 100% 50% / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glitch title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-bold text-primary text-neon uppercase tracking-[8px] animate-glitch">
            INITIALIZING
          </h1>
          {/* Glitch layers */}
          <h1
            className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[8px] absolute inset-0 opacity-50"
            style={{
              color: "hsl(340 100% 59%)",
              clipPath: "inset(20% 0 50% 0)",
              transform: "translate(-2px, 1px)",
              animation: "glitch 1.5s infinite alternate",
            }}
          >
            INITIALIZING
          </h1>
          <h1
            className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[8px] absolute inset-0 opacity-50"
            style={{
              color: "hsl(185 100% 50%)",
              clipPath: "inset(60% 0 10% 0)",
              transform: "translate(2px, -1px)",
              animation: "glitch 2s infinite alternate-reverse",
            }}
          >
            INITIALIZING
          </h1>
        </motion.div>

        {/* System text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-rajdhani text-muted-foreground text-sm tracking-[3px] uppercase mb-10"
        >
          <span className="text-primary">&gt;</span> SYSTEM BOOT SEQUENCE{" "}
          <span className="animate-blink">_</span>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.8 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="w-[280px] sm:w-[350px] md:w-[400px]"
        >
          <div className="h-[2px] w-full bg-muted rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-primary rounded-full relative"
              style={{ width: `${clampedProgress}%` }}
              transition={{ duration: 0.1 }}
            >
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"
                style={{
                  boxShadow:
                    "0 0 8px hsl(185 100% 50%), 0 0 16px hsl(185 100% 50% / 0.5)",
                }}
              />
            </motion.div>
          </div>

          {/* Progress text */}
          <div className="flex justify-between mt-3">
            <span className="font-orbitron text-xs text-muted-foreground tracking-wider">
              LOADING MODULES
            </span>
            <span className="font-orbitron text-xs text-primary font-semibold">
              {Math.floor(clampedProgress)}%
            </span>
          </div>
        </motion.div>

        {/* Decorative corner brackets */}
        <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-primary/40" />
        <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-primary/40" />
        <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-primary/40" />
        <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-primary/40" />

        {/* Random hex codes for decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-16 left-8 font-mono text-[10px] text-primary leading-relaxed hidden sm:block"
        >
          0x4F 0x2A 0x7E 0x1B
          <br />
          0xAC 0x39 0xD5 0x88
          <br />
          0x6C 0xF1 0x3B 0x9D
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 0.7 }}
          className="absolute bottom-16 right-8 font-mono text-[10px] text-secondary leading-relaxed hidden sm:block"
        >
          SYS::CORE_INIT
          <br />
          MEM::ALLOC_OK
          <br />
          NET::CONNECTED
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
