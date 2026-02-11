import { motion } from "framer-motion";
import { Code, Brain, Users, Globe, Cpu, Database, MessageSquare, Award } from "lucide-react";

const skillCategories = [
  {
    title: "Technical",
    icon: Code,
    skills: [
      { name: "Web Development", level: 85 },
      { name: "Mobile App Dev", level: 70 },
      { name: "HTML/CSS/JS", level: 90 },
      { name: "Computer Skills", level: 80 },
    ],
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: [
      { name: "Python", level: 85 },
      { name: "Scikit-learn", level: 75 },
      { name: "TensorFlow", level: 70 },
      { name: "Data Preprocessing", level: 80 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Leadership", level: 90 },
      { name: "Team Management", level: 85 },
      { name: "Communication", level: 90 },
      { name: "Interpersonal", level: 85 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative border-b border-primary/10">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-orbitron text-4xl md:text-[3.5rem] font-bold text-primary text-neon uppercase tracking-[3px] mb-16 relative inline-block"
        >
          Skills
          <span className="absolute -bottom-6 left-0 w-[100px] h-1 bg-gradient-primary rounded shadow-neon" />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-black/30 rounded p-8 border border-primary/20 shadow-neon transition-all duration-400 hover:-translate-y-1 hover:shadow-neon-lg hover:border-primary relative overflow-hidden group"
            >
              {/* Shine effect */}
              <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-transparent via-primary/5 to-transparent rotate-45 animate-[shine_3s_infinite] pointer-events-none" />

              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center border border-primary/30 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-orbitron text-xl text-primary uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 + i * 0.1 }}
                  >
                    <div className="flex justify-between mb-1.5">
                      <span className="text-foreground text-sm">{skill.name}</span>
                      <span className="text-primary text-xs font-orbitron">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.15 + i * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-primary rounded-full relative"
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-neon" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
