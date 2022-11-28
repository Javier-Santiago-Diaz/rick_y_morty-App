import s from './Card.module.css'
import { NavLink } from 'react-router-dom'

export default function Card(props) {
   console.log(props);
   return (
      <div className={s.container}>

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
