import React from 'react'
import react_img from '../assets/react.png'
import js_img from '../assets/jss.png'
import mysql_img from '../assets/mysql.png'
import scss_img from '../assets/scss.png'
import html_img from '../assets/html.png'
import github_img from '../assets/github.png'
import cpp_img from '../assets/cpp.png'
import jquery_img from '../assets/jquery.png'
import tailwind_img from '../assets/tailwind.png'
import netlify_img from '../assets/netlify.png'

import '../styles/Skills.scss'

const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="skillsD1">
          <div className="box">
            <img src={react_img} alt="" />
          </div>
          <div className="box">
            <img src={js_img} alt="" />
          </div>
          <div className="box">
          <img src={cpp_img} alt="" />
          </div>
          <div className="box">
          <img src={mysql_img} alt="" />
          </div>
          <div className="box">
          <img src={html_img } alt="" />
          </div>
        </div>

        <div className="skillsD2">
          <div className="box">
            <img src={scss_img } alt="" />
          </div>
          <div className="box">
          <img src={github_img } alt="" />

          </div>
          <div className="box">
            <img src={jquery_img} alt="" />
          </div>
          <div className="box">
          <img src={tailwind_img} alt="" />

          </div>
          <div className="box">
          <img src={netlify_img} alt="" />

          </div>
        </div>



      </div>

    </>
  )
}

export default Skills