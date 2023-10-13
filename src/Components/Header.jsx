import React from 'react'
import '../styles/Header.scss'
import { Link } from 'react-router-dom'
import { AiOutlineHome, AiOutlineBulb } from 'react-icons/ai'
import { VscTools } from 'react-icons/vsc'
import { RiContactsLine } from 'react-icons/ri'
import { LuContact2 } from 'react-icons/lu'

const Header = () => {
  return (
    <>


      <div className="header" >

        <Link to='/Home' className='link active' >

          <AiOutlineHome />
        </Link>
        <Link to='/about' className='link'>
          <RiContactsLine />
        </Link>
        <Link to='/skills' className='link'>
          <VscTools />
        </Link>
        <Link to='/Projects' className='link'>
          <AiOutlineBulb />
        </Link>
        <Link to='/Home' className='link'>
          <AiOutlineHome />
        </Link>
        <Link to='/contact' className='link'>
          <LuContact2 />
        </Link>
      </div>

    </>
  )
}

export default Header



