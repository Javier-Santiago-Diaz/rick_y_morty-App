import s from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [character, setCharacter] = useState("");

  const handleChange = (event) => {
    setCharacter(event.target.value);
  };
  return (
    <div className={s.container}>
      <input
        type="search"
        value={character}
        onChange={handleChange}
        placeholder="Digita numeros del 1 al 826"
        className={s.input}
      />
      <button onClick={() => onSearch(character)} className={s.boton}>
        Agregar
      </button>
    </div>
  );
}
