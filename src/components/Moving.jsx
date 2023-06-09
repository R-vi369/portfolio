import Typed from "typed.js";
import { useEffect, useRef } from "react";
const moving = () => {
  
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["i am Ravi", " A frontend developer",  "React.js"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 200,
      typeSpeed: 180,
      backSpeed: 200,
      backDelay: 100
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      
      {/* Element to display typing strings */}
      <span  ref={el}></span>
    </div>
  )
}

export default moving