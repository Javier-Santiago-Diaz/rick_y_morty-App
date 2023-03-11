import React from "react";
import s from "../nav/Nav.module.css";
import SearchBar from "../searchBar/SearchBar.jsx";
import { Link } from "react-router-dom";

export default function Nav({ onSearch }) {
  return (
    <div className={s.container}>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <SearchBar onSearch={onSearch} />
      <Link to="/favorites">
        <button>Favorites</button>
      </Link>
    </div>
  );
}
