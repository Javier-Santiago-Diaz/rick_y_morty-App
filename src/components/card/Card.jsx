import s from "./Card.module.css";
import { addFavorites, deleteFavorites } from "../../redux/actions";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Card({ id, name, image, species, gender, onClose }) {
  const [isFav, setIsfav] = useState(false);

  const dispatch = useDispatch();

  const myFavorites = useSelector((state) => state.myFavorites);

  const handleFavorite = () => {
    if (isFav === true) {
      setIsfav(false);
      dispatch(deleteFavorites(id));
    } else {
      setIsfav(true);
      dispatch(addFavorites({ id, name, image, species, gender, onClose }));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsfav(true);
      }
    });
  }, [myFavorites,id]);

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
