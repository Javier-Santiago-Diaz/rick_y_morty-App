import './App.css'
import Card from './components/card/Card.jsx'
import Cards from './components/cards/Cards.jsx'
import SearchBar from './components/searchBar/SearchBar.jsx'
import characters, { Rick } from './data.js'

function App() {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <Card
        name={Rick.name}
        species={Rick.species}
        gender={Rick.gender}
        image={Rick.image}
        onClose={() => window.alert('Emulamos que se cierra la card')}
      />
      <Cards
        characters={characters}
      />
      <SearchBar
        onSearch={(characterID) => window.alert(characterID)}
      />
    </div>
  )
}

export default App
