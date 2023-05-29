import React from "react";
import s from "../nav/Nav.module.css";
import SearchBar from "../searchBar/SearchBar.jsx";
import { Link } from "react-router-dom";

export default function Nav({ onSearch }) {
  return (
    <div className={s.container}>
      <button
        style={{
          margin: "15px",
          borderRadius: "0.5rem",
          fontSize: "1.1rem",
          cursor: "pointer",
        }}
      >
        <Link to="/home"> Home</Link>
      </button>

      <button
        style={{
          margin: "15px",
          borderRadius: "0.5rem",
          fontSize: "1.1rem",
          cursor: "pointer",
        }}
      >
        <Link to="/favorites"> Favorites </Link>
      </button>

      <button
        style={{
          margin: "15px",
          borderRadius: "0.5rem",
          fontSize: "1.1rem",
          cursor: "pointer",
        }}
      >
        <Link to="/about"> About</Link>
      </button>

      <SearchBar onSearch={onSearch} />
    </div>
  );
}
