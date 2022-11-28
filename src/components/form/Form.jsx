import React from "react"
import { useState } from "react"
import styles from './Form.module.css'
import validation from "./validation"

export default function Form(props) {
    const [userdata, setUserData] = useState({
        username: "",
        password: ""
    })

    const [error, setError] = useState({
        username: "",
        password: ""
    })

    const handleInputChange = (evento) => {
        const { name, value } = evento.target;
        setUserData({
            ...userdata,
            [name]: value
        })
        setError(
            validation({
                ...userdata,
                [name]: value
            }))
    }

    const handleSubmit = () => {
        props.login(userdata)
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.accede}>Accede a ver los personajes de Rick Y Morthy</h1>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.caja1}>
                    <label htmlFor="correo" className={styles.name}>Correo Electronico:  </label>
                    <input type="text"
                        id="correo"
                        name="username"
                        value={userdata.username}
                        className={styles.input1}
                        onChange={handleInputChange}
                    />
                    <span className={styles.error}>
                        {error.username ? error.username : null}
                    </span>
                </div>

                <div className={styles.caja2}>
                    <label htmlFor="contraseña" className={styles.passw}>Contraseña:  </label>
                    <input type="text"
                        id="contraseña"
                        name="password"
                        value={userdata.password}
                        className={styles.input2}
                        onChange={handleInputChange}
                    />
                    <span className={styles.error}>
                        {error.password ? error.password : null}
                    </span>
                </div>
                <button type="submit" className={styles.boton}>Login</button>
            </form>

        </div>
    )
}