import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Personal Finance Management",
    description: "A Java application for managing income, expenses, and savings with MySQL backend and Swing/JavaFX UI.",
    tags: ["Java", "MySQL", "JDBC", "Swing"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    details: [
      "Developed using Java in Eclipse IDE for efficient finance management",
      "Integrated Java JDBC with MySQL for secure data handling",
      "Used Swing/JavaFX for an interactive user interface",
      "Categorizes expenses, generates monthly reports",
      "Assists users in budgeting and tracking financial goals",
    ],
  },
  {
    title: "Customer Segmentation",
    description: "K-Means clustering to group customers based on purchasing behavior, demographics, and spending patterns.",
    tags: ["Python", "K-Means", "Data Analysis", "ML"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    details: [
      "Applied K-Means clustering for customer grouping",
      "Used Python/R for data preprocessing and visualization",
      "Identified key segments for improved marketing strategies",
      "Enabled personalized recommendations and boosted sales",
      "Supported data-driven business decisions",
    ],
  },
  {
    title: "StudyBuddy AI",
    description: "An AI-powered study assistant that helps students with learning, note-taking, and exam preparation.",
    tags: ["HTML", "JavaScript", "AI"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    details: [
      "Built an interactive AI-powered study companion",
      "Developed using HTML and JavaScript for a lightweight web experience",
      "Helps students organize notes and prepare for exams",
      "Integrates AI features for smart study recommendations",
      "Responsive design for use across devices",
    ],
  },
  {
    title: "Personal Expense Tracker",
    description: "A database-driven expense tracking application for managing personal finances with detailed reports.",
    tags: ["DBMS", "MySQL", "XAMPP", "PHP"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    details: [
      "Designed and implemented a relational database schema in MySQL",
      "Used XAMPP for local server and database management",
      "Tracks income and expenses with category-based filtering",
      "Generates detailed financial reports and summaries",
      "CRUD operations for seamless data management",
    ],
  },
  {
    title: "AllerScan",
    description: "A mobile-friendly application that helps users identify allergens in food products using scanning technology.",
    tags: ["Firebase", "JavaScript", "Cloud"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    details: [
      "Built with Firebase for real-time data storage and authentication",
      "Scans food products to identify potential allergens",
      "Provides personalized allergen alerts based on user profiles",
      "Cloud-based architecture for seamless cross-device access",
      "Helps users make safer food choices with instant results",
    ],
  },
  {
    title: "Fitness Tracker Insights",
    description: "Analyzes users' physical activity data—steps, calories, heart rate, sleep patterns—using R.",
    tags: ["R", "ggplot2", "Statistics", "Data Viz"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
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
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 relative border-b border-primary/10">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-orbitron text-4xl md:text-[3.5rem] font-bold text-primary text-neon uppercase tracking-[3px] mb-4 relative inline-block"
        >
          Projects
          <span className="absolute -bottom-6 left-0 w-[100px] h-1 bg-gradient-primary rounded shadow-neon" />
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg mb-16 mt-10"
        >
          A showcase of my work spanning AI, web development, and data-driven applications.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="bg-black/30 rounded overflow-hidden border border-primary/20 transition-all duration-400 hover:-translate-y-2 hover:shadow-neon-xl hover:border-primary relative group h-[420px] cursor-pointer"
              onClick={() => setActiveModal(idx)}
            >
              {/* Image */}
              <div className="h-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient overlay - always visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-10">
                {/* Project number */}
                <span className="font-orbitron text-xs text-primary/50 tracking-[5px] mb-2 block">
                  PROJECT_{String(idx + 1).padStart(2, "0")}
                </span>
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
                <motion.div
                  initial={false}
                  animate={{ opacity: hoveredIdx === idx ? 1 : 0, x: hoveredIdx === idx ? 0 : -10 }}
                  className="font-orbitron text-sm text-primary uppercase tracking-wider inline-flex items-center gap-2"
                >
                  View Details
                  <ChevronRight className="w-4 h-4" />
                </motion.div>
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000] flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-card p-10 rounded-lg max-w-[800px] w-full border border-primary shadow-neon-xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="font-orbitron text-xs text-primary/50 tracking-[5px] mb-2 block">
                PROJECT_{String(activeModal + 1).padStart(2, "0")}
              </span>
              <h3 className="font-orbitron text-2xl md:text-3xl text-primary mb-2">
                {projects[activeModal].title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[activeModal].tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-secondary/20 px-3 py-1 rounded-sm text-xs text-foreground border border-secondary/30 font-orbitron tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6">
                {projects[activeModal].description}
              </p>
              <ul className="space-y-3 mb-8">
                {projects[activeModal].details.map((detail, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="text-muted-foreground pl-6 relative before:content-['▹'] before:absolute before:left-0 before:text-primary"
                  >
                    {detail}
                  </motion.li>
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
