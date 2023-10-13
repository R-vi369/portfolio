import React from 'react'
import '../styles/Home.scss'
import Home2 from './Home2'
import pro_img from '../assets/profile.png'
import  Footer from './Footer'
import Typed from 'typed.js';


const Home = () => {
    // typed js
  const el = React.useRef(null);



  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['A passionate web developer', 'front end developer.', 'currently leanring Backend developement.'],
      typeSpeed: 150,
   
      loop: true,
    });


  
  });

  return (
    <>
      <div className="home">
     

        <div className="home_left">
        <h3>Hola, I'm</h3>
              <h1>Ravi</h1>
              <p> <span ref={el} /> </p>
             
        </div>
          
          <div className="home_img">
            <img className='idd' src={pro_img} alt="" />
          </div>
      </div>
      <Home2/>
      <Footer/>

    </>
  )
}

export default Home



