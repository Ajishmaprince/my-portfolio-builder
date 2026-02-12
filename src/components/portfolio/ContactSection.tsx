import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Send, ArrowUpRight } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 9042379406", color: "185 100% 50%" },
  { icon: Mail, label: "Email", value: "ajishmasruthi363@gmail.com", color: "280 100% 60%" },
  { icon: MapPin, label: "Location", value: "Kanyakumari, Tamil Nadu", color: "48 100% 50%" },
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
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-space text-xs text-primary/50 tracking-[6px] uppercase block mb-3">Get in touch</span>
          <h2 className="font-orbitron text-4xl md:text-6xl font-black text-gradient uppercase tracking-[4px] mb-4">Contact</h2>
          <p className="text-muted-foreground text-lg font-space max-w-xl">Let's connect and build something amazing together.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 hover-glow group"
              >
                <div className="flex items-center gap-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `hsl(${item.color} / 0.12)`, border: `1px solid hsl(${item.color} / 0.3)` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: `hsl(${item.color})` }} />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-xs uppercase tracking-[3px] mb-1" style={{ color: `hsl(${item.color} / 0.6)` }}>{item.label}</h3>
                    <p className="text-foreground/80 font-space text-sm">{item.value}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass rounded-2xl p-6 mt-2"
            >
              <p className="text-muted-foreground text-sm font-space">
                <span className="text-primary/60">{">"}</span> Currently open to internship opportunities and collaborative projects. Feel free to reach out!
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
              {[
                { name: "name", label: "Your Name", type: "text" },
                { name: "email", label: "Email Address", type: "email" },
              ].map((field) => (
                <div key={field.name}>
                  <label className={`block mb-2 text-[10px] uppercase tracking-[3px] font-orbitron transition-colors ${
                    focused === field.name ? "text-primary" : "text-muted-foreground/50"
                  }`}>{field.label}</label>
                  <input
                    type={field.type}
                    required
                    value={formData[field.name as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused(null)}
                    className="w-full p-4 glass rounded-xl text-foreground font-space text-sm transition-all focus:outline-none focus:border-primary/40 focus:shadow-neon"
                  />
                </div>
              ))}
              <div>
                <label className={`block mb-2 text-[10px] uppercase tracking-[3px] font-orbitron transition-colors ${
                  focused === "message" ? "text-primary" : "text-muted-foreground/50"
                }`}>Your Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="w-full p-4 glass rounded-xl text-foreground font-space text-sm transition-all focus:outline-none focus:border-primary/40 focus:shadow-neon resize-y"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-gradient-primary rounded-xl text-background font-orbitron font-bold uppercase tracking-wider transition-all hover:shadow-neon-xl inline-flex items-center gap-3 group"
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
