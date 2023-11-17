import React, {useState} from 'react'
import '../styles/Popup.scss'
import { AiOutlineClose } from "react-icons/ai";
const Popup = () => {
    const [remove, setRemove] = useState('block');
    const Remove =()=>{
setRemove('none')
    }
  return (
    < >
    <div style={{display: {remove}}}>

    <div className="popup">

        <div className="closeIcon" onClick={Remove}>
        < AiOutlineClose />
     
        </div>
        <div className="cookie">
            i will not collect any data from you thanks for visiting my portfolio 
        </div>
    </div>
    </div>
    
    </>
  )
}

export default Popup