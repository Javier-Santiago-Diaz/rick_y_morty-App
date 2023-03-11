import s from "./Card.module.css";
import { useEffect, useState } from "react";
import { addFavorites, deleteFavorites } from "../../redux/actions";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Card({ id, name, image, species, gender, onClose }) {
  const [isFav, setIsFav] = useState(false);

  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorites(id));
    } else {
      setIsFav(true);
      dispatch(addFavorites({ id, name, image, species, gender, onClose }));
    }
  };

  return (
    <div className={s.container}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <div className={s.name}>
        <NavLink to={`/detail/${id}`} className={s.link}>
          {name}
        </NavLink>
      </div>

      <div>
        <img src={image} alt="" className={s.img} />
      </div>

      <h5 className={s.species}>Species: {species} </h5>
      <h5 className={s.gender}>Gender:{gender} </h5>

      <div>
        <button onClick={onClose} className={s.boton}>
          X
        </button>
      </div>
    </div>
  );
}
