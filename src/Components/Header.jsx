import React from 'react'
import "../styles/Header.scss"
import {AiFillGithub} from 'react-icons/ai'
const Header = () => {
  return (
    <>
    <div className="header">

      <div className="user">Ravi</div>
      <div className="github">
       <a href="">
       <AiFillGithub/>
       </a>
      </div>
    </div>
    
    
    </>
  )
}

export default Header