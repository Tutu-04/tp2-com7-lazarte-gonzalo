import Header from "../components/Header.jsx";
import ContactItem from "../components/ContactItem.jsx";
import { contactos } from "../data/contactos.js";

function Contact() {
  return (
    <section>
      <Header titulo="Contacto" bajada="Si querés consultarme algo o proponerme un proyecto, escribime." />

      <ul className="lista-contactos">
        {contactos.map((contacto) => (
          <ContactItem
            key={contacto.id}
            etiqueta={contacto.etiqueta}
            texto={contacto.texto}
            enlace={contacto.enlace}
            externo={contacto.externo}
          />
        ))}
      </ul>
    </section>
  );
}

export default Contact;
