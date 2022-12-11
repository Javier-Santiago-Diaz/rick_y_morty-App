import s from './Card.module.css';
import React from 'react';
import { addFavorites, deleteFavorites } from '../../redux/actions';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

export function Card(props) {
   const [isFav, setIsfav] = React.useState(false)

   React.useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.state.id) {
            setIsfav(true);
         }
      });
   },
      // eslint-disable-next-line
      [props.myFavorites])

   function handleFavorite() {
      if (isFav === true) {
         setIsfav(false)
         props.delf(props.id)
      } if (isFav === false) {
         setIsfav(true)
         props.addf(props)
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

export function mapStatetoProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}

export function mapDispatchToProps(dispatch) {
   return {
      addF: (fav) => dispatch(addFavorites(fav))
      ,
      delf: (id) => dispatch(deleteFavorites(id))
   }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Card);
