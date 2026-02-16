import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "de";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.experience": { en: "Experience", de: "Erfahrung" },
  "nav.education": { en: "Education", de: "Ausbildung" },
  "nav.projects": { en: "Projects", de: "Projekte" },
  "nav.skills": { en: "Skills", de: "Kompetenzen" },
  "nav.contact": { en: "Contact", de: "Kontakt" },

  // Hero
  "hero.role": { en: "Water Resources Engineer", de: "Wasserbauingenieur" },
  "hero.subtitle": {
    en: "M.Sc. Water Resources Engineering & Management · University of Stuttgart",
    de: "M.Sc. Water Resources Engineering & Management · Universität Stuttgart",
  },
  "hero.location": { en: "Stuttgart, Germany", de: "Stuttgart, Deutschland" },
  "hero.cta": { en: "View My Work", de: "Meine Arbeit ansehen" },

  // Experience
  "exp.title": { en: "Experience", de: "Berufserfahrung" },
  "exp.0.title": {
    en: "Student Research Assistant – VEGAS",
    de: "Studentische Hilfskraft – VEGAS",
  },
  "exp.0.subtitle": {
    en: "Groundwater & Contaminated Site Remediation",
    de: "Grundwasser- & Altlastensanierung",
  },
  "exp.0.company": { en: "University of Stuttgart", de: "Universität Stuttgart" },
  "exp.0.period": { en: "Apr 2023 – Present", de: "Apr 2023 – Heute" },
  "exp.0.p0": {
    en: "Hydraulic design and dimensioning of groundwater wells",
    de: "Hydraulische Auslegung und Dimensionierung von Grundwasserbrunnen",
  },
  "exp.0.p1": {
    en: "CAD layouts, apparatus drawings, and P&IDs for groundwater remediation (AutoCAD)",
    de: "CAD-Layouts, Apparatezeichnungen und R&I-Fließbilder für die Grundwassersanierung (AutoCAD)",
  },
  "exp.0.p2": {
    en: "Hydraulic calculations and technical design of groundwater lowering systems",
    de: "Hydraulische Berechnungen und technische Planung von Grundwasserabsenkungsanlagen",
  },
  "exp.0.p3": {
    en: "Contribution to tender documents and planning documentation",
    de: "Mitwirkung an Ausschreibungsunterlagen und Planungsdokumentation",
  },
  "exp.1.title": {
    en: "Student Research Assistant – IFU",
    de: "Studentische Hilfskraft – IFU",
  },
  "exp.1.subtitle": {
    en: "Institute for Metal Forming Technology",
    de: "Institut für Umformtechnik",
  },
  "exp.1.company": { en: "University of Stuttgart", de: "Universität Stuttgart" },
  "exp.1.period": { en: "Oct 2023 – Apr 2024", de: "Okt 2023 – Apr 2024" },
  "exp.1.p0": {
    en: "FEM simulations for complex forming processes (ANSYS Workbench, QForm)",
    de: "FEM-Simulationen für komplexe Umformprozesse (ANSYS Workbench, QForm)",
  },
  "exp.1.p1": {
    en: "CAD-based tool designs using CATIA V5 and Spaceclaim",
    de: "CAD-basierte Werkzeugkonstruktionen mit CATIA V5 und Spaceclaim",
  },
  "exp.1.p2": {
    en: "Modeling and simulation of flow behavior in hybrid systems",
    de: "Modellierung und Simulation des Fließverhaltens in Hybridsystemen",
  },
  "exp.2.title": {
    en: "Junior Production Engineer",
    de: "Junior-Produktionsingenieur",
  },
  "exp.2.subtitle": { en: "Design & Production", de: "Konstruktion & Fertigung" },
  "exp.2.company": { en: "Calsys India Pvt. Ltd.", de: "Calsys India Pvt. Ltd." },
  "exp.2.period": { en: "Jun 2018 – Nov 2020", de: "Jun 2018 – Nov 2020" },
  "exp.2.p0": {
    en: "Design and drafting of calender system components (AutoCAD)",
    de: "Konstruktion und Zeichnung von Kalanderanlagen-Komponenten (AutoCAD)",
  },
  "exp.2.p1": {
    en: "Reduced design-to-manufacturing time by 25%",
    de: "Verkürzung der Konstruktions- bis Fertigungszeit um 25 %",
  },
  "exp.2.p2": {
    en: "Improved project efficiency by 20%",
    de: "Steigerung der Projekteffizienz um 20 %",
  },
  "exp.2.p3": {
    en: "Cross-functional team coordination between design, manufacturing, and QA",
    de: "Bereichsübergreifende Teamkoordination zwischen Konstruktion, Fertigung und QS",
  },

  // Education
  "edu.title": { en: "Education", de: "Ausbildung" },
  "edu.msc.title": {
    en: "M.Sc. Water Resources Engineering & Management (WAREM)",
    de: "M.Sc. Water Resources Engineering & Management (WAREM)",
  },
  "edu.msc.uni": { en: "University of Stuttgart", de: "Universität Stuttgart" },
  "edu.msc.period": {
    en: "Oct 2022 – Sep 2026 (expected)",
    de: "Okt 2022 – Sep 2026 (voraussichtlich)",
  },
  "edu.msc.modules": { en: "Key Modules", de: "Kernmodule" },
  "edu.msc.highlights": { en: "Highlights", de: "Highlights" },
  "edu.msc.m0": {
    en: "Urban Drainage & Wastewater Treatment Plants",
    de: "Siedlungsentwässerung & Kläranlagen",
  },
  "edu.msc.m1": {
    en: "Sanitary Engineering – Practical Class (1.3)",
    de: "Siedlungswasserbau – Praktikum (1,3)",
  },
  "edu.msc.m2": {
    en: "Integrated River Management (1.7)",
    de: "Integriertes Flussgebietsmanagement (1,7)",
  },
  "edu.msc.m3": { en: "Applied GIS (2.3)", de: "Angewandtes GIS (2,3)" },
  "edu.msc.m4": {
    en: "Regional and Urban Planning I (1.3)",
    de: "Regional- und Stadtplanung I (1,3)",
  },
  "edu.msc.h0": { en: "102 ECTS completed", de: "102 ECTS abgeschlossen" },
  "edu.msc.h1": {
    en: "Master Thesis registered (Feb 2026)",
    de: "Masterarbeit angemeldet (Feb 2026)",
  },
  "edu.msc.h2": {
    en: "Thermal Treatment & Phosphorus Recycling (1.3)",
    de: "Thermische Behandlung & Phosphorrecycling (1,3)",
  },
  "edu.msc.h3": {
    en: "International Project Business / Water Sector (2.0)",
    de: "Internationales Projektgeschäft / Wassersektor (2,0)",
  },
  "edu.btech.title": {
    en: "B.Tech Mechanical Engineering",
    de: "B.Tech Maschinenbau",
  },
  "edu.btech.uni": {
    en: "SRM Institute of Science and Technology, India",
    de: "SRM Institute of Science and Technology, Indien",
  },
  "edu.btech.period": { en: "2014 – 2018", de: "2014 – 2018" },
  "edu.btech.desc": {
    en: "Computer Aided Design & Analysis · Fluid Mechanics · Heat & Mass Transfer · Manufacturing Technology",
    de: "Rechnergestütztes Konstruieren & Analyse · Strömungsmechanik · Wärme- & Stoffübertragung · Fertigungstechnik",
  },
  "edu.cert.title": {
    en: "Google Project Management Professional Certificate",
    de: "Google Project Management Professional Certificate",
  },
  "edu.cert.uni": { en: "Coursera / Google", de: "Coursera / Google" },
  "edu.cert.period": { en: "Oct 2023 – Jun 2024", de: "Okt 2023 – Jun 2024" },
  "edu.cert.desc": {
    en: "6-course professional certificate covering project planning, Agile methodology, stakeholder communication, and procurement.",
    de: "6-Kurse-Zertifikat zu Projektplanung, Agile Methodik, Stakeholder-Kommunikation und Beschaffung.",
  },

  // Projects
  "proj.title": { en: "Projects", de: "Projekte" },
  "proj.sub": { en: "GIS Projects", de: "GIS-Projekte" },
  "proj.objective": { en: "Objective:", de: "Ziel:" },
  "proj.data": { en: "Data:", de: "Daten:" },
  "proj.methods": { en: "Methods:", de: "Methoden:" },
  "proj.output": { en: "Output:", de: "Ergebnis:" },
  "proj.competencies": { en: "Competencies:", de: "Kompetenzen:" },
  "proj.0.title": {
    en: "Flood Hazard Susceptibility Mapping – Region Stuttgart",
    de: "Hochwassergefährdungskartierung – Region Stuttgart",
  },
  "proj.0.objective": {
    en: "GIS-based flood hazard susceptibility assessment at 100 m raster resolution.",
    de: "GIS-basierte Hochwassergefährdungsbewertung mit 100 m Rasterauflösung.",
  },
  "proj.0.data": {
    en: "Copernicus DEM, CHIRPS rainfall (May–July 2025), CORINE Land Cover, WorldPop 2025.",
    de: "Copernicus-DEM, CHIRPS-Niederschlag (Mai–Juli 2025), CORINE-Landbedeckung, WorldPop 2025.",
  },
  "proj.0.methods": {
    en: "Slope, Flow Accumulation, Distance to Streams, Reclassification, Weighted Overlay.",
    de: "Hangneigung, Abflussakkumulation, Gewässerentfernung, Reklassifikation, Gewichtete Überlagerung.",
  },
  "proj.0.output": {
    en: "Flood Hazard Index (Very Low – Very High) and population exposure analysis.",
    de: "Hochwassergefährdungsindex (Sehr Niedrig – Sehr Hoch) und Bevölkerungsexpositionsanalyse.",
  },
  "proj.0.competencies": {
    en: "Hydrological modeling, raster analysis, multi-criteria analysis (MCA), spatial risk assessment.",
    de: "Hydrologische Modellierung, Rasteranalyse, Multikriterienanalyse (MCA), räumliche Risikobewertung.",
  },
  "proj.1.title": {
    en: "LST & NDVI Time-Series Analysis – Delhi (2014–2024)",
    de: "LST- & NDVI-Zeitreihenanalyse – Delhi (2014–2024)",
  },
  "proj.1.objective": {
    en: "Assess urban heat island dynamics and vegetation change over a decade.",
    de: "Bewertung der städtischen Wärmeinsel-Dynamik und Vegetationsveränderung über ein Jahrzehnt.",
  },
  "proj.1.data": {
    en: "LANDSAT 8 (OLI & TIRS), USGS GeoTIFF.",
    de: "LANDSAT 8 (OLI & TIRS), USGS GeoTIFF.",
  },
  "proj.1.methods": {
    en: "TOA Radiance conversion, Brightness Temperature, NDVI calculation, Emissivity correction.",
    de: "TOA-Radianzkonversion, Helligkeitstemperatur, NDVI-Berechnung, Emissivitätskorrektur.",
  },
  "proj.1.output": {
    en: "LST increase up to +5°C in summer; decline in NDVI indicating vegetation loss.",
    de: "LST-Anstieg bis +5°C im Sommer; NDVI-Rückgang als Indikator für Vegetationsverlust.",
  },
  "proj.1.competencies": {
    en: "Remote sensing, thermal analysis, spectral indices, environmental monitoring.",
    de: "Fernerkundung, Thermalanalyse, Spektralindizes, Umweltmonitoring.",
  },
  "proj.2.title": {
    en: "Development Capacity Analysis – Mittelhessen",
    de: "Siedlungsflächenpotenzialanalyse – Mittelhessen",
  },
  "proj.2.objective": {
    en: "Identify potential development areas while minimizing urban sprawl.",
    de: "Identifikation potenzieller Entwicklungsflächen bei Minimierung der Zersiedelung.",
  },
  "proj.2.data": {
    en: "Regional planning data, protected areas, SRTM slope (>15%), settlement layers.",
    de: "Regionalplandaten, Schutzgebiete, SRTM-Hangneigung (>15 %), Siedlungsschichten.",
  },
  "proj.2.methods": {
    en: "Exclusion modeling (Merge, Dissolve, Erase), 500 m proximity buffer, spatial overlay.",
    de: "Ausschlussmodellierung (Merge, Dissolve, Erase), 500-m-Puffer, räumliche Überlagerung.",
  },
  "proj.2.output": {
    en: "Map of development capacity areas with area statistics.",
    de: "Karte der Siedlungsflächenpotenziale mit Flächenstatistik.",
  },
  "proj.2.competencies": {
    en: "Spatial decision support, land-use planning analysis, proximity modeling.",
    de: "Räumliche Entscheidungsunterstützung, Flächennutzungsplanung, Proximititätsmodellierung.",
  },

  // Skills
  "skills.title": { en: "Skills & Expertise", de: "Kompetenzen & Fachkenntnisse" },
  "skills.cat.cad": { en: "CAD & Technical Planning", de: "CAD & Technische Planung" },
  "skills.cat.gis": { en: "GIS & Spatial Analysis", de: "GIS & Räumliche Analyse" },
  "skills.cat.sim": { en: "Simulation & Modeling", de: "Simulation & Modellierung" },
  "skills.cat.water": { en: "Water Engineering", de: "Wasserbau" },
  "skills.cat.lang": { en: "Languages", de: "Sprachen" },
  "skills.water.0": { en: "Groundwater Remediation", de: "Grundwassersanierung" },
  "skills.water.1": { en: "Urban Drainage", de: "Siedlungsentwässerung" },
  "skills.water.2": { en: "Wastewater Technology", de: "Abwassertechnik" },
  "skills.water.3": { en: "Flood Protection", de: "Hochwasserschutz" },
  "skills.lang.german": { en: "German", de: "Deutsch" },
  "skills.lang.english": { en: "English", de: "Englisch" },
  "skills.lang.hindi": { en: "Hindi", de: "Hindi" },
  "skills.level.fluent": { en: "Fluent", de: "Fließend" },
  "skills.level.native": { en: "Native", de: "Muttersprache" },
  "skills.level.intermediate": { en: "Intermediate", de: "Mittel" },
  "skills.level.basic": { en: "Basic", de: "Grundkenntnisse" },
  "skills.level.professional": { en: "Professional", de: "Professionell" },

  // Contact
  "contact.title": { en: "Get in Touch", de: "Kontakt aufnehmen" },
  "contact.subtitle": {
    en: "Available immediately for working student positions and full-time roles from October 2026.",
    de: "Sofort verfügbar für Werkstudentenstellen und Vollzeitstellen ab Oktober 2026.",
  },
  "contact.rights": {
    en: "All rights reserved.",
    de: "Alle Rechte vorbehalten.",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "de" : "en"));

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
