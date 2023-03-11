import { useSelector } from "react-redux";
import s from "./favorite.module.css";

export default function Favorites() {
  const { myFavorites } = useSelector((state) => state);

  return (
    <div>
      <span className={s.title}>Favorites</span>
      {myFavorites.map((character) => (
        <div>
          <h3>{character.name}</h3>
          <img src={character.image} alt="" />
        </div>
      ))}
    </div>
  );
}
