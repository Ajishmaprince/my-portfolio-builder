import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    degree: "B.E Computer Science & Engineering (AI & ML)",
    institution: "M. Kumarasamy College of Engineering, Karur",
    period: "2023 – 2027",
    details: "Pursuing a comprehensive program covering AI/ML fundamentals, deep learning, data science, and software engineering. CGPA: 8.8",
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary Education",
    institution: "St. Antony's Matric Higher Secondary School, Kirathoor",
    period: "2021 – 2023",
    details: "Completed higher secondary education with a focus on science and mathematics. Scored 85%.",
    icon: BookOpen,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-space text-xs text-primary/50 tracking-[6px] uppercase block mb-3">Academic background</span>
          <h2 className="font-orbitron text-4xl md:text-6xl font-black text-gradient uppercase tracking-[4px]">
            Education
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass rounded-2xl p-8 hover-glow relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-mesh opacity-0 group-hover:opacity-30 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "hsl(48 100% 50% / 0.12)", border: "1px solid hsl(48 100% 50% / 0.3)" }}>
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-lg font-bold text-gradient leading-tight">
                      {item.degree}
                    </h3>
                    <p className="text-foreground/70 font-space text-sm mt-1">{item.institution}</p>
                  </div>
                </div>

                <div className="glass rounded-full px-4 py-1.5 inline-block mb-4">
                  <span className="font-orbitron text-[10px] text-primary/60 tracking-[3px]">{item.period}</span>
                </div>

                <p className="text-muted-foreground text-sm font-space leading-relaxed">{item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
