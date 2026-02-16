import { Wrench } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SkillsSection = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t("skills.cat.cad"),
      skills: [
        { name: "AutoCAD", level: "3+ years" },
        { name: "Revit (BIM)", level: t("skills.level.basic") },
        { name: "Civil 3D", level: t("skills.level.basic") },
        { name: "CATIA V5", level: t("skills.level.basic") },
      ],
    },
    {
      title: t("skills.cat.gis"),
      skills: [
        { name: "ArcGIS", level: t("skills.level.intermediate") },
        { name: "QGIS", level: t("skills.level.basic") },
        { name: "Spatial Analysis", level: "Applied" },
      ],
    },
    {
      title: t("skills.cat.sim"),
      skills: [
        { name: "ANSYS Workbench", level: "FEM" },
        { name: "QForm", level: "Flow" },
        { name: "Hydraulic Calculations", level: t("skills.level.professional") },
      ],
    },
    {
      title: t("skills.cat.water"),
      skills: [
        { name: t("skills.water.0"), level: "" },
        { name: t("skills.water.1"), level: "" },
        { name: t("skills.water.2"), level: "" },
        { name: t("skills.water.3"), level: "" },
      ],
    },
    {
      title: t("skills.cat.lang"),
      skills: [
        { name: t("skills.lang.german"), level: "B2 (C1 in prep)" },
        { name: t("skills.lang.english"), level: t("skills.level.fluent") },
        { name: t("skills.lang.hindi"), level: t("skills.level.native") },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 flex items-center gap-3">
          <Wrench className="w-8 h-8 text-accent" />
          {t("skills.title")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <div key={i} className="bg-card rounded-lg p-6 card-elevated">
              <h3 className="text-base font-semibold text-foreground mb-4 pb-2 border-b border-border">
                {cat.title}
              </h3>
              <div className="space-y-3">
                {cat.skills.map((skill, j) => (
                  <div key={j} className="flex items-center justify-between">
                    <span className="text-sm text-foreground">{skill.name}</span>
                    {skill.level && (
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
