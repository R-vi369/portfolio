import React from 'react'
import '../styles/Footer.scss'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'


const footer = () => {
    
    return (
        <>

<div className="socialHere">
    
                <div className="footer_social_media">
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/in/ravi-1426a4238/" target='_blank'>
                            Linkedin
                        </a>


                    </div>
                    <div className="github">
                        <a href="https://github.com/R-vi369" target='_blank'>
                            
                         Github
                        </a>
                    </div>

                </div>

            </div>


             <div className="footer">
              
                <div className="footer_left">

                    <h1>Designed and Developed  by Ravi</h1>
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