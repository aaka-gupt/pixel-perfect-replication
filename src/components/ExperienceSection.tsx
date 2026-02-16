import { Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ExperienceSection = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t("exp.0.title"),
      subtitle: t("exp.0.subtitle"),
      company: t("exp.0.company"),
      period: t("exp.0.period"),
      points: [t("exp.0.p0"), t("exp.0.p1"), t("exp.0.p2"), t("exp.0.p3")],
    },
    {
      title: t("exp.1.title"),
      subtitle: t("exp.1.subtitle"),
      company: t("exp.1.company"),
      period: t("exp.1.period"),
      points: [t("exp.1.p0"), t("exp.1.p1"), t("exp.1.p2")],
    },
    {
      title: t("exp.2.title"),
      subtitle: t("exp.2.subtitle"),
      company: t("exp.2.company"),
      period: t("exp.2.period"),
      points: [t("exp.2.p0"), t("exp.2.p1"), t("exp.2.p2"), t("exp.2.p3")],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-accent" />
          {t("exp.title")}
        </h2>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-12 md:pl-16">
                <div className="absolute left-2.5 md:left-4.5 top-2 w-3 h-3 rounded-full bg-accent border-2 border-background" />

                <div className="bg-card rounded-lg p-6 card-elevated">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-sm text-accent">{exp.subtitle}</p>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="text-muted-foreground text-sm mt-1 md:mt-0 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {exp.points.map((p, j) => (
                      <li key={j}>• {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
