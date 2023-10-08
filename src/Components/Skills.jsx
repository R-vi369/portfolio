import React from 'react'
import react_img from '../assets/react.jpg'
import js_img from '../assets/jss.png'
import mysql_img from '../assets/mysql.png'
import css_img from '../assets/css.png'
import html_img from '../assets/html.png'
import github_img from '../assets/github.png'
import cpp_img from '../assets/cpp.png'

import '../styles/Skills.scss'

const Skills = () => {
  return (
    <>
      <div className="skills">

        <div className="react  img_size ">
          <img src={react_img} alt="" />
        </div>
        <div className="js  img_size ">
          <img src={js_img} alt="" />
        </div>

        <div className="mysql  img_size ">
          <img src={mysql_img} alt="" />
        </div>

          
        <div className="css  img_size ">
          <img src={css_img} alt="" />
        </div>

        <div className="html  img_size ">
          <img src={html_img} alt="" />
        </div>

        <div className="github  img_size ">
          <img src={github_img} alt="" />
        </div>

        <div className="cpp img_size">
           <img src={cpp_img} alt="" />
        </div>

      </div>

    </>
  )
}

export default Skills