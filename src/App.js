import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res => setCharacters(res.data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1>Rick and Morty Characters</h1>
      <div className="card-grid d-flex flex-wrap justify-content-between">
        {characters.map(character => (
          <div
            key={character.id}
            className="card"
            onClick={() => setSelectedCharacter(character)}
          >
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </div>
        ))}
      </div>

      {selectedCharacter && (
        <div className="character-details">
          <h2>{selectedCharacter.name}</h2>
          <img src={selectedCharacter.image} alt={selectedCharacter.name} />
          <p><strong>Status:</strong> {selectedCharacter.status}</p>
          <p><strong>Species:</strong> {selectedCharacter.species}</p>
          <p><strong>Gender:</strong> {selectedCharacter.gender}</p>
          <p><strong>Origin:</strong> {selectedCharacter.origin.name}</p>
          <p><strong>Location:</strong> {selectedCharacter.location.name}</p>
        </div>
      )}
    </div>
  );
}

export default App;
