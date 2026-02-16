import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const links = [
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.education"), href: "#education" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="#" className="text-primary-foreground font-semibold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
          AG
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-primary-foreground/70 text-sm hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-primary-foreground/70 text-sm hover:text-accent transition-colors border border-primary-foreground/20 rounded-full px-3 py-1"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === "en" ? "DE" : "EN"}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-primary-foreground/70 text-xs hover:text-accent transition-colors border border-primary-foreground/20 rounded-full px-2.5 py-1 flex items-center gap-1"
          >
            <Globe className="w-3 h-3" />
            {lang === "en" ? "DE" : "EN"}
          </button>
          <button
            className="text-primary-foreground"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-primary/95 backdrop-blur-md px-6 pb-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-primary-foreground/70 text-sm hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
