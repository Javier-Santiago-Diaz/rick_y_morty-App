import styles from "./About.module.css";
import prueba from "../img/1.jpg";

export default function About() {
  return (
    <div className="border border-danger bg-black h-100">
      <br />
      <h2 className={styles.titulo}>Javier Santiago Diaz Arcila</h2>
      <br />
      <h4 className="text-white">
        App de rick y morthy trata de renderizar y agregar y buscar el personaje
        que tu desees de la serie animada de televicion rick y morthy, adicional
        a esto podras agregar un personaje a el estado favorito y asi tener tus
        personajes en preferencias para que no se pierdan y los llegas a
        eliminar de la Ruta principal, Disfrutala es hecha con esfuerzo para Ti.
      </h4>
      <div className="d-flex justify-content-center">
        <img src={prueba} alt="" className="img-fluid rounded" />
      </div>
      <br />
      <br />
    </div>
  );
}
