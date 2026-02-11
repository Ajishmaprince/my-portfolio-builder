import { motion } from "framer-motion";
import { Code, Brain, Shield, Database } from "lucide-react";

const highlights = [
  { icon: Code, label: "Web Dev", desc: "Full-stack web applications" },
  { icon: Brain, label: "AI/ML", desc: "Intelligent systems & models" },
  { icon: Shield, label: "Cyber Sec", desc: "Security & ethical hacking" },
  { icon: Database, label: "Data", desc: "Data-driven solutions" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative border-b border-primary/10">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-orbitron text-4xl md:text-[3.5rem] font-bold text-primary text-neon uppercase tracking-[3px] mb-16 relative inline-block"
        >
          About Me
          <span className="absolute -bottom-6 left-0 w-[100px] h-1 bg-gradient-primary rounded shadow-neon" />
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {[
              "I'm Ajishma Sruthi P, an AI-focused Computer Science student passionate about intelligent systems and automation.",
              "Currently pursuing B.E in Computer Science & Engineering (AI & ML) (2023-2027) at M. Kumarasamy College of Engineering, Karur.",
              "My expertise spans across Web Development, Machine Learning, Cyber Security, and Data-driven problem solving.",
              "I aim to apply my skills to solve real-world challenges and contribute to cutting-edge AI projects.",
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-muted-foreground text-lg leading-relaxed pl-8 relative before:content-['>'] before:absolute before:left-0 before:text-primary before:font-bold"
              >
                {text}
              </motion.p>
            ))}

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-sm hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group"
                >
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-foreground text-sm font-semibold">{item.label}</p>
                    <p className="text-muted-foreground text-xs">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/30 border border-primary/30 rounded p-8 shadow-neon-lg relative overflow-hidden"
          >
            {/* Terminal header */}
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 rounded-full mr-1.5" style={{ background: "#ff5f56" }} />
              <div className="w-3 h-3 rounded-full mr-1.5" style={{ background: "#ffbd2e" }} />
              <div className="w-3 h-3 rounded-full mr-1.5" style={{ background: "#27c93f" }} />
              <span className="text-muted-foreground text-sm ml-4">
                user@ajishma: ~/about
              </span>
            </div>

            {/* Terminal body */}
            <div className="font-mono space-y-4">
              {[
                { cmd: "whoami", out: "AI/ML Engineering Student" },
                { cmd: "education", out: "B.E CSE (AI & ML) (2023-2027) @ MKCE, Karur" },
                { cmd: "skills --top", out: "Web Dev, AI/ML, Cyber Security" },
                { cmd: "contact", out: "ajishmasruthi363@gmail.com | +91 9042379406" },
              ].map((item, i) => (
                <motion.div
                  key={item.cmd}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                >
                  <p className="text-primary">
                    <span className="text-accent">user@ajishma:~$ </span>{item.cmd}
                  </p>
                  <p className="text-foreground pl-8">{item.out}</p>
                </motion.div>
              ))}
              <div className="text-primary">
                <span className="text-accent">user@ajishma:~$ </span>
                <span className="inline-block w-2.5 h-5 bg-primary animate-blink align-middle" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
