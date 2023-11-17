import React, {useState} from 'react'
import '../styles/Popup.scss'
import { AiOutlineClose } from "react-icons/ai";
const Popup = () => {
    const [remove, setRemove] = useState('none');
    const Remove =()=>{
setRemove('none')
    }
  return (
    < >
    

    <div className="popup" style={{display: {remove}}}>

        <div className="closeIcon" >
        < AiOutlineClose onClick={Remove}/>
     
        </div>
        <div className="cookie">
            i will not collect any data from you thanks for visiting my portfolio 
        </div>
    </div>
  
    
    </>
  )
}

export default Popup