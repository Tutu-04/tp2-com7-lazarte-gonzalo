import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="inicio">
      <div className="inicio-titulo">
        <p className="inicio-saludo">Hola, soy</p>
        <h1 className="inicio-nombre">
          <span>Gonzalo</span>
          <span>Lazarte</span>
        </h1>
      </div>

      <p className="inicio-texto">
        Estudio la Tecnicatura Universitaria en Programación en la UTN de Tucumán. Trabajo sobre
        todo con C# y .NET, y ahora estoy sumando React para el frontend.
      </p>

      <p className="inicio-texto">
        En este sitio vas a encontrar quién soy, qué tecnologías manejo, los proyectos en los que
        trabajo y cómo contactarme.
      </p>

      <div className="inicio-acciones">
        <Link to="/projects" className="boton">
          Ver proyectos
        </Link>
        <Link to="/contact" className="enlace">
          Contactame
        </Link>
      </div>

      <section className="proyecto-actual">
        <p className="etiqueta">Proyecto actual</p>
        <h2>Fiscalización satelital de quema de caña</h2>
        <p>Mi proyecto final de carrera, en desarrollo.</p>
      </section>
    </section>
  );
}

export default Home;
