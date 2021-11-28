import React from "react";
function Game({game, deleteGame}) {
   console.log(game)
   return (
      <div>
         <h2>game name: {game.name}</h2>
         <h4>genre: {game.genre}</h4>
         <h4>multiplayer: {game.multiplayer}</h4>
         <button onClick={() => deleteGame(game.id)}>Delete Game</button>
      </div>
   )
}

export default Game