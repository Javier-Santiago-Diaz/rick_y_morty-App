import s from './Card.module.css';
import { addFavorites, deleteFavorites } from '../../redux/actions';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

export function Card(props) {
   const [isFav, setIsfav] = useState(false)
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsfav(true);
         }
      });
   }, [props.myFavorites]);

   function handleFavorite() {
      if (isFav) {
         setIsfav(false)
         props.deleteFavorites(props.id)
      } else {
         setIsfav(true)
         props.addFavorites(props.id)
      }
   }

   return (
      <div className={s.container}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <div className={s.name}>
            <NavLink to={`/detail/${props.id}`} className={s.link}>
               {props.name}
            </NavLink>
         </div>
         <div >
            <img src={props.image} alt="" className={s.img} />
         </div>
         <h5 className={s.species}>Species: {props.species} </h5>
         <h5 className={s.gender}>Gender:{props.gender} </h5>
         <div>
            <button onClick={() => props.onClose(props.id)} className={s.boton}> X </button>
         </div>
      </div >
   );
}

export function mapDispatchToProps(dispatch) {
   return {
      addFavorites: (id) => {
         dispatch(addFavorites(id))
      },
      deleteFavorites: (id) => {
         dispatch(deleteFavorites(id))
      }
   }
}

export function mapStatetoProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Card);
