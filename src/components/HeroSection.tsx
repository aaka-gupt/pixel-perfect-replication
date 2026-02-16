import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-primary/60" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in">
          {t("hero.role")}
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 tracking-tight leading-tight">
          Aakash Gupta
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-primary-foreground/70 text-sm">
          <a href="mailto:guptaa_aakash@web.de" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail className="w-4 h-4" />
            guptaa_aakash@web.de
          </a>
          <a href="tel:+4917643499600" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="w-4 h-4" />
            0176 434 996 00
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {t("hero.location")}
          </span>
          <a
            href="https://linkedin.com/in/aakash-gupta2510"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>

        <div className="mt-12">
          <a
            href="#experience"
            className="inline-block border border-accent/50 text-accent px-8 py-3 rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            {t("hero.cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
