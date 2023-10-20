import React from 'react'
import '../styles/Home.scss'
import Home2 from './Home2'
import  Footer from './Footer'
import Typed from 'typed.js';

const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend developer', 'Learning Backend', 'Interest in Data sci'],
      typeSpeed: 150,

      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="home">
        <div className="home_left">
        <h3>Hola, I'm</h3>
              <h1>Ravi</h1>
             
        </div>
        
          <p><span ref={el} /></p>
         
      </div>
      <Home2/>
     
      <Footer/>

    </>
  )
}

export default Home



