import s from '../searchBar/SearchBar.mocule.css'

export default function SearchBar(props) {
   const { onSearch } = props
   return (
      <div>
         <input type='search' className={s.input} />
         <button className={s.SearchButton} onClick={() => onSearch('prueba')}>Agregar</button>
      </div>
   );
}
