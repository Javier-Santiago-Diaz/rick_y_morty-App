import s from './Card.module.css'

export default function Card(props) {
   const { onClose } = props
   return (
      <div className={s.Card}>
         <button onClick={() => onClose()} id='botonX' className={s.BotonCard}> X </button>
         <h2 className={s.Cardtextname}> {props.name} </h2>
         <h2 className={s.Cardtexspecies}> {props.species} </h2>
         <h2 className={s.Cardgender}> {props.gender} </h2>
         <img src={props.image} alt="" id="img1" className={s.imgCard} />
      </div>
   );
}
