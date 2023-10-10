import React from 'react'
import '../styles/Home.scss'
import Home2 from './Home2'

const Home = () => {

  return (
    <>
      <div className="home">

        <div className="home_left">
          <div className="greeting">
            Hola!
          </div>
          <div className="home_intro">
            I'm Ravi
          </div>
          <div className="developer">
            ffront  end developer
          </div>
        </div>


        <div className="home_right">

          <img src="" alt="" />
        </div>


      </div>
      <Home2/>

    </>
  )
}

export default Home


