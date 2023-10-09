import React from 'react'
import '../styles/Card.scss'
const Card = ({img, name, text, link}) => {
  return (
    <>
      
      <div className="card">
       <div className="card_box">
          <p><img src={img} alt="" /></p>
          <p>{name}</p>
          <p>{text}</p>
          <p>
             {link}

          </p>
       </div>
      </div>
    
    </>
  )
}

export default Card