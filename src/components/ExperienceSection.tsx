import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Student Research Assistant – VEGAS",
    subtitle: "Groundwater & Contaminated Site Remediation",
    company: "University of Stuttgart",
    period: "Apr 2023 – Present",
    points: [
      "Hydraulic design and dimensioning of groundwater wells",
      "CAD layouts, apparatus drawings, and P&IDs for groundwater remediation (AutoCAD)",
      "Hydraulic calculations and technical design of groundwater lowering systems",
      "Contribution to tender documents and planning documentation",
    ],
  },
  {
    title: "Student Research Assistant – IFU",
    subtitle: "Institute for Metal Forming Technology",
    company: "University of Stuttgart",
    period: "Oct 2023 – Apr 2024",
    points: [
      "FEM simulations for complex forming processes (ANSYS Workbench, QForm)",
      "CAD-based tool designs using CATIA V5 and Spaceclaim",
      "Modeling and simulation of flow behavior in hybrid systems",
    ],
  },
  {
    title: "Junior Production Engineer",
    subtitle: "Design & Production",
    company: "Calsys India Pvt. Ltd.",
    period: "Jun 2018 – Nov 2020",
    points: [
      "Design and drafting of calender system components (AutoCAD)",
      "Reduced design-to-manufacturing time by 25%",
      "Improved project efficiency by 20%",
      "Cross-functional team coordination between design, manufacturing, and QA",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-accent" />
          Experience
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
