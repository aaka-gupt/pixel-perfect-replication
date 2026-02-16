import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-accent" />
          Education
        </h2>

        <div className="space-y-8">
          <div className="bg-card rounded-lg p-8 card-elevated">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  M.Sc. Water Resources Engineering & Management (WAREM)
                </h3>
                <p className="text-accent font-medium">University of Stuttgart</p>
              </div>
              <span className="text-muted-foreground text-sm mt-2 md:mt-0 whitespace-nowrap">
                Oct 2022 – Sep 2026 (expected)
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground mt-4">
              <div>
                <p className="font-medium text-foreground mb-2">Key Modules</p>
                <ul className="space-y-1">
                  <li>• Urban Drainage & Wastewater Treatment Plants</li>
                  <li>• Sanitary Engineering – Practical Class (1.3)</li>
                  <li>• Integrated River Management (1.7)</li>
                  <li>• Applied GIS (2.3)</li>
                  <li>• Regional and Urban Planning I (1.3)</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2">Highlights</p>
                <ul className="space-y-1">
                  <li>• 102 ECTS completed</li>
                  <li>• Master Thesis registered (Feb 2026)</li>
                  <li>• Thermal Treatment & Phosphorus Recycling (1.3)</li>
                  <li>• International Project Business / Water Sector (2.0)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 card-elevated">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  B.Tech Mechanical Engineering
                </h3>
                <p className="text-accent font-medium">SRM Institute of Science and Technology, India</p>
              </div>
              <span className="text-muted-foreground text-sm mt-2 md:mt-0 whitespace-nowrap">
                2014 – 2018
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Computer Aided Design & Analysis · Fluid Mechanics · Heat & Mass Transfer · Manufacturing Technology
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 card-elevated">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Google Project Management Professional Certificate
                </h3>
                <p className="text-accent font-medium">Coursera / Google</p>
              </div>
              <span className="text-muted-foreground text-sm mt-2 md:mt-0 whitespace-nowrap">
                Oct 2023 – Jun 2024
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              6-course professional certificate covering project planning, Agile methodology, stakeholder communication, and procurement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
