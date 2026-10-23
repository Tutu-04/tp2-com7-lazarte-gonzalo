import Header from "../components/Header.jsx";
import SkillCard from "../components/SkillCard.jsx";
import { categorias, habilidades } from "../data/habilidades.js";

function Skills() {
  return (
    <section>
      <Header titulo="Habilidades" bajada="Las tecnologías y herramientas con las que trabajo." />

      {categorias.map((categoria) => (
        <div key={categoria} className="bloque">
          <h2>{categoria}</h2>

          <div className="grilla-habilidades">
            {habilidades
              .filter((habilidad) => habilidad.categoria === categoria)
              .map((habilidad) => (
                <SkillCard key={habilidad.id} nombre={habilidad.nombre} uso={habilidad.uso} />
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
