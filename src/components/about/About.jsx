import styles from './About.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <img src="../../assets/about/27346.png" alt="" />
            <h1 className={styles.titulo}>Aprendiz de programacion</h1>
            <div className={styles.cuerpo}>React</div>

        </div>
    )
}