import './App.css';
import { useEffect, useState } from 'react';
import Games from './Games'
import GameForm from './GameForm'

function App() {
  const [games, setGames] = useState([])

useEffect(() => {
  fetch("http://localhost:9292/games")
    .then((r) => r.json())
    .then((data) => setGames(data));
}, [])
  

  return (
    <div className="App">
      <h1>Welcome to Game Creators</h1>
      <Games games={games}/>
      <GameForm/>
    </div>
  );
}

export default App;
