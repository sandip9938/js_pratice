import Icon from "../icon/icon"



function card({player,onPlay,index}) {
    let icon = <Icon/>
    if(player === 'X'){
      icon = <Icon name = 'cross'/>  
 }
 else if(player === '0'){
    icon = <Icon name='circle'/>
 }
  return (
    <div className='card' onClick={()=>onPlay(index)}>
      {icon}
    </div>
  )
}

export default card
