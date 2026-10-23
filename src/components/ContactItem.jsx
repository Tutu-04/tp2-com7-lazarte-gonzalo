function ContactItem({ etiqueta, texto, enlace, externo }) {
  return (
    <li className="contacto">
      <span className="contacto-etiqueta">{etiqueta}</span>

      {enlace ? (
        <a
          href={enlace}
          target={externo ? "_blank" : undefined}
          rel={externo ? "noreferrer" : undefined}
        >
          {texto}
        </a>
      ) : (
        <span className="contacto-texto">{texto}</span>
      )}
    </li>
  );
}

export default ContactItem;
