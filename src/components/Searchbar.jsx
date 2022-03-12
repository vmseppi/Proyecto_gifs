import { useState, useEffect } from "react";
import lupa from "/src/components/lupa.png";

function Searchbar(props) {
  const [inputValue, setInputValue] = useState("");
  const [autoComplete, setAutoComplete] = useState([]);

  const sendRequest = (e) => {
    e.preventDefault();
  };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleAutocompleteItem = (inputValue) => {
    setInputValue(inputValue.name);
    setAutoComplete([]);
  };

  const handleSearchButton = (e) => {
    props.setLoading(true);

    const giphosResults = fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=m9oyF46JM6uRYbuLGgmY3zjpSu8k0qm1&q=${inputValue}&limit=15&offset=0&rating=g&lang=en`
    );
    giphosResults
      .then((response) => {
        props.setLoading(false);
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);
        let isError = responseJson.data.length === 0;
        props.setError(isError);
        props.setSearchResults(responseJson.data);
      });

    setInputValue("");
  };

  useEffect(() => {
    const resultAutocomplete = fetch(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=SmMxIDF7Y4PvbJVxP1M5eobyr0v24ddM&q=${inputValue}&limit=5`
    );
    resultAutocomplete
      .then((response) => response.json())
      .then((responseJson) => setAutoComplete(responseJson.data));
  }, [inputValue]);

  return (
    <div>
      <form onSubmit={sendRequest} className="search-users">
        <div className="barradebusqueda">
          <input
            className="espaciobusqueda"
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={handleInputValue}
          />
        </div>
        <button className="search-button" onClick={handleSearchButton}>
          <img className="lupa" src={lupa} alt="logo de busqueda" />
        </button>
      </form>
      <div className="containerList">
        {autoComplete.map((inputValue, i) => {
          return (
            <p
              onClick={() => handleAutocompleteItem(inputValue)}
              className="autocomplete-item"
              key={i}
            >
              {inputValue.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}
export default Searchbar;
