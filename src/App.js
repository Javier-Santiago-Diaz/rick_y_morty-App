import "./App.css";
import Nav from "../src/components/nav/Nav.jsx";
import Cards from "./components/cards/Cards.jsx";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/about/About.jsx";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/favorites";
import { useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  const location = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "santiagodiaz0201@gmail.com";
  const password = "contraseña";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(
    () => {
      !access && navigate("/");
      // eslint-disable-next-line
    },
    // eslint-disable-next-line
    [access]
    // eslint-disable-next-line
  );

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} className="prueba" />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route
          path="/favorites"
          element={<Favorites character={characters} />}
        />
      </Routes>
    </div>
  );
}

export default App;
