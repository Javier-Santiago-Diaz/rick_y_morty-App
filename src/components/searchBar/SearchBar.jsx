import s from './SearchBar.mocule.css'

export default function SearchBar(props) {
   const { onSearch } = props
   return (
      <div>
         <input type='search' id="input" />
         <button id="TextBtSearch" onClick={() => onSearch('prueba')}>Agregar</button>
      </div>
   );
}
