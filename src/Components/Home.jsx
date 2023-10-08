import React from 'react'
import '../styles/Home.scss'
import profile_img from '../assets/profile_pic.png'
import { TypeAnimation } from 'react-type-animation';
const Home = () => {

  return (
    <>
      <div className="home">

        <div className="home_intro">
          <img src={profile_img} alt="" />
          <h3>Hola, I'm </h3>
          <h1 >

            <span>R</span>
            <span>a</span>
            <span>v</span>
            <span>i</span>

          </h1>
   
          <TypeAnimation
            sequence={[
              "Enthusiastic Front-End Developer with a passion for crafting exceptional web experience",
              1000, 
            
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1em', display: 'inline-block', textAlign: 'center'}}
            // repeat={Infinity}
            loop={true}
          />
        </div>


      </div>
    </>
  )
}

export default Home


