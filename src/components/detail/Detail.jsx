import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Detail() {
    const { detailId } = useParams()
    const [character, setCharacter] = useState("")
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
    console.log(character);
    return (
        <div>
            <Link to='/'>
                <button>X</button>
            </Link>
            <div>Detail</div>
            <h2>Nombre:{character.name}</h2>
            <h2>Especie:{character.species}</h2>
            <h2>Genero.{character.gender}</h2>
            {/* <h2>Origen:{character.origin?.name}</h2> */}
            <img src={character.image} alt="" />
        </div>
    )
}