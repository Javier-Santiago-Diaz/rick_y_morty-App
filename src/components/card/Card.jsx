import s from './Card.module.css'

export default function Card(props) {
   return (
      <div className={s.Card}>
         <div className={s.buttonContainerCard}>
            <button onClick={() => props.onClose(props.id)} className={s.BotonCard}> X </button>
         </div>

         <h2 className={s.Cardtextname}> {props.name} </h2>
         <h2 className={s.Cardtexspecies}> {props.species} </h2>
         <h2 className={s.Cardgender}> {props.gender} </h2>
         <img src={props.image} alt="" className={s.imgCard} />
      </div >
   );
}
