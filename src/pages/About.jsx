import { useState } from "react";
import Header from "../components/Header.jsx";
import { formacion } from "../data/formacion.js";

function About() {
  const [mostrarExperiencia, setMostrarExperiencia] = useState(false);

  return (
    <section>
      <Header titulo="Sobre mí" bajada="Quién soy, qué me interesa y qué estudié." />

      <div className="bloque">
        <h2>Quién soy</h2>
        <p>
          Soy de San Miguel de Tucumán y estoy en el último cuatrimestre de la Tecnicatura
          Universitaria en Programación de la UTN.
        </p>

        {mostrarExperiencia && (
          <p className="bloque-extra">
            Desde 2022 trabajo de forma independiente haciendo mantenimiento, reparación y armado
            de computadoras y consolas. También doy clases particulares de programación y
            matemática.
          </p>
        )}

        <button
          type="button"
          className="boton-texto"
          onClick={() => setMostrarExperiencia(!mostrarExperiencia)}
        >
          {mostrarExperiencia ? "Ocultar mi experiencia" : "Ver mi experiencia"}
        </button>
      </div>

      <div className="bloque">
        <h2>Perfil</h2>
        <p>
          Trabajo sobre todo en backend con C# y .NET: APIs con ASP.NET Core y bases de datos con
          Entity Framework Core y SQL. Ahora estoy sumando el frontend con React.
        </p>
      </div>

      <div className="bloque">
        <h2>Intereses</h2>
        <p>
          Me interesa hacer software que resuelva problemas concretos, como los de mis proyectos:
          la fiscalización de quemas de caña y los reportes de la vía pública. También me interesa
          el hardware, que es parte de mi trabajo de todos los días.
        </p>
      </div>

      <div className="bloque">
        <h2>Objetivos</h2>
        <p>
          Recibirme, conseguir mi primera experiencia como desarrollador y seguir creciendo tanto
          en backend como en frontend.
        </p>
      </div>

      <div className="bloque">
        <h2>Formación</h2>
        <ul className="formacion">
          {formacion.map((estudio) => (
            <li key={estudio.id}>
              <span className="formacion-periodo">{estudio.periodo}</span>
              <h3>{estudio.titulo}</h3>
              <p>{estudio.lugar}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
