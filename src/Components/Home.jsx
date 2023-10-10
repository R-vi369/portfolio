import React from 'react'
import '../styles/Home.scss'
import Home2 from './Home2'
import pro_img from '../assets/profile.png'
import  Footer from './Footer'


const Home = () => {

  return (
    <>
      <div className="home">
        <div className="home_left">
        <h3>Hola, I'm</h3>
              <h1>Ravi</h1>
              <p>A passionate web developer | currently leanring Backend developement | front end developer | </p>
             
        </div>
          
          <div className="home_img">
            <img src={pro_img} alt="" />
          </div>
      </div>
      <Home2/>
      <Footer/>

    </>
  )
}

export default Home


