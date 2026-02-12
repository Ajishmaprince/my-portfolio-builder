import { motion } from "framer-motion";
import { Award, Shield, Globe, Cpu } from "lucide-react";

const certifications = [
  { title: "Ethical Hacking", org: "NPTEL Swayam", period: "Jul 2025 - Oct 2025", icon: Shield, color: "340 100% 59%" },
  { title: "Responsible And Safe AI Systems", org: "NPTEL Swayam", period: "Jul 2025 - Oct 2025", icon: Cpu, color: "280 100% 60%" },
  { title: "Web Development", org: "Internshala Trainings", period: "Nov 2024 - Jan 2025", icon: Globe, color: "185 100% 50%" },
  { title: "Introduction to IoT & Industrial 4.0", org: "NPTEL Swayam", period: "Sep 2024 - Dec 2024", icon: Award, color: "48 100% 50%" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-space text-xs text-primary/50 tracking-[6px] uppercase block mb-3">Achievements</span>
          <h2 className="font-orbitron text-4xl md:text-6xl font-black text-gradient uppercase tracking-[4px]">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass rounded-2xl p-7 hover-glow relative overflow-hidden group"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 30% 30%, hsl(${cert.color} / 0.1), transparent 70%)` }}
              />

              <div className="relative z-10">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `hsl(${cert.color} / 0.12)`, border: `1px solid hsl(${cert.color} / 0.3)` }}
                >
                  <cert.icon className="w-5 h-5" style={{ color: `hsl(${cert.color})` }} />
                </div>

                <h3 className="font-orbitron text-sm font-bold mb-3 leading-tight" style={{ color: `hsl(${cert.color})` }}>
                  {cert.title}
                </h3>
                <p className="text-foreground/70 text-sm font-space font-medium">{cert.org}</p>
                <p className="text-muted-foreground/40 text-[10px] mt-2 font-orbitron tracking-[2px]">{cert.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
