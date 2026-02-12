import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const bootLines = [
  "SYS::CORE_INIT .............. OK",
  "MEM::ALLOC_4096MB ........... OK",
  "GPU::NEURAL_ENGINE .......... OK",
  "NET::QUANTUM_LINK ........... OK",
  "SEC::ENCRYPTION_AES256 ...... OK",
  "AI::MODEL_LOADED ............ OK",
];

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + Math.random() * 6 + 2;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setVisibleLines((prev) => Math.min(prev + 1, bootLines.length));
    }, 300);
    return () => clearInterval(lineInterval);
  }, []);

  const clampedProgress = Math.min(progress, 100);

  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background overflow-hidden"
    >
      {/* Mesh background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(185 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(185 100% 50%) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mb-6 z-10"
      >
        <h1 className="font-orbitron text-5xl sm:text-6xl md:text-7xl font-black tracking-[8px] text-gradient">
          LOADING
        </h1>
      </motion.div>

      {/* Boot sequence */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="font-mono text-[11px] mb-8 space-y-1 z-10 w-[320px]"
      >
        {bootLines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-muted-foreground/40"
          >
            <span className="text-primary/40">[{String(i).padStart(2, "0")}]</span> {line}
          </motion.div>
        ))}
      </motion.div>

      {/* Progress bar */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.8 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.4 }}
        className="w-[300px] sm:w-[400px] z-10"
      >
        <div className="h-[3px] w-full bg-muted/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              width: `${clampedProgress}%`,
              background: "linear-gradient(90deg, hsl(185 100% 50%), hsl(280 100% 60%), hsl(340 100% 59%))",
            }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <div className="flex justify-between mt-3">
          <span className="font-space text-[10px] text-muted-foreground/40 tracking-[3px] uppercase">
            Initializing
          </span>
          <span className="font-orbitron text-xs text-gradient font-bold">
            {Math.floor(clampedProgress)}%
          </span>
        </div>
      </motion.div>

      {/* Corner accents */}
      <div className="absolute top-6 left-6 w-10 h-10 border-t border-l border-primary/20 rounded-tl-lg" />
      <div className="absolute top-6 right-6 w-10 h-10 border-t border-r border-primary/20 rounded-tr-lg" />
      <div className="absolute bottom-6 left-6 w-10 h-10 border-b border-l border-primary/20 rounded-bl-lg" />
      <div className="absolute bottom-6 right-6 w-10 h-10 border-b border-r border-primary/20 rounded-br-lg" />
    </motion.div>
  );
};

export default LoadingScreen;
