import Card from "../card/Card.jsx";
import s from "./Cards.module.css";

export default function Cards({characters,onClose}) {
  

  return (
    <div className={s.Cards}>
      {characters.map(({ id, name, species, gender, image }) => (
        <Card
          key={id}
          name={name}
          species={species}
          gender={gender}
          image={image}
          detailId={id}
          onClose={() => onClose(id)}
        />
      ))}
    </div>
  );
}
