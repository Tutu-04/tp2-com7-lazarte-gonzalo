export const proyectos = [
  {
    id: 1,
    titulo: "Fiscalización satelital de quema de caña",
    estado: "En desarrollo",
    descripcion:
      "Mi proyecto final de carrera. Busca detectar quemas de caña de azúcar con imágenes satelitales, cruzarlas con el catastro para saber a qué lote corresponden y armar el expediente de fiscalización.",
    detalle:
      "Lo desarrollo en grupo con dos compañeros. El backend está hecho en C# y el frontend lo estamos pasando de Blazor a React.",
    tecnologias: ["C#", ".NET", "React"],
  },
  {
    id: 2,
    titulo: "Reportes ciudadanos",
    estado: null,
    descripcion:
      "Aplicación web para reportar desperfectos de la vía pública marcándolos en un mapa.",
    detalle:
      "Cada reporte se ubica en el mapa con un pin de color según su categoría y puede llevar una foto. El backend es una API en ASP.NET Core con Entity Framework Core y SQLite, y el mapa usa Leaflet.",
    tecnologias: ["C#", "ASP.NET Core", "EF Core", "SQLite", "Leaflet"],
  },
  {
    id: 3,
    titulo: "Este portfolio",
    estado: null,
    descripcion: "Portfolio multipágina hecho para Programación 4.",
    detalle:
      "Tiene cinco páginas con navegación por React Router, un menú lateral fijo y componentes reutilizables que reciben sus datos por props.",
    tecnologias: ["React", "Vite", "React Router", "CSS"],
  },
];
