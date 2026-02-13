import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight, Calendar, Clock } from "lucide-react";

const articles = [
  {
    title: "How I Built an AI-Powered Allergy Detection App",
    excerpt: "A deep dive into using TensorFlow and Firebase to create AllerScan — an app that identifies allergens from food images in real-time.",
    date: "Jan 2025",
    readTime: "5 min read",
    tags: ["AI/ML", "Firebase", "TensorFlow"],
    color: "hsl(185 100% 50%)",
  },
  {
    title: "Understanding Customer Segmentation with K-Means",
    excerpt: "Exploring unsupervised learning techniques to group customers by behavior, and how businesses can leverage these insights for targeted marketing.",
    date: "Dec 2024",
    readTime: "4 min read",
    tags: ["Data Science", "Python", "Clustering"],
    color: "hsl(280 100% 60%)",
  },
  {
    title: "Getting Started with Cybersecurity: A Beginner's Perspective",
    excerpt: "Key lessons from my cybersecurity internship — from network security fundamentals to hands-on penetration testing experiences.",
    date: "Aug 2025",
    readTime: "6 min read",
    tags: ["Cybersecurity", "Networking", "VAPT"],
    color: "hsl(340 100% 59%)",
  },
  {
    title: "Building Responsive Web Apps with React & Tailwind CSS",
    excerpt: "Tips and patterns I've learned for creating modern, performant web applications using the React ecosystem and utility-first CSS.",
    date: "Nov 2025",
    readTime: "4 min read",
    tags: ["React", "Tailwind CSS", "Web Dev"],
    color: "hsl(45 100% 50%)",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-space text-xs text-primary/50 tracking-[6px] uppercase block mb-3">
            Thought Leadership
          </span>
          <h2 className="font-orbitron text-4xl md:text-6xl font-black text-gradient uppercase tracking-[4px]">
            Blog & Articles
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-7 hover-glow group relative overflow-hidden cursor-pointer"
            >
              {/* Accent top border */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${article.color}, transparent)` }}
              />

              <div className="relative z-10">
                {/* Meta row */}
                <div className="flex items-center gap-4 mb-4 text-muted-foreground text-xs font-space">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-orbitron text-lg font-bold text-foreground group-hover:text-gradient transition-colors duration-300 mb-3 flex items-start gap-2">
                  <span>{article.title}</span>
                  <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-1 text-primary/0 group-hover:text-primary transition-colors" />
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm font-space leading-relaxed mb-5">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="glass text-[10px] px-3 py-1 rounded-full font-orbitron tracking-wider"
                      style={{ color: article.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500"
                style={{ background: article.color }}
              />
            </motion.article>
          ))}
        </div>

        {/* Coming soon note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-space text-muted-foreground">
              More articles coming soon — stay tuned!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
