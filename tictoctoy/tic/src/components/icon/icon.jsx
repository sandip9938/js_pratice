import { FaPen, FaRegCircle, FaTimes } from 'react-icons/fa'

function icon(symbol) {
    if(symbol == 'circle'){
  return   <FaRegCircle/>
  }
  else if(symbol == 'cross'){
    return <FaTimes />
  }else{
    return <FaPen/>
  }
}

export default icon
