import s from './Card.module.css'
import { NavLink } from 'react-router-dom'

export default function Card(props) {
   console.log(props);
   return (
      <div className={s.container}>

         <div>
            <button onClick={() => props.onClose(props.id)} className={s.boton}> X </button>
         </div>

         <div className={s.name}>
            <NavLink to={`/detail/${props.id}`} className={s.link}>
               {props.name}
            </NavLink>
         </div>

         <h2 className={s.species}> {props.species} </h2>
         <h2 className={s.gender}>{props.gender} </h2>

         <div >
            <img src={props.image} alt="" className={s.img} />
         </div>
      </div >
   );
}
