import Card from '../card/Card.jsx';
import s from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className={s.Cards}>{
         characters.map((character, index) =>
            < Card
               key={index}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               onClose={props.onClose}
               id={character.id}
               detailId={character.id}
            />)
      }</div>)
      ;
}
