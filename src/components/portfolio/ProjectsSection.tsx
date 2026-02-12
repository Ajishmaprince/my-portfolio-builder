import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, X, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Personal Finance Management",
    description: "A Java application for managing income, expenses, and savings with MySQL backend and Swing/JavaFX UI.",
    tags: ["Java", "MySQL", "JDBC", "Swing"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    color: "185 100% 50%",
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
    description: "K-Means clustering to group customers based on purchasing behavior and spending patterns.",
    tags: ["Python", "K-Means", "Data Analysis", "ML"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    color: "280 100% 60%",
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
    description: "An AI-powered study assistant for learning, note-taking, and exam preparation.",
    tags: ["HTML", "JavaScript", "AI"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    color: "48 100% 50%",
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
    description: "A database-driven expense tracking application for managing personal finances.",
    tags: ["DBMS", "MySQL", "XAMPP", "PHP"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    color: "340 100% 59%",
    details: [
      "Designed relational database schema in MySQL",
      "Used XAMPP for local server and database management",
      "Tracks income and expenses with category-based filtering",
      "Generates detailed financial reports and summaries",
      "CRUD operations for seamless data management",
    ],
  },
  {
    title: "AllerScan",
    description: "Mobile-friendly app that helps users identify allergens in food products.",
    tags: ["Firebase", "JavaScript", "Cloud"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    color: "120 60% 50%",
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
    description: "Analyzes physical activity data—steps, calories, heart rate, sleep patterns—using R.",
    tags: ["R", "ggplot2", "Statistics", "Data Viz"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    color: "200 80% 50%",
    details: [
      "Analyzes steps, calories, heart rate, and sleep data",
      "Employs data cleaning, visualization with ggplot2",
      "Uses statistical modeling to uncover health trends",
      "Provides personalized fitness insights",
      "Helps users achieve wellness goals with data-driven decisions",
    ],
  },
];

const ProjectCard = ({ project, idx, onClick }: { project: typeof projects[0]; idx: number; onClick: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      className="perspective"
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className="preserve-3d glass rounded-2xl overflow-hidden cursor-pointer group relative h-[420px]"
      >
        {/* Image */}
        <div className="absolute inset-0">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />

        {/* Color accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `hsl(${project.color})` }} />

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-8 z-10">
          <span className="font-orbitron text-[10px] tracking-[6px] block mb-2" style={{ color: `hsl(${project.color} / 0.5)` }}>
            {String(idx + 1).padStart(2, "0")}
          </span>
          <h3 className="font-orbitron text-lg font-bold mb-2" style={{ color: `hsl(${project.color})` }}>
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 font-space">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="glass px-3 py-1 rounded-full text-[10px] font-space tracking-wider text-foreground/70">{tag}</span>
            ))}
          </div>
          <motion.div
            initial={false}
            className="font-space text-xs uppercase tracking-[3px] inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
            style={{ color: `hsl(${project.color})` }}
          >
            View Details <ChevronRight className="w-3 h-3" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-space text-xs text-primary/50 tracking-[6px] uppercase block mb-3">My work</span>
          <h2 className="font-orbitron text-4xl md:text-6xl font-black text-gradient uppercase tracking-[4px] mb-4">Projects</h2>
          <p className="text-muted-foreground text-lg font-space max-w-xl">A showcase spanning AI, web development, and data-driven applications.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} onClick={() => setActiveModal(idx)} />
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
            className="fixed inset-0 bg-background/80 backdrop-blur-xl z-[1000] flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="glass-strong rounded-2xl p-10 max-w-[800px] w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `hsl(${projects[activeModal].color})` }} />

              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <span className="font-orbitron text-[10px] tracking-[6px] block mb-2" style={{ color: `hsl(${projects[activeModal].color} / 0.5)` }}>
                PROJECT {String(activeModal + 1).padStart(2, "0")}
              </span>
              <h3 className="font-orbitron text-2xl md:text-3xl font-bold mb-3" style={{ color: `hsl(${projects[activeModal].color})` }}>
                {projects[activeModal].title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[activeModal].tags.map((tag) => (
                  <span key={tag} className="glass px-3 py-1 rounded-full text-[10px] font-space tracking-wider text-foreground/70">{tag}</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 font-space">{projects[activeModal].description}</p>
              <ul className="space-y-3 mb-8">
                {projects[activeModal].details.map((detail, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="text-muted-foreground text-sm font-space pl-6 relative"
                  >
                    <span className="absolute left-0" style={{ color: `hsl(${projects[activeModal].color})` }}>▸</span>
                    {detail}
                  </motion.li>
                ))}
              </ul>
              <button
                onClick={() => setActiveModal(null)}
                className="px-8 py-3 rounded-lg font-orbitron font-bold text-sm text-background transition-all hover:-translate-y-0.5"
                style={{ background: `hsl(${projects[activeModal].color})` }}
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
