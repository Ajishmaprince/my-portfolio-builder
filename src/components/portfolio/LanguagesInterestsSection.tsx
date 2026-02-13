import { motion } from "framer-motion";
import { Globe, Zap, Code, Brain, Lightbulb, Shield } from "lucide-react";

const languages = [
  { name: "English", level: "Fluent", proficiency: 95 },
  { name: "Tamil", level: "Native", proficiency: 100 },
  { name: "Hindi", level: "Fluent", proficiency: 90 },
];

const interests = [
  { icon: Brain, label: "Machine Learning", color: "hsl(185 100% 50%)" },
  { icon: Code, label: "Web Development", color: "hsl(280 100% 60%)" },
  { icon: Shield, label: "Cybersecurity", color: "hsl(340 100% 59%)" },
  { icon: Lightbulb, label: "Data Science", color: "hsl(45 100% 50%)" },
  { icon: Zap, label: "AI/Deep Learning", color: "hsl(120 100% 50%)" },
  { icon: Globe, label: "Tech Innovation", color: "hsl(270 100% 60%)" },
];

const LanguagesInterestsSection = () => {
  return (
    <section id="languages" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-space text-xs text-primary/50 tracking-[6px] uppercase block mb-3">
            Personal Profile
          </span>
          <h2 className="font-orbitron text-4xl md:text-6xl font-black text-gradient uppercase tracking-[4px]">
            Languages & Interests
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-primary" />
                <h3 className="font-orbitron text-2xl font-bold text-gradient">Languages</h3>
              </div>
            </div>

            <div className="space-y-4">
              {languages.map((lang, i) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-5 hover-glow group"
                >
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h4 className="font-orbitron text-lg font-bold text-foreground">{lang.name}</h4>
                      <p className="text-sm text-muted-foreground font-space">{lang.level}</p>
                    </div>
                    <span className="text-primary font-orbitron font-bold">{lang.proficiency}%</span>
                  </div>
                  <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 + 0.2 }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-accent" />
                <h3 className="font-orbitron text-2xl font-bold text-gradient">Interests</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, i) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ scale: 1.05 }}
                    className="glass rounded-xl p-5 hover-glow group flex flex-col items-center text-center cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="mb-3"
                    >
                      <Icon 
                        className="w-6 h-6" 
                        style={{ color: interest.color }}
                      />
                    </motion.div>
                    <p className="text-sm font-space font-semibold text-foreground/90">
                      {interest.label}
                    </p>
                    <div 
                      className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity"
                      style={{ background: interest.color }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesInterestsSection;
