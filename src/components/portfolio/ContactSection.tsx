import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 9042379406" },
  { icon: Mail, label: "Email", value: "ajishmasruthi363@gmail.com" },
  { icon: MapPin, label: "Location", value: "Kanyakumari, Tamil Nadu" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! Thank you for reaching out.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-orbitron text-4xl md:text-[3.5rem] font-bold text-primary text-neon uppercase tracking-[3px] mb-4 relative inline-block"
        >
          Contact
          <span className="absolute -bottom-6 left-0 w-[100px] h-1 bg-gradient-primary rounded shadow-neon" />
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg mb-16 mt-10"
        >
          Let's connect and build something amazing together.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-6 bg-black/30 rounded border border-primary/20 transition-all duration-300 hover:bg-primary/5 hover:translate-x-2 hover:shadow-neon-lg group"
              >
                <div className="w-[60px] h-[60px] bg-primary/10 rounded-lg flex items-center justify-center text-xl flex-shrink-0 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-orbitron text-lg text-primary tracking-wider mb-1">
                    {item.label}
                  </h3>
                  <p className="text-muted-foreground">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Extra CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-4 p-6 bg-primary/5 border border-primary/20 rounded"
            >
              <p className="text-muted-foreground text-sm">
                <span className="text-primary font-orbitron">{">"}</span> I'm currently open to internship opportunities and collaborative projects. Feel free to reach out!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black/30 p-10 rounded border border-primary/20 shadow-neon relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(hsl(185 100% 50%) 1px, transparent 1px),
                  linear-gradient(90deg, hsl(185 100% 50%) 1px, transparent 1px)
                `,
                backgroundSize: "30px 30px",
              }}
            />
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              {[
                { name: "name", label: "Your Name", type: "text" },
                { name: "email", label: "Email Address", type: "email" },
              ].map((field) => (
                <div key={field.name} className="relative">
                  <label className={`block mb-2 text-sm uppercase tracking-wider font-orbitron transition-colors ${
                    focused === field.name ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required
                    value={formData[field.name as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused(null)}
                    className="w-full p-4 bg-black/50 border border-primary/30 rounded-sm text-foreground font-rajdhani transition-all focus:outline-none focus:border-primary focus:shadow-neon"
                  />
                </div>
              ))}
              <div className="relative">
                <label className={`block mb-2 text-sm uppercase tracking-wider font-orbitron transition-colors ${
                  focused === "message" ? "text-primary" : "text-muted-foreground"
                }`}>
                  Your Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="w-full p-4 bg-black/50 border border-primary/30 rounded-sm text-foreground font-rajdhani transition-all focus:outline-none focus:border-primary focus:shadow-neon resize-y"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-gradient-primary text-background font-orbitron font-semibold uppercase tracking-wider shadow-neon-lg rounded-sm transition-all hover:-translate-y-0.5 hover:shadow-neon-xl inline-flex items-center gap-3 relative overflow-hidden group"
              >
                Send Message
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
