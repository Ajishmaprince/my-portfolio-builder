import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Personal Finance Management",
    description:
      "A Java application for managing income, expenses, and savings with MySQL backend and Swing/JavaFX UI.",
    tags: ["Java", "MySQL", "JDBC", "Swing"],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    details: [
      "Developed using Java in Eclipse IDE for efficient finance management",
      "Integrated Java JDBC with MySQL for secure data handling",
      "Used Swing/JavaFX for an interactive user interface",
      "Categorizes expenses, generates monthly reports",
      "Assists users in budgeting and tracking financial goals",
    ],
  },
  {
    title: "Customer Segmentation for E-commerce",
    description:
      "K-Means clustering to group customers based on purchasing behavior, demographics, and spending patterns.",
    tags: ["Python", "K-Means", "Data Analysis", "ML"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    details: [
      "Applied K-Means clustering for customer grouping",
      "Used Python/R for data preprocessing and visualization",
      "Identified key segments for improved marketing strategies",
      "Enabled personalized recommendations and boosted sales",
      "Supported data-driven business decisions",
    ],
  },
  {
    title: "Fitness Tracker Insights",
    description:
      "Analyzes users' physical activity data—steps, calories, heart rate, sleep patterns—using R.",
    tags: ["R", "ggplot2", "Statistics", "Data Viz"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    details: [
      "Analyzes steps, calories, heart rate, and sleep data",
      "Employs data cleaning, visualization with ggplot2",
      "Uses statistical modeling to uncover health trends",
      "Provides personalized fitness insights and recommendations",
      "Helps users achieve wellness goals with data-driven decisions",
    ],
  },
];

const ProjectsSection = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 relative border-b border-primary/10">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-orbitron text-4xl md:text-[3.5rem] font-bold text-primary text-neon uppercase tracking-[3px] mb-16 relative inline-block"
        >
          Projects
          <span className="absolute -bottom-6 left-0 w-[100px] h-1 bg-gradient-primary rounded shadow-neon" />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-black/30 rounded overflow-hidden border border-primary/20 shadow-neon transition-all duration-400 hover:-translate-y-2 hover:shadow-neon-xl hover:border-primary relative group h-[420px]"
            >
              {/* Image */}
              <div className="h-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-10 bg-gradient-to-t from-background/95 via-background/70 to-transparent">
                <h3 className="font-orbitron text-xl mb-3 text-primary text-neon">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary/20 px-3 py-1 rounded-sm text-xs text-foreground border border-secondary/30 font-orbitron tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setActiveModal(idx)}
                  className="font-orbitron text-sm text-primary uppercase tracking-wider hover:text-accent transition-colors inline-flex items-center gap-2"
                >
                  View Details
                  <i className="fas fa-arrow-right text-xs" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeModal !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-[1000] flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card p-10 rounded-lg max-w-[800px] w-full border border-primary shadow-neon-xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-orbitron text-2xl md:text-3xl text-primary mb-6">
                {projects[activeModal].title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {projects[activeModal].description}
              </p>
              <ul className="space-y-3 mb-8">
                {projects[activeModal].details.map((detail, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground pl-6 relative before:content-['▹'] before:absolute before:left-0 before:text-primary"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setActiveModal(null)}
                className="px-6 py-3 bg-primary text-background font-orbitron font-semibold rounded transition-all hover:bg-accent hover:-translate-y-0.5"
              >
                CLOSE
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
