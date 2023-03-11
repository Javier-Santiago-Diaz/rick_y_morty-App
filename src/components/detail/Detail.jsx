import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import s from "./Detail.module.css";

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
    <div className={s.container}>
      <h1 className={s.d}>Detalle del personaje</h1>

      <Link to="/home" className={s.link}>
        <button className={s.boton}>X</button>
      </Link>

      <div className={s.img2}>
        <img src={character?.image} className={s.img} alt="" />
      </div>

      <div className={s.general}>
        <h2>Nombre:{character?.name}</h2>
        <h2>status: {character?.status}</h2>
        <h2>Especie:{character?.species}</h2>
        <h2>Genero: {character?.gender}</h2>
        <h2>origin: {character?.origin?.name}</h2>
      </div>
    </div>
  );
}
