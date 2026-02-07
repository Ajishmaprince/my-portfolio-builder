import { motion } from "framer-motion";

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
              "Currently pursuing B.E in Computer Science & Engineering (2023-2027) at M. Kumarasamy College of Engineering.",
              "My expertise spans across Web Development, Machine Learning, Cyber Security, and Data-driven problem solving.",
              "I aim to apply my skills to solve real-world challenges and contribute to cutting-edge AI projects.",
            ].map((text, i) => (
              <p
                key={i}
                className="text-muted-foreground text-lg leading-relaxed pl-8 relative before:content-['>'] before:absolute before:left-0 before:text-primary before:font-bold"
              >
                {text}
              </p>
            ))}
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
              <div>
                <p className="text-primary">
                  <span className="text-accent">user@ajishma:~$ </span>whoami
                </p>
                <p className="text-foreground pl-8">
                  AI/ML Engineering Student
                </p>
              </div>
              <div>
                <p className="text-primary">
                  <span className="text-accent">user@ajishma:~$ </span>
                  education
                </p>
                <p className="text-foreground pl-8">
                  B.E CSE (2023-2027) @ MKCE
                </p>
              </div>
              <div>
                <p className="text-primary">
                  <span className="text-accent">user@ajishma:~$ </span>
                  skills --top
                </p>
                <p className="text-foreground pl-8">
                  Web Dev, AI/ML, Cyber Security
                </p>
              </div>
              <div>
                <p className="text-primary">
                  <span className="text-accent">user@ajishma:~$ </span>
                  contact
                </p>
                <p className="text-foreground pl-8">
                  ajishmasruthi363@gmail.com | +91 9042379406
                </p>
              </div>
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
