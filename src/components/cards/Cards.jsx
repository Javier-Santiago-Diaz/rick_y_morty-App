import Card from '../card/Card.jsx';
import s from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className={s.Cards}>{
         characters.map((character, i) =>
            < Card
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               key={i}
               onClose={props.onClose}

               detailId={character.id}
            />)
      }</div>)
      ;
}
