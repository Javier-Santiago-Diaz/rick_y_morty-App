import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <img src="../../assets/about/27346.png" alt="" />
      <h1 className={styles.titulo}>Javier Santiago Diaz Arcila</h1>
      <h1 className={styles.cuerpo}>
        App de rick y morthy trata de renderizar y agregar y buscar el personaje
        que tu desees de la serie animada de televicion rick y morthy, adicional
        a esto podras agregar un personaje a el estado favorito y asi tener tus
        personajes en preferencias para que no se pierdan y los llegas a
        eliminar de la Ruta principal, Disfrutala es hecha con amor para Ti.
      </h1>
    </div>
  );
}
