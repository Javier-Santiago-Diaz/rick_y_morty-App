import s from '../searchBar/SearchBar.mocule.css'
import { useState } from 'react'

export default function SearchBar(props) {
   const [id, setId] = useState("")

   const onchange = (e) => {
      const { value } = e.target;
      setId(value)
   }

   return (
      <div>
         <input type='search' className={s.input} onchange={onchange} id="" />
         <button className={s.SearchButton} onClick={() => props.onSearch(id)}>Agregar</button>
      </div>
   );
}
