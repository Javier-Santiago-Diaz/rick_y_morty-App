import Card from '../card/Card.jsx';
import s from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   console.log(characters);
   return (
      <div className={s.Cards}>{
         characters.map((character) =>

            < Card
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               key={character.name}
               onClose={props.onClose}
               id={character.id}
               detailId={character.id}
            />)
      }</div>)
      ;
}
