function ProjectCard({ titulo, estado, descripcion, tecnologias }) {
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
    </article>
  );
}

export default ProjectCard;
