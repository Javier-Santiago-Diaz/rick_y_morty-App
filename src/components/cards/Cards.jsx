import Card from "../card/Card.jsx";
import s from "./Cards.module.css";
import p from "../../data.js";

export default function Cards({ characters, onClose }) {
  return (
    <div>
      <div className={s.Cards}>
        {characters.map(({ id, name, species, gender, image }) => (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            detailId={id}
            onClose={() => onClose(id)}
          />
        ))}
      </div>
      <br />
      <br />
      <br />

      <div className="border  rounded bg-muted">
        <h3 className="text-success bg-black rounded">
          <p class="font-weight-bold">Personajes de Muestra</p>
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {p.map((e) => {
            return (
              <div className={s.container}>
                <div>
                  <img src={e.image} alt="" className={s.img} />
                </div>

                <div className={s.name}>{e.name}</div>

                <h5 className={s.species}>
                  <p style={{ position: "relative", top: "7px", left: "12px" }}>
                    Species: {e.species}{" "}
                  </p>
                </h5>
                <h5 className={s.gender}>
                  <p
                    style={{ position: "relative", top: "7.9px", left: "23px" }}
                  >
                    Gender:{e.gender}
                  </p>
                </h5>
              </div>
            );
          })}
        </div>
        <br />
      </div>
    </div>
  );
}
