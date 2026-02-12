import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, Minus } from "lucide-react";

const COMMANDS: Record<string, { output: string; action?: () => void }> = {
  help: {
    output: `Available commands:
  about     → Jump to About section
  skills    → Jump to Skills section
  projects  → Jump to Projects section
  contact   → Jump to Contact section
  whoami    → About Ajishma
  matrix    → Toggle matrix rain
  clear     → Clear terminal
  theme     → Show color palette
  fortune   → Random dev quote`,
  },
  whoami: {
    output: "Ajishma Sruthi P — AI/ML Engineer, Web Developer, Cybersecurity Enthusiast 🚀",
  },
  theme: {
    output: `🎨 Current Theme: Cyberpunk Neon
  Primary:   ■ Cyan (#00e5ff)
  Secondary: ■ Pink (#ff3d7f)
  Accent:    ■ Gold (#ffc800)
  Background:■ Deep Navy (#0a0a1a)`,
  },
  fortune: {
    output: "",
  },
};

const FORTUNES = [
  '"Any sufficiently advanced technology is indistinguishable from magic." — Arthur C. Clarke',
  '"The best way to predict the future is to invent it." — Alan Kay',
  '"Code is like humor. When you have to explain it, it\'s bad." — Cory House',
  '"First, solve the problem. Then, write the code." — John Johnson',
  '"Talk is cheap. Show me the code." — Linus Torvalds',
  '"The only way to do great work is to love what you do." — Steve Jobs',
  '"AI is the new electricity." — Andrew Ng',
];

const InteractiveTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [lines, setLines] = useState<{ type: "input" | "output"; text: string }[]>([
    { type: "output", text: 'Welcome to Ajishma\'s Terminal v2.0 🖥️' },
    { type: "output", text: 'Type "help" for available commands.\n' },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimized]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines = [...lines, { type: "input" as const, text: `visitor@portfolio:~$ ${cmd}` }];

    if (!trimmed) {
      setLines(newLines);
      return;
    }

    setCmdHistory((prev) => [trimmed, ...prev]);
    setHistoryIdx(-1);

    // Navigation commands
    const navMap: Record<string, string> = {
      about: "#about",
      skills: "#skills",
      projects: "#projects",
      contact: "#contact",
      experience: "#experience",
      education: "#education",
      certifications: "#certifications",
    };

    if (navMap[trimmed]) {
      document.querySelector(navMap[trimmed])?.scrollIntoView({ behavior: "smooth" });
      setLines([...newLines, { type: "output", text: `→ Navigating to ${trimmed}...` }]);
      return;
    }

    if (trimmed === "clear") {
      setLines([]);
      return;
    }

    if (trimmed === "fortune") {
      const quote = FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
      setLines([...newLines, { type: "output", text: `🔮 ${quote}` }]);
      return;
    }

    if (trimmed === "matrix") {
      setLines([...newLines, { type: "output", text: "🟢 Matrix rain is already running. You're living in it." }]);
      return;
    }

    if (trimmed === "sudo" || trimmed.startsWith("sudo ")) {
      setLines([...newLines, { type: "output", text: "🔒 Nice try. You don't have root access here." }]);
      return;
    }

    if (trimmed === "exit" || trimmed === "quit") {
      setLines([...newLines, { type: "output", text: "👋 Closing terminal..." }]);
      setTimeout(() => setIsOpen(false), 500);
      return;
    }

    const command = COMMANDS[trimmed];
    if (command) {
      setLines([...newLines, { type: "output", text: command.output }]);
    } else {
      setLines([
        ...newLines,
        { type: "output", text: `bash: ${trimmed}: command not found. Type "help" for available commands.` },
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      executeCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const newIdx = Math.min(historyIdx + 1, cmdHistory.length - 1);
        setHistoryIdx(newIdx);
        setInput(cmdHistory[newIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx > 0) {
        const newIdx = historyIdx - 1;
        setHistoryIdx(newIdx);
        setInput(cmdHistory[newIdx]);
      } else {
        setHistoryIdx(-1);
        setInput("");
      }
    }
  };

  return (
    <>
      {/* Floating trigger button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center shadow-neon-lg backdrop-blur-sm hover:bg-primary/30 transition-colors group"
            title="Open Terminal"
          >
            <Terminal className="w-6 h-6 text-primary group-hover:text-neon" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Terminal window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "auto" : undefined,
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[420px] max-w-[calc(100vw-2rem)] rounded-lg overflow-hidden border border-primary/30 shadow-neon-xl"
            style={{ background: "hsl(240 40% 4% / 0.97)" }}
          >
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-primary/10 border-b border-primary/20">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="font-orbitron text-xs text-primary tracking-wider">
                  visitor@ajishma-portfolio
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="w-5 h-5 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Minus className="w-3 h-3 text-muted-foreground" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-5 h-5 rounded-full flex items-center justify-center hover:bg-destructive/30 transition-colors"
                >
                  <X className="w-3 h-3 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Terminal body */}
            {!isMinimized && (
              <div
                className="h-[300px] overflow-y-auto p-4 font-mono text-sm space-y-1 cursor-text"
                onClick={() => inputRef.current?.focus()}
              >
                {lines.map((line, i) => (
                  <div
                    key={i}
                    className={`whitespace-pre-wrap ${
                      line.type === "input" ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {line.text}
                  </div>
                ))}

                {/* Input line */}
                <div className="flex items-center text-primary">
                  <span className="text-accent mr-2 flex-shrink-0">visitor@portfolio:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-transparent border-none outline-none text-foreground flex-1 font-mono text-sm caret-primary"
                    autoFocus
                    spellCheck={false}
                    autoComplete="off"
                  />
                </div>
                <div ref={bottomRef} />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InteractiveTerminal;
