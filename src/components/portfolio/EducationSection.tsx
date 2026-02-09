import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.E Computer Science & Engineering (AI & ML)",
    institution: "M. Kumarasamy College of Engineering, Karur",
    period: "2023 – 2027",
    details: "Pursuing a comprehensive program covering AI/ML fundamentals, deep learning, data science, and software engineering. CGPA: 8.8",
  },
  {
    degree: "Higher Secondary Education",
    institution: "St. Antony's Matric Higher Secondary School, Kirathoor",
    period: "2021 – 2023",
    details: "Completed higher secondary education with a focus on science and mathematics. Scored 85%.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-32 relative border-b border-primary/10">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-orbitron text-4xl md:text-[3.5rem] font-bold text-primary text-neon uppercase tracking-[3px] mb-16 relative inline-block"
        >
          Education
          <span className="absolute -bottom-6 left-0 w-[100px] h-1 bg-gradient-primary rounded shadow-neon" />
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-primary/20" />

          <div className="space-y-12">
            {education.map((item, idx) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-[14px] md:left-[22px] top-1 w-5 h-5 rounded-full border-2 border-primary bg-background shadow-neon flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="bg-black/30 rounded p-8 border border-primary/20 shadow-neon transition-all duration-400 hover:-translate-y-1 hover:shadow-neon-lg hover:border-primary relative overflow-hidden group">
                  {/* Shine effect */}
                  <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-transparent via-primary/5 to-transparent rotate-45 animate-[shine_3s_infinite] pointer-events-none" />

                  <div className="flex items-start gap-4 mb-3">
                    <GraduationCap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-orbitron text-lg md:text-xl text-primary text-neon">
                        {item.degree}
                      </h3>
                      <p className="text-foreground font-semibold mt-1">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  <span className="inline-block bg-secondary/20 px-3 py-1 rounded-sm text-xs text-secondary border border-secondary/30 font-orbitron tracking-wider mb-3 ml-10">
                    {item.period}
                  </span>

                  <p className="text-muted-foreground text-sm ml-10">
                    {item.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
