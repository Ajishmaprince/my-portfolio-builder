import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  { title: "Ethical Hacking", org: "NPTEL Swayam", period: "Jul 2025 - Oct 2025" },
  { title: "Responsible And Safe AI Systems", org: "NPTEL Swayam", period: "Jul 2025 - Oct 2025" },
  { title: "Web Development", org: "Internshala Trainings", period: "Nov 2024 - Jan 2025" },
  { title: "Introduction to IoT & Industrial 4.0", org: "NPTEL Swayam", period: "Sep 2024 - Dec 2024" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-32 relative border-b border-primary/10">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-orbitron text-4xl md:text-[3.5rem] font-bold text-primary text-neon uppercase tracking-[3px] mb-16 relative inline-block"
        >
          Certifications
          <span className="absolute -bottom-6 left-0 w-[100px] h-1 bg-gradient-primary rounded shadow-neon" />
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-black/30 rounded p-8 border border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-neon-lg hover:border-primary relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring" }}
                className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30 mb-5 group-hover:bg-primary/20 transition-colors"
              >
                <Award className="w-6 h-6 text-primary" />
              </motion.div>

              <h3 className="font-orbitron text-lg mb-3 text-primary relative z-10">
                {cert.title}
              </h3>
              <p className="text-foreground text-sm relative z-10 font-semibold">
                {cert.org}
              </p>
              <p className="text-muted-foreground/60 text-xs mt-2 relative z-10 font-orbitron tracking-wider">
                {cert.period}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
