import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import s from './Detail.module.css'

export default function Detail() {
    const { detailId } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            })
            .catch((err) => {
                window.alert('No hay personajes con ese ID');
            });
        return setCharacter({});
    }, [detailId])


    return (
        <div className={s.container}>

            <NavLink to='/home' className={s.link} >
                <button className={s.boton}>X</button>
            </NavLink>

            <h className={s.d}>DETALLES</h>

            <div className={s.general}>
                <h2 >Nombre:{character.name}</h2>
                <h2 >Especie:{character.species}</h2>
                <h2 >Genero.{character.gender}</h2>
            </div>
            {/* <h5>Origen:{character.origin?.name}</h5> */}
            <div className={s.img2}>
                <img src={character.image} className={s.img} alt='' />
            </div>
        </div>
    )
}