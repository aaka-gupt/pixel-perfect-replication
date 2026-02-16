import { Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "CAD & Technical Planning",
    skills: [
      { name: "AutoCAD", level: "3+ years" },
      { name: "Revit (BIM)", level: "Basic" },
      { name: "Civil 3D", level: "Basic" },
      { name: "CATIA V5", level: "Basic" },
    ],
  },
  {
    title: "GIS & Spatial Analysis",
    skills: [
      { name: "ArcGIS", level: "Good" },
      { name: "QGIS", level: "Basic" },
      { name: "Spatial Analysis", level: "Applied" },
    ],
  },
  {
    title: "Simulation & Modeling",
    skills: [
      { name: "ANSYS Workbench", level: "FEM" },
      { name: "QForm", level: "Flow" },
      { name: "Hydraulic Calculations", level: "Professional" },
    ],
  },
  {
    title: "Water Engineering",
    skills: [
      { name: "Groundwater Remediation", level: "" },
      { name: "Urban Drainage", level: "" },
      { name: "Wastewater Technology", level: "" },
      { name: "Flood Protection", level: "" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "German", level: "B2 (C1 in prep)" },
      { name: "English", level: "Fluent" },
      { name: "Hindi", level: "Native" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 flex items-center gap-3">
          <Wrench className="w-8 h-8 text-accent" />
          Skills & Expertise
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
