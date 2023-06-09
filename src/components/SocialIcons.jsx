import React from "react";
import "./Home.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';


const SocialIcons = () => {
  return (

    <div className="icons space-y-4">
  
      <div className="github">
        <a href="https://github.com/R-vi369" target="_blank">

      <FaGithub/>
        </a>
       
      </div>
      <div className="linkedin">
        <a href="https://www.linkedin.com/in/ravi-1426a4238" target="_blank">

        <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
