import React from 'react'
import "../styles/Home.scss"
import Typed from 'typed.js';
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Footer from './Footer'

const Home = () => {
  const el = React.useRef(null)
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['React.js', 'Learning Backend', 'Interested in Data science'],
      typeSpeed: 250,
      backSpeed: 150,
      loop: true
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div id="smooth_scroll">

        <div className="home">
          <div className="homeLeft">

            frontend developer
            <span ref={el} className='textMove' />
          </div>
        </div>
        <About />
        <Skills/>
        <Projects/>
      
        <Footer />

      </div>
    </>
  )
}

export default Home