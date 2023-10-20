import React from 'react'
import '../styles/Home2.scss'
import profile2 from '../assets/profile2.jpg'
import {Link} from 'react-router-dom'
const Home2 = () => {
    return (
        <>


            <div className="home2">

                <div className="home2_left">
                    <img src={profile2} alt="" />
                </div>

                <div className="home2_right">


                    <h1>Let me introduce <span>myself</span></h1>

                    <p>I fell in love with JavaScript when I discovered that it keeps its promises and never tells lies.</p>

                    <p> I excel in classic programming languages such as <span>Javascript</span> and <span>Python</span></p>
                    <p> My field of interest's are building  <Link className='wa' to='/projects'>Web Applications</Link> and i also like data science </p>


                </div>

            </div>

        </>
    )
}

export default Home2