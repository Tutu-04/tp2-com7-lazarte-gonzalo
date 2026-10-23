function SkillCard({ nombre, uso }) {
  return (
    <article className="habilidad">
      <h3>{nombre}</h3>
      <p>{uso}</p>
    </article>
  );
}

export default SkillCard;
