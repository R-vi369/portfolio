import React, { useState, useEffect } from 'react';
import '../styles/Skills.scss'
const Skills = () => {
  const texts = ['React.js', 'Javascript', 'html', 'css', 'scss', 'github', 'Tailwind', 'Netlify', 'C++', 'Jquery', ]; // Add your texts here
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Adjust the interval as needed (e.g., 2000 milliseconds for 2 seconds)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [texts.length]);

  return (
    <>
    <div className="skills">
    <h1 >{texts[currentTextIndex]}</h1>

    </div>
    </>
  )
}

export default Skills