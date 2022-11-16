export default function Card(props) {
   const { onClose } = props
   return (
      <div id='card'>
         <button onClick={() => onClose()} id='boton1'>X</button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img src={props.image} alt="" />
      </div>
   );
}
