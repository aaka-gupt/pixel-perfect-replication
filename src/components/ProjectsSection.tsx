import { FolderOpen } from "lucide-react";

const gisProjects = [
  {
    title: "Flood Hazard Susceptibility Mapping – Region Stuttgart",
    year: "2025",
    objective:
      "GIS-based flood hazard susceptibility assessment at 100 m raster resolution.",
    data: "Copernicus DEM, CHIRPS rainfall (May–July 2025), CORINE Land Cover, WorldPop 2025.",
    methods:
      "Slope, Flow Accumulation, Distance to Streams, Reclassification, Weighted Overlay.",
    output:
      "Flood Hazard Index (Very Low – Very High) and population exposure analysis.",
    competencies:
      "Hydrological modeling, raster analysis, multi-criteria analysis (MCA), spatial risk assessment.",
  },
  {
    title: "LST & NDVI Time-Series Analysis – Delhi (2014–2024)",
    year: "2024",
    objective:
      "Assess urban heat island dynamics and vegetation change over a decade.",
    data: "LANDSAT 8 (OLI & TIRS), USGS GeoTIFF.",
    methods:
      "TOA Radiance conversion, Brightness Temperature, NDVI calculation, Emissivity correction.",
    output:
      "LST increase up to +5°C in summer; decline in NDVI indicating vegetation loss.",
    competencies:
      "Remote sensing, thermal analysis, spectral indices, environmental monitoring.",
  },
  {
    title: "Development Capacity Analysis – Mittelhessen",
    year: "2025",
    objective:
      "Identify potential development areas while minimizing urban sprawl.",
    data: "Regional planning data, protected areas, SRTM slope (>15%), settlement layers.",
    methods:
      "Exclusion modeling (Merge, Dissolve, Erase), 500 m proximity buffer, spatial overlay.",
    output: "Map of development capacity areas with area statistics.",
    competencies:
      "Spatial decision support, land-use planning analysis, proximity modeling.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
          <FolderOpen className="w-8 h-8 text-accent" />
          Projects
        </h2>
        <p className="text-muted-foreground mb-12 ml-11">GIS Projects</p>

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
                <span className="font-medium">Objective:</span>{" "}
                {project.objective}
              </p>

              <div className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <div>
                  <p>
                    <span className="font-medium text-foreground">Data:</span>{" "}
                    {project.data}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-medium text-foreground">Methods:</span>{" "}
                    {project.methods}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-medium text-foreground">Output:</span>{" "}
                    {project.output}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-medium text-foreground">
                      Competencies:
                    </span>{" "}
                    {project.competencies}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
