import './App.css';
import { useEffect, useState } from 'react';
import Games from './Games'
import GameForm from './GameForm'

function App() {
  const [games, setGames] = useState([])

  function newGame(gameName, genre, multiplayer, creatorId){
    const game = {name: gameName, genre: genre, multiplayer: multiplayer, creator_id: creatorId}
    fetch("http://localhost:9292/games", {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(game)
    })
    .then(res => res.json())
    .then(newGame => setGames(games.concat(newGame)))
  }

  function deleteGame(id) {
    fetch(`http://localhost:9292/games/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(deletedGame => setGames(games.filter(game => game.id !== deletedGame.id)))
  }

useEffect(() => {
  fetch("http://localhost:9292/games")
    .then((r) => r.json())
    .then((data) => setGames(data));
}, [])
  

  return (
    <div className="App">
      <h1>Welcome to Game Creators</h1>
      <Games games={games} deleteGame={deleteGame}/>
      <GameForm newGame={newGame}/>
    </div>
  );
}

export default App;
