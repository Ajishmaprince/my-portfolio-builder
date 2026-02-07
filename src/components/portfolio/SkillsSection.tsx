import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Technical",
    skills: ["Web Development", "Mobile App Dev", "Computer Skills", "HTML/CSS/JS"],
  },
  {
    title: "AI / ML",
    skills: ["Python", "Scikit-learn", "TensorFlow", "Data Preprocessing"],
  },
  {
    title: "Soft Skills",
    skills: ["Leadership", "Team Management", "Interpersonal Skills", "Communication"],
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

              <h3 className="font-orbitron text-xl mb-6 text-primary uppercase tracking-wider">
                {category.title}
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="bg-primary/10 px-3 py-3 rounded-sm text-sm text-foreground border border-primary/30 text-center transition-all duration-300 hover:bg-primary/20 hover:-translate-y-0.5 hover:shadow-neon"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
