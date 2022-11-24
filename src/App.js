import './App.css'
import Nav from '../src/components/nav/Nav.jsx'
import Cards from './components/cards/Cards.jsx'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/about/About.jsx'
import Detail from './components/detail/Detail'

function App() {
  // const example = {
  //   name: 'Morty Smith',
  //   species: 'Human',
  //   gender: 'Male',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  // };
  const [characters, setCharacters] = useState([])
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(ele => ele.id !== id))
  }


  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} className='prueba' />
        <Route path='/detail/:detailId' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
