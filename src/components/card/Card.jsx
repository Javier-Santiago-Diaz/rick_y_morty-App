import s from "./Card.module.css";
import React from "react";
import { addFavorites, deleteFavorites } from "../../redux/actions";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

export function Card({ id, name, image, species, gender, onClose }) {
  const [isFav, setIsfav] = React.useState(false);

  /* React.useEffect(
    () => {
      myFavorites.forEach((fav) => {
        if (fav.id === state.id) {
          setIsfav(true);
        }
      });
    },
    // eslint-disable-next-line
    [myFavorites]
  );

  function handleFavorite() {
    if (isFav === true) {
      setIsfav(false);
      delf(id);
    }
    if (isFav === false) {
      setIsfav(true);
      addf(props);
    }
  }
 */
  return (
    <div className={s.container}>
      {/*   {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )} */}
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

export function mapStatetoProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addF: (fav) => dispatch(addFavorites(fav)),
    delf: (id) => dispatch(deleteFavorites(id)),
  };
}

export default connect(mapStatetoProps, mapDispatchToProps)(Card);
