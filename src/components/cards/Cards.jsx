import Card from '../card/Card.jsx';
import s from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return (<div id='cajaCards'>{
      characters.map((ele, index) =>
         <Card
            name={ele.name}
            species={ele.species}
            gender={ele.gender}
            image={ele.image}
            key={index}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />)
   }</div>)
      ;
}
