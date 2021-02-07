import React, { useEffect, useState } from 'react';
import Character from './components/Character'
import axios from 'axios'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characterInfo, setCharacterInfo] = useState([])

const getCharacters = () => {
  axios.get('https://swapi.dev/api/people')
  .then(response => {setCharacterInfo(response.data)})
}

useEffect(getCharacters, [])

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
        {
        characterInfo.map((character, index) => {
          return <Character character={character} key={index}></Character>
        })
      }
    </div>
  );
}

export default App;
