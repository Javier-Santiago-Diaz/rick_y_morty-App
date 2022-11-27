import React from "react"
import styles from './Form.module.css'

export default function Form() {

    return (
        <div className={styles.container}>
            <form action="">
                <label className={styles.name}>username</label>
                <input type="text" name="username" className={styles.input} />

                <label className={styles.contra}>password</label>
                <input type="text" name="password" className={styles.input} />

                <button className={styles.boton}>Login/Acceso</button>
            </form>
        </div>
    )
}