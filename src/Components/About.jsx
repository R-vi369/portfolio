import React from 'react'
import '../styles/About.scss'
import dp from '../assets/dp.jpg';

const About = () => {


  return (
    <>
      <div className="about">

        <div className="about_img">
          <img src={dp} alt="" />
        </div>
        <div className="about_intro">
          <p>Hi there </p>
          <h2>
            I'm Ravi, an enthusiastic Front-End Developer skilled in transforming concepts into visually striking and smoothly operational digital landscapes. </h2>

        </div>

      </div>
     
    </>
  )
}

export default About