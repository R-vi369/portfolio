import React from 'react'
import "../styles/Home.scss"
import dp from '../assets/dp.jpg'
import Typed from 'typed.js';
import Footer from './Footer'

// Shery.imageEffect('.dp',{
//   style:5,
//   debug:true,
// })

const Home = () => {
  const el = React.useRef(null)
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend developer.', 'React.js', 'Learning Backend', 'Interested in Data science'],
      typeSpeed: 150,
      backSpeed: 50,
      loop: true
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="home">
        <div className="homeLeft">
          <div className="homeText">
            <h2 >Hello <span>Everyone</span></h2>
            <h3>I <span>am</span></h3>
            <h1>Rav<span>i</span></h1>
          </div>
          <div className="homeInfo">
          <span ref={el} />
          </div>
          <div className="homeCv">
            Download CV
          </div>

        </div>

        <div className="homeRight">
          <img  className='dp' src={dp} alt="" />
          
        </div>

      </div>

  <Footer/>

    </>
  )
}

export default Home