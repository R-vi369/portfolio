import React from 'react'
import '../styles/Footer.scss'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
const footer = () => {
    return (
        <>

            <div className="footer">
                <div className="footer_left">

                    <h1>Designed and Developed  by Ravi</h1>
                </div>
                <div className="footer_mid">
                    <a href="https://github.com/R-vi369" target='_blank'>
                        <BsGithub/>
                    </a>
                    <a href="https://www.linkedin.com/in/ravi-1426a4238/" target='_blank'><FaLinkedin/></a>
                </div>
                <div className="footer_right">
                 
                 <p>Copy rights</p>
                 <AiOutlineCopyrightCircle/>
                        <p>2023</p>
                </div>

            </div>


        </>
    )
}

export default footer