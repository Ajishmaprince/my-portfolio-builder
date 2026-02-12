import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Web Development Intern",
    company: "Cognifyz, Virtual",
    period: "Nov 2025 - Dec 2025",
    points: [],
  },
  {
    role: "Cyber Security Intern",
    company: "Frontline Technologies, Karur",
    period: "Jul 2025",
    points: [
      "Gained practical knowledge of network security, firewalls, and intrusion detection systems",
      "Assisted in vulnerability assessment and penetration testing (VAPT) activities",
      "Learned malware analysis, risk management, and data protection practices",
    ],
  },
  {
    role: "AI & Machine Learning Intern",
    company: "Internpe, Virtual",
    period: "Feb 2025 - Mar 2025",
    points: [
      "Worked on machine learning models and data preprocessing",
      "Used Python, Scikit-learn, and TensorFlow for AI tasks",
      "Gained hands-on experience with real-world datasets",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-space text-xs text-primary/50 tracking-[6px] uppercase block mb-3">My journey</span>
          <h2 className="font-orbitron text-4xl md:text-6xl font-black text-gradient uppercase tracking-[4px]">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px overflow-hidden">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="w-full"
              style={{ background: "linear-gradient(to bottom, hsl(185 100% 50% / 0.6), hsl(280 100% 60% / 0.6), hsl(340 100% 59% / 0.6))" }}
            />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-10 mt-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, type: "spring" }}
                    className="w-12 h-12 glass rounded-xl shadow-neon flex items-center justify-center"
                  >
                    <Briefcase className="w-5 h-5 text-primary" />
                  </motion.div>
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-xl border border-primary/30 animate-pulse-ring" />
                </div>

                {/* Card */}
                <div className={`lg:w-1/2 ${idx % 2 === 0 ? "lg:pr-16" : "lg:pl-16"} pl-20 lg:pl-0`}>
                  <div className="glass rounded-2xl p-8 hover-glow relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-mesh opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
                    <div className="relative z-10">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="font-orbitron text-lg font-bold text-gradient">
                          {exp.role}
                        </h3>
                      </div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-accent/80 text-sm font-space font-semibold">{exp.company}</span>
                        <span className="glass text-[10px] px-3 py-1 rounded-full font-orbitron text-primary/60 tracking-wider">
                          {exp.period}
                        </span>
                      </div>
                      {exp.points.length > 0 && (
                        <ul className="space-y-2">
                          {exp.points.map((point, i) => (
                            <li key={i} className="text-muted-foreground text-sm font-space pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-primary/50">
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
