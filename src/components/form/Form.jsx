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
            <form onSubmit={handleSubmit}>
                <div>
                    <label className={styles.name}>username</label>
                    <input type="text"
                        name="username"
                        value={userdata.username}
                        className={styles.input}
                        onChange={handleInputChange}
                    />
                    <p className={styles.error}>
                        {error.username ? error.username : null}
                    </p>
                </div>

                <div>
                    <label className={styles.contra}>password</label>
                    <input type="text"
                        name="password"
                        value={userdata.password}
                        className={styles.input}
                        onChange={handleInputChange}
                    />
                    <p className={styles.error}>
                        {error.password ? error.password : null}
                    </p>
                </div>
                <button type="submit" className={styles.boton}>Login/Acceso</button>
            </form>
        </div>
    )
}