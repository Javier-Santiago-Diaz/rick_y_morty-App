import { useSelector } from "react-redux";

export default function Favorites() {
  const myFavorites = useSelector((state) => state.myFavorites);
  return (
    <div>
      {myFavorites.map((character) => (
        <div>
          <h2>Nombre:{character?.name}</h2>
          <h2>Especie:{character?.species}</h2>
          <h2>Genero: {character?.gender}</h2>
          <img src={character.image} alt="" />
        </div>
      ))}
    </div>
  );
}
