import s from './SearchBar.module.css'
import { useState } from 'react'

export default function SearchBar(props) {
   const [id, setId] = useState("")
   const handleChange = (e) => {
      const { value } = e.target;
      setId(value)
   }
   return (
      <div className={s.container}>
         <input type='search' className={s.input} onChange={handleChange} placeholder='Digita numeros' />
         <button onClick={() => props.onSearch(id)} className={s.boton} >Agregar</button>
      </div>
   );
}
