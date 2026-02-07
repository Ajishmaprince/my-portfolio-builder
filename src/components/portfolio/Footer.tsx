const socialLinks = [
  { icon: "fab fa-github", href: "#", label: "GitHub" },
  { icon: "fab fa-linkedin-in", href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-card py-16 text-center border-t border-primary/20 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent shadow-neon" />

      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[50px] h-[50px] bg-primary/10 rounded flex items-center justify-center text-muted-foreground text-lg border border-primary/30 transition-all duration-300 hover:bg-primary hover:text-background hover:-translate-y-1 hover:shadow-neon-lg hover:border-primary"
              aria-label={link.label}
            >
              <i className={link.icon} />
            </a>
          ))}
        </div>
        <p className="text-muted-foreground text-sm font-orbitron tracking-wider">
          © 2025 AJISHMA SRUTHI P. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
