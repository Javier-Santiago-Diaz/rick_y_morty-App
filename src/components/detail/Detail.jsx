import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div>
      <br />

      <h1 className="text-danger">Detalle del personaje</h1>
      <br />
      <br />

      <div className="container-fluid  ">
        <div className="row   d-flex align-items-center justify-content-center">
          <div className="col-sm-6 ">
            <img src={character?.image} alt="" className="rounded" />
          </div>

          <div className="col-sm-6 text-white">
            <div>
              <h2>Nombre:{character?.name}</h2>
              <h2>status: {character?.status}</h2>
              <h2>Especie:{character?.species}</h2>
              <h2>Genero: {character?.gender}</h2>
              <h2>origin: {character?.origin?.name}</h2>

              <button className="rounded">
                <Link to="/home">Volver</Link>
              </button>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
