import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="fixed bottom-8 right-8 w-[60px] h-[60px] bg-primary/10 rounded flex items-center justify-center text-primary text-xl shadow-neon-lg cursor-pointer z-50 transition-all border border-primary/50 animate-float hover:bg-primary hover:text-background hover:shadow-neon-xl hover:animate-none"
      aria-label="Scroll to top"
    >
      <i className="fas fa-arrow-up" />
    </a>
  );
};

export default ScrollToTop;
