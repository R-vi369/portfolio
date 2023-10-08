import React from 'react'
import '../styles/Header.scss'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import {VscTools} from 'react-icons/vsc'
const Header = () => {
  return (
    <>

      <div className="header">
        <Link to='/Home' className='link'>
          <AiOutlineHome />
        </Link>
        <Link to='/Home' className='link'>
          <AiOutlineHome />
        </Link>
        <Link to='/skills'  className='link'>
          <VscTools />
        </Link>
        <Link to='/Home' className='link'>
          <AiOutlineHome />
        </Link>
        <Link to='/Home' className='link'>
          <AiOutlineHome />
        </Link>
        <Link to='/Home' className='link'>
          <AiOutlineHome />
        </Link>
      </div>
  
    </>
  )
}

export default Header