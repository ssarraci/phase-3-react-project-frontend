import React, {useState} from "react";

function GameForm({newGame}) {
   const [gameName, setGameName] = useState("")
   const [genre, setGenre] = useState("")
   const [multiplayer, setMultiplayer] = useState("")
   const [creatorId, setCreatorId] = useState("")

   function handleSubmit(e, gameName, genre, multiplayer, creatorId) {
      e.preventDefault()
      console.log(gameName)
      newGame(gameName, genre, multiplayer, creatorId)
    }

   return (
      <div>
         <h3>New Game Form</h3>
            <form onSubmit={(e) => handleSubmit(e, gameName, genre, multiplayer, creatorId)}>
               <label>Game Name: </label>
               <input type="text" name="gameName" value={gameName} onChange={e => setGameName(e.target.value)}/>
               <br/>
               <label>Genre: </label>
               <input type="text" name="genre" value={genre} onChange={e => setGenre(e.target.value)}/>
               <br/>
               <label>Multiplayer: </label>
               <input type="text" name="multiplayer" value={multiplayer} onChange={e => setMultiplayer(e.target.value)}/>
               <br/>
               <label>Creator ID: </label>
               <input type="text" name="creatorId" value={creatorId} onChange={e => setCreatorId(e.target.value)}/>
               <br/>
               <button type="submit">Add Game</button>
            </form>
      </div>
   )
}
export default GameForm