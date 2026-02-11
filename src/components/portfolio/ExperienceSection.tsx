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
    <section id="experience" className="py-32 relative border-b border-primary/10">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-orbitron text-4xl md:text-[3.5rem] font-bold text-primary text-neon uppercase tracking-[3px] mb-16 relative inline-block"
        >
          Experience
          <span className="absolute -bottom-6 left-0 w-[100px] h-1 bg-gradient-primary rounded shadow-neon" />
        </motion.h2>

        <div className="relative">
          {/* Timeline line with glow */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-primary/30">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full bg-primary/60 shadow-neon"
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 z-10 mt-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, type: "spring" }}
                    className="w-10 h-10 bg-background border-2 border-primary rounded-full shadow-neon flex items-center justify-center"
                  >
                    <Briefcase className="w-4 h-4 text-primary" />
                  </motion.div>
                </div>

                {/* Card */}
                <div className={`lg:w-1/2 ${idx % 2 === 0 ? "lg:pr-16" : "lg:pl-16"} pl-16 lg:pl-0`}>
                  <div className="bg-black/30 rounded p-8 border border-primary/20 transition-all hover:shadow-neon-lg hover:border-primary/40 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="font-orbitron text-lg text-primary">
                          {exp.role}
                        </h3>
                        <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-sm border border-primary/30 font-orbitron">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-accent text-sm mb-4 font-semibold">
                        {exp.company}
                      </p>
                      {exp.points.length > 0 && (
                        <ul className="space-y-2">
                          {exp.points.map((point, i) => (
                            <li
                              key={i}
                              className="text-muted-foreground text-sm pl-5 relative before:content-['▹'] before:absolute before:left-0 before:text-primary"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                {/* Empty side */}
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
