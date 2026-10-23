import { useState } from "react";

function ProjectCard({ titulo, estado, descripcion, detalle, tecnologias }) {
  const [verDetalle, setVerDetalle] = useState(false);

  return (
    <article className="proyecto">
      {estado && <span className="proyecto-estado">{estado}</span>}
      <h2>{titulo}</h2>
      <p>{descripcion}</p>

      <ul className="proyecto-tecnologias">
        {tecnologias.map((tecnologia) => (
          <li key={tecnologia}>{tecnologia}</li>
        ))}
      </ul>

      {verDetalle && <p className="proyecto-detalle">{detalle}</p>}

      <button type="button" className="boton-texto" onClick={() => setVerDetalle(!verDetalle)}>
        {verDetalle ? "Ocultar detalle" : "Ver detalle"}
      </button>
    </article>
  );
}

export default ProjectCard;
