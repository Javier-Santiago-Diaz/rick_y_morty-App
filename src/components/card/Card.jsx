import s from './Card.module.css'

export default function Card(props) {
   const { onClose } = props
   return (
      <div>
         <button onClick={() => onClose()} id='botonX'> X </button>
         <h2 id="textName"> {props.name} </h2>
         <h2 className="textSpecies"> {props.species} </h2>
         <h2 className="textGender"> {props.gender} </h2>
         <img src={props.image} alt="" id="img1" />
      </div>
   );
}
