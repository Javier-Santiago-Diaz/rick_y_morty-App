import React from "react";
import { useState } from "react";
import styles from "./Form.module.css";
import validation from "./validation";

export default function Form(props) {
  const [userdata, setUserData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (evento) => {
    const { name, value } = evento.target;
    setUserData({
      ...userdata,
      [name]: value,
    });
    setError(
      validation({
        ...userdata,
        [name]: value,
      })
    );
  };

  const handleSubmit = () => {
    props.login(userdata);
  };

  return (
    <div className="container-fluid  vh-100 ">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      ></link>
      <h2 className="container  text-white">
        Accede a ver los personajes de Rick Y Morthy
      </h2>
      <br />
      <br />
      <br />
      <br />

      <form onSubmit={handleSubmit} className="container-fluid">
        <div className="row">
          <div className="col   d-flex justify-content-center ">
            <input
              type="text"
              id="correo"
              name="username"
              value={userdata.username}
              onChange={handleInputChange}
              placeholder="Correo Electronico"
            />
          </div>
          <span className={styles.error}>
            {error.username ? error.username : null}
          </span>
        </div>

        <br />
        <br />

        <div className="row">
          <div className="col  d-flex justify-content-center">
            <input
              type="text"
              id="contraseña"
              name="password"
              value={userdata.password}
              onChange={handleInputChange}
              placeholder="Contraseña"
            />
          </div>
          <span className={styles.error}>
            {error.password ? error.password : null}
          </span>
        </div>
        <br />
        <br />

        <div className="row">
          <div className="col">
            <button type="submit" className={styles.boton}>
              Login
            </button>
          </div>
        </div>
      </form>
      <br />
      <h4 className="container text-danger d-flex justify-content-center">
        Contraseña y correo de prueba
      </h4>
      <h5 className="container-fluid text-white d-flex justify-content-center  text-center ">
        correo: prueba@gmail.com / contraseña: 123prueba
      </h5>
      <br />
      <br />
    </div>
  );
}
