import Ornamento from "./Ornamento.jsx";

function Header({ titulo, bajada }) {
  return (
    <header className="encabezado">
      <h1>{titulo}</h1>
      <p>{bajada}</p>
      <Ornamento />
    </header>
  );
}

export default Header;
