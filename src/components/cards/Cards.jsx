import Card from "../card/Card.jsx";
import s from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={s.Cards}>
      {characters.map((character, index) => (
        <Card
          key={index}
          id={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          detailId={character.id}
          onClose={props.onClose}
        />
      ))}
    </div>
  );
}
