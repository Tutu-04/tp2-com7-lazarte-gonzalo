import Header from "../components/Header.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { proyectos } from "../data/proyectos.js";

function Projects() {
  return (
    <section>
      <Header titulo="Proyectos" bajada="Lo que estoy construyendo y lo que ya terminé." />

      <div className="lista-proyectos">
        {proyectos.map((proyecto) => (
          <ProjectCard
            key={proyecto.id}
            titulo={proyecto.titulo}
            estado={proyecto.estado}
            descripcion={proyecto.descripcion}
            detalle={proyecto.detalle}
            tecnologias={proyecto.tecnologias}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
