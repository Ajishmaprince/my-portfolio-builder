import { motion } from "framer-motion";
import { Code, Brain, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Technical",
    icon: Code,
    color: "185 100% 50%",
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
    color: "280 100% 60%",
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
    color: "340 100% 59%",
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
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-space text-xs text-primary/50 tracking-[6px] uppercase block mb-3">What I know</span>
          <h2 className="font-orbitron text-4xl md:text-6xl font-black text-gradient uppercase tracking-[4px]">
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass rounded-2xl p-8 hover-glow relative overflow-hidden group"
            >
              {/* Color accent glow */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: `radial-gradient(circle, hsl(${category.color} / 0.15), transparent 70%)`, filter: "blur(30px)" }}
              />

              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `hsl(${category.color} / 0.12)`, border: `1px solid hsl(${category.color} / 0.3)` }}
                >
                  <category.icon className="w-6 h-6" style={{ color: `hsl(${category.color})` }} />
                </div>
                <h3 className="font-orbitron text-lg font-bold uppercase tracking-wider" style={{ color: `hsl(${category.color})` }}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-5 relative z-10">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + i * 0.08 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground/80 text-sm font-space">{skill.name}</span>
                      <span className="text-xs font-orbitron font-bold" style={{ color: `hsl(${category.color} / 0.7)` }}>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: idx * 0.1 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="h-full rounded-full relative"
                        style={{ background: `linear-gradient(90deg, hsl(${category.color} / 0.6), hsl(${category.color}))` }}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full" style={{ background: `hsl(${category.color})`, boxShadow: `0 0 10px hsl(${category.color} / 0.6)` }} />
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
