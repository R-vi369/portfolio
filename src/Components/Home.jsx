import React from 'react'
import "../styles/Home.scss"
import Typed from 'typed.js';
import Popup from './Popup'
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
        

      </div>
      <Popup/>
    </>
  )
}

export default Home