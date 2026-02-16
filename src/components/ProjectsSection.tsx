import { FolderOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProjectsSection = () => {
  const { t } = useLanguage();

  const gisProjects = [
    {
      title: t("proj.0.title"),
      year: "2025",
      objective: t("proj.0.objective"),
      data: t("proj.0.data"),
      methods: t("proj.0.methods"),
      output: t("proj.0.output"),
      competencies: t("proj.0.competencies"),
    },
    {
      title: t("proj.1.title"),
      year: "2024",
      objective: t("proj.1.objective"),
      data: t("proj.1.data"),
      methods: t("proj.1.methods"),
      output: t("proj.1.output"),
      competencies: t("proj.1.competencies"),
    },
    {
      title: t("proj.2.title"),
      year: "2025",
      objective: t("proj.2.objective"),
      data: t("proj.2.data"),
      methods: t("proj.2.methods"),
      output: t("proj.2.output"),
      competencies: t("proj.2.competencies"),
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
          <FolderOpen className="w-8 h-8 text-accent" />
          {t("proj.title")}
        </h2>
        <p className="text-muted-foreground mb-12 ml-11">{t("proj.sub")}</p>

        <div className="space-y-6">
          {gisProjects.map((project, i) => (
            <div key={i} className="bg-card rounded-lg p-8 card-elevated">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <span className="text-muted-foreground text-sm mt-1 md:mt-0 whitespace-nowrap">
                  {project.year}
                </span>
              </div>

              <p className="text-sm text-foreground mb-4">
                <span className="font-medium">{t("proj.objective")}</span>{" "}
                {project.objective}
              </p>

              <div className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <p><span className="font-medium text-foreground">{t("proj.data")}</span> {project.data}</p>
                <p><span className="font-medium text-foreground">{t("proj.methods")}</span> {project.methods}</p>
                <p><span className="font-medium text-foreground">{t("proj.output")}</span> {project.output}</p>
                <p><span className="font-medium text-foreground">{t("proj.competencies")}</span> {project.competencies}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
