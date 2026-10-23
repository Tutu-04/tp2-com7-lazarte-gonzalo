import { NavLink } from "react-router-dom";

const secciones = [
  { ruta: "/", texto: "Inicio" },
  { ruta: "/about", texto: "Sobre mí" },
  { ruta: "/skills", texto: "Habilidades" },
  { ruta: "/projects", texto: "Proyectos" },
  { ruta: "/contact", texto: "Contacto" },
];

function Sidebar({ nombre, profesion }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-marca">
        <span className="sidebar-nombre">{nombre}</span>
        <span className="sidebar-profesion">{profesion}</span>
      </div>

      <nav aria-label="Secciones">
        <ul className="menu">
          {secciones.map((seccion) => (
            <li key={seccion.ruta}>
              <NavLink to={seccion.ruta} end={seccion.ruta === "/"} className="menu-link">
                {seccion.texto}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <p className="sidebar-lugar">San Miguel de Tucumán, Argentina</p>
    </aside>
  );
}

export default Sidebar;
