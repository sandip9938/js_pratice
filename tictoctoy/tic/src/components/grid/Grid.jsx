import { useState } from 'react'
import Card from '../card/card'
 import '../grid/grid.css'
 import IsWinner from '../heper/helper'

function Grid(noofcard ) {
    const [board, setboard]= useState(Array(noofcard).fill(''))
    const [turn,setTurn]= useState(true) //true=o and false=X
    const [winner,setWinner] = useState(null)

    function play(index){
if(turn=== true){
  board[index]= 'o'
}else{
  board[index]='X'

}
const winner = IsWinner(board.turn ? 'o': 'X')
if(winner){
  setWinner(winner)
}
setboard([...board])
setTurn(!turn)
    }

function reset(){
  setTurn(true)
  setWinner(null)
  setboard(Array(noofcard).fill(''))


}



  return (
<div className='gri-wrapper'>



 { 
  winner &&
  (
    <>
  <h1 className='turn'>The Winner is :{winner}  </h1>
  <button className='reset' onClick={reset}>Reset Game</button>
  </>
  )
 }



<h1 className='turn'> Current turn : {(turn) ? 'o' : 'X'}</h1>
    <div className='grid'>
    {board.map((el,idx)=> <Card key={idx} onPlay={play} player={el} index={idx} />)}
      
    </div>
    </div>

    
  )
}

export default Grid
