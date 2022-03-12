import ilustra_header from "/src/components/ilustra_header.svg";

function Header({ isDark, setDark }) {
  const handleDarkMode = () => {
    setDark(!isDark);
  };

  return (
    <div className="header">
      <button className="btn-theme" onClick={handleDarkMode}>
        {`Modo ${isDark ? "light" : "dark"}`}
      </button>
      <h2>¡Inspirate y busca los mejores GIFS!</h2>
      <img src={ilustra_header} alt="imagen-header"></img>
    </div>
  );
}
export default Header;
