import cargando from "./cargando.gif";
import Error from "./Error";

function Resultados(props) {
  return (
    <div className="card">
      {props.searchResults.length === 0 && props.error === false ? (
        <h5>Realiza una busqueda de Gifs</h5>
      ) : null}
      {props.loading ? (
        <div className="loading">
          {" "}
          <img src={cargando} alt="loading" />
        </div>
      ) : null}

      <div className="galeria-contenedora">
        {props.searchResults.map((gif, i) => {
          return (
            <div className="referencia">
              <a href={gif.url} target="blanck">
                <img
                  clasName="imagenesresultado"
                  src={gif.images.downsized.url}
                  key={i}
                  alt="gif animado"
                />
              </a>
            </div>
          );
        })}
      </div>
      {props.error ? <Error /> : ""}
    </div>
  );
}

export default Resultados;
