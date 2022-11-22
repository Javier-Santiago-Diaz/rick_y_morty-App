import s from '../searchBar/SearchBar.mocule.css'
import { useState } from 'react'

export default function SearchBar(props) {
   const [id, setId] = useState("")

   const handleChange = (e) => {
      const { value } = e.target;
      setId(value)
   }

   return (
      <div>
         <input type='search' className={s.input} onChange={handleChange} />
         <button onClick={() => props.onSearch(id)} className={s.SearchButton} >Agregar</button>
      </div>
   );
}
