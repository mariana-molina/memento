import { useEffect } from "react"

export default function Header({handlerNewGame, wins}) {
  useEffect(()=>{
    document.title = `${wins} wins`
  },[wins])
  
  return (<>
    <header className="header">
      <h4>{wins} wins</h4>
      <h3>Memory Game</h3>
      <button onClick={handlerNewGame}>New game</button>
    </header>
    </>)
}
