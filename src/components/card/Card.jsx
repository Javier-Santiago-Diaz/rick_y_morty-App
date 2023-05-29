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
      <div>
        <img src={image} alt="" className={s.img} />
      </div>

      <NavLink to={`/detail/${id}`}>
        <div className={s.name}>{name}</div>
      </NavLink>

      {isFav ? (
        <button onClick={handleFavorite} className={s.corazon}>
          ❤️
        </button>
      ) : (
        <button onClick={handleFavorite} className={s.corazon}>
          🤍
        </button>
      )}
      <button onClick={onClose} className={s.boton}>
        X
      </button>

      <h5 className={s.species}>
        <p style={{ position: "relative", top: "7px", left: "12px" }}>
          Species: {species}{" "}
        </p>
      </h5>
      <h5 className={s.gender}>
        <p style={{ position: "relative", top: "7px", left: "23px" }}>
          Gender:{gender}
        </p>
      </h5>
    </div>
  );
}
