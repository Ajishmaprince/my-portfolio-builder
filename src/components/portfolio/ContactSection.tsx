import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const contactInfo = [
  { icon: "fas fa-phone-alt", label: "Phone", value: "+91 9042379406" },
  { icon: "fas fa-envelope", label: "Email", value: "ajishmasruthi363@gmail.com" },
  { icon: "fas fa-map-marker-alt", label: "Location", value: "Kanyakumari, Tamil Nadu" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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
          className="font-orbitron text-4xl md:text-[3.5rem] font-bold text-primary text-neon uppercase tracking-[3px] mb-16 relative inline-block"
        >
          Contact
          <span className="absolute -bottom-6 left-0 w-[100px] h-1 bg-gradient-primary rounded shadow-neon" />
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-6 p-6 bg-black/30 rounded border border-primary/20 transition-all duration-300 hover:bg-primary/5 hover:translate-x-2 hover:shadow-neon-lg group"
              >
                <div className="w-[60px] h-[60px] bg-primary/10 rounded flex items-center justify-center text-xl text-primary flex-shrink-0 border border-primary/30">
                  <i className={item.icon} />
                </div>
                <div>
                  <h3 className="font-orbitron text-lg text-primary tracking-wider mb-1">
                    {item.label}
                  </h3>
                  <p className="text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black/30 p-10 rounded border border-primary/20 shadow-neon relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, transparent 95%, hsl(185 100% 50% / 0.05) 95%),
                  linear-gradient(transparent 95%, hsl(185 100% 50% / 0.05) 95%)
                `,
                backgroundSize: "30px 30px",
              }}
            />
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div>
                <label className="block mb-2 text-muted-foreground text-sm uppercase tracking-wider font-orbitron">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-4 bg-black/50 border border-primary/30 rounded-sm text-foreground font-rajdhani transition-all focus:outline-none focus:border-primary focus:shadow-neon"
                />
              </div>
              <div>
                <label className="block mb-2 text-muted-foreground text-sm uppercase tracking-wider font-orbitron">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-4 bg-black/50 border border-primary/30 rounded-sm text-foreground font-rajdhani transition-all focus:outline-none focus:border-primary focus:shadow-neon"
                />
              </div>
              <div>
                <label className="block mb-2 text-muted-foreground text-sm uppercase tracking-wider font-orbitron">
                  Your Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-4 bg-black/50 border border-primary/30 rounded-sm text-foreground font-rajdhani transition-all focus:outline-none focus:border-primary focus:shadow-neon resize-y"
                />
              </div>
              <button
                type="submit"
                className="px-10 py-4 bg-gradient-primary text-background font-orbitron font-semibold uppercase tracking-wider shadow-neon-lg rounded-sm transition-all hover:-translate-y-0.5 hover:shadow-neon-xl inline-flex items-center gap-3 relative overflow-hidden group"
              >
                Send Message
                <i className="fas fa-paper-plane" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
