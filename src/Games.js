import React from 'react'
import Game from './Game'

function Games({games, deleteGame}) {
   console.log(games)
   const allGames = games.map((g) => <Game game={g} key={g.id} deleteGame={deleteGame}/>)
   return (
      <div>
         <h1> All Games</h1>
            {allGames}
      </div>
   )
}

export default Games