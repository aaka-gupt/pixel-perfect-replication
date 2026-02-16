import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const EducationSection = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-accent" />
          {t("edu.title")}
        </h2>

        <div className="space-y-8">
          <div className="bg-card rounded-lg p-8 card-elevated">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{t("edu.msc.title")}</h3>
                <p className="text-accent font-medium">{t("edu.msc.uni")}</p>
              </div>
              <span className="text-muted-foreground text-sm mt-2 md:mt-0 whitespace-nowrap">
                {t("edu.msc.period")}
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground mt-4">
              <div>
                <p className="font-medium text-foreground mb-2">{t("edu.msc.modules")}</p>
                <ul className="space-y-1">
                  <li>• {t("edu.msc.m0")}</li>
                  <li>• {t("edu.msc.m1")}</li>
                  <li>• {t("edu.msc.m2")}</li>
                  <li>• {t("edu.msc.m3")}</li>
                  <li>• {t("edu.msc.m4")}</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2">{t("edu.msc.highlights")}</p>
                <ul className="space-y-1">
                  <li>• {t("edu.msc.h0")}</li>
                  <li>• {t("edu.msc.h1")}</li>
                  <li>• {t("edu.msc.h2")}</li>
                  <li>• {t("edu.msc.h3")}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 card-elevated">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{t("edu.btech.title")}</h3>
                <p className="text-accent font-medium">{t("edu.btech.uni")}</p>
              </div>
              <span className="text-muted-foreground text-sm mt-2 md:mt-0 whitespace-nowrap">
                {t("edu.btech.period")}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{t("edu.btech.desc")}</p>
          </div>

          <div className="bg-card rounded-lg p-8 card-elevated">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{t("edu.cert.title")}</h3>
                <p className="text-accent font-medium">{t("edu.cert.uni")}</p>
              </div>
              <span className="text-muted-foreground text-sm mt-2 md:mt-0 whitespace-nowrap">
                {t("edu.cert.period")}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{t("edu.cert.desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
