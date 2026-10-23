function Header({ titulo, bajada }) {
  return (
    <header className="encabezado">
      <h1>{titulo}</h1>
      <p>{bajada}</p>
    </header>
  );
}

export default Header;
