import { useState } from 'react'
import Card from '../card/card'
 import '../grid/grid.css'

function Grid({ noofcard }) {
    const [board, setboard]= useState(Array(noofcard).fill(''))
  return (
    <div className='grid'>
    {board.map((el,idx)=> <Card key={idx}/>)}
      
    </div>
  )
}

export default Grid
