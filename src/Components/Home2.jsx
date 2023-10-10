import React from 'react'
import '../styles/Home2.scss'
import profile2 from '../assets/profile2.jpg'
const Home2 = () => {
    return (
        <>


            <div className="home2">

                <div className="home2_left">
                    <img src={profile2} alt="" />
                </div>

                <div className="home2_right">


                    <h1>Let me introduce myself</h1>

                    <p>I fell in love with JavaScript when I discovered that it keeps its promises and never tells lies.</p>

                    <p> I am good in classics like Javascript and C++</p>
                    <p> My field of interest's are building  <span>Web Applications</span> </p>


                </div>

            </div>

        </>
    )
}

export default Home2