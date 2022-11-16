export default function SearchBar(props) {
   const { onSearch } = props
   return (
      <div id='search'>
         <input type='search' />
         <button onClick={() => onSearch('prueba')}>Agregar</button>
      </div>
   );
}
