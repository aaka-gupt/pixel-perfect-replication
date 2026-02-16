import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Get in Touch
        </h2>
        <p className="text-muted-foreground mb-10">
          Available immediately for working student positions and full-time roles from October 2026.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="mailto:guptaa_aakash@web.de"
            className="flex items-center gap-3 bg-card rounded-lg p-5 card-elevated justify-center text-sm"
          >
            <Mail className="w-5 h-5 text-accent" />
            <span className="text-foreground">guptaa_aakash@web.de</span>
          </a>
          <a
            href="tel:+4917643499600"
            className="flex items-center gap-3 bg-card rounded-lg p-5 card-elevated justify-center text-sm"
          >
            <Phone className="w-5 h-5 text-accent" />
            <span className="text-foreground">0176 434 996 00</span>
          </a>
          <a
            href="https://linkedin.com/in/aakash-gupta2510"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card rounded-lg p-5 card-elevated justify-center text-sm"
          >
            <Linkedin className="w-5 h-5 text-accent" />
            <span className="text-foreground">LinkedIn</span>
          </a>
          <a
            href="https://www.xing.com/profile/Aakash_Gupta11"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card rounded-lg p-5 card-elevated justify-center text-sm"
          >
            <Linkedin className="w-5 h-5 text-accent" />
            <span className="text-foreground">Xing</span>
          </a>
          <div className="flex items-center gap-3 bg-card rounded-lg p-5 card-elevated justify-center text-sm">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-foreground">Stuttgart, Germany</span>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Aakash Gupta. All rights reserved.
      </div>
    </section>
  );
};

export default ContactSection;
