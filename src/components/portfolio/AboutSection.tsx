import { motion } from "framer-motion";
import { Code, Brain, Shield, Database } from "lucide-react";

const highlights = [
  { icon: Code, label: "Web Dev", desc: "Full-stack web applications", color: "185 100% 50%" },
  { icon: Brain, label: "AI/ML", desc: "Intelligent systems & models", color: "280 100% 60%" },
  { icon: Shield, label: "Cyber Sec", desc: "Security & ethical hacking", color: "340 100% 59%" },
  { icon: Database, label: "Data", desc: "Data-driven solutions", color: "48 100% 50%" },
];

const terminalLines = [
  { cmd: "whoami", out: "AI/ML Engineering Student" },
  { cmd: "education", out: "B.E CSE (AI & ML) (2023-2027) @ MKCE, Karur" },
  { cmd: "skills --top", out: "Web Dev, AI/ML, Cyber Security" },
  { cmd: "contact", out: "ajishmasruthi363@gmail.com | +91 9042379406" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      {/* Section mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-space text-xs text-primary/50 tracking-[6px] uppercase block mb-3">Get to know me</span>
          <h2 className="font-orbitron text-4xl md:text-6xl font-black text-gradient uppercase tracking-[4px]">
            About Me
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          {/* Bio card - spans 2 cols, 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 glass rounded-2xl p-8 hover-glow relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-mesh opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="space-y-4">
                {[
                  "I'm Ajishma Sruthi P, an AI-focused Computer Science student passionate about intelligent systems and automation.",
                  "Currently pursuing B.E in Computer Science & Engineering (AI & ML) (2023-2027) at M. Kumarasamy College of Engineering, Karur.",
                  "My expertise spans across Web Development, Machine Learning, Cyber Security, and Data-driven problem solving.",
                  "I aim to apply my skills to solve real-world challenges and contribute to cutting-edge AI projects.",
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-muted-foreground text-[15px] leading-relaxed font-space pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-primary/60 before:text-sm"
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlight cards - each takes 1 cell */}
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="glass rounded-2xl p-6 hover-glow relative overflow-hidden group cursor-default"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 50%, hsl(${item.color} / 0.1), transparent 70%)` }}
              />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `hsl(${item.color} / 0.15)`, border: `1px solid hsl(${item.color} / 0.3)` }}
                >
                  <item.icon className="w-5 h-5" style={{ color: `hsl(${item.color})` }} />
                </div>
                <div>
                  <p className="text-foreground text-sm font-bold font-space">{item.label}</p>
                  <p className="text-muted-foreground text-xs font-space">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Terminal card - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 row-span-2 glass rounded-2xl overflow-hidden hover-glow"
          >
            {/* Terminal header */}
            <div className="flex items-center px-5 py-3 border-b border-primary/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f56" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#27c93f" }} />
              </div>
              <span className="text-muted-foreground/50 text-xs ml-4 font-mono">user@ajishma: ~/about</span>
            </div>

            {/* Terminal body */}
            <div className="p-6 font-mono text-sm space-y-3">
              {terminalLines.map((item, i) => (
                <motion.div
                  key={item.cmd}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.12 }}
                >
                  <p className="text-primary/80">
                    <span className="text-accent/70">~$ </span>{item.cmd}
                  </p>
                  <p className="text-muted-foreground pl-6 text-xs">{item.out}</p>
                </motion.div>
              ))}
              <div className="text-primary/60">
                <span className="text-accent/70">~$ </span>
                <span className="inline-block w-2 h-4 bg-primary/60 animate-blink align-middle" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
