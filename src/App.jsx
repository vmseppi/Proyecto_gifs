import { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Resultados from "./components/Resultados";



export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isDark, setDark] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleDarkMode = () => {
    setDark(!isDark);
  };
  return (
    <div className={`App ${isDark ? "dark" : "light"}`}>
      <Header
        isDark={isDark}
        handleDarkMode={handleDarkMode}
        setDark={setDark}
      />
      <Searchbar
        setSearchResults={setSearchResults}
        setLoading={setLoading}
        setError={setError}
        error={error}
      />
      <Resultados
        searchResults={searchResults}
        loading={loading}
        error={error}
      />
    </div>
  );
}
