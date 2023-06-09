import React from "react";
import './Home.css'
import { HiArrowNarrowRight } from "react-icons/hi";
import Moving from "./Moving";
import SocialIcons from "./SocialIcons"
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
         <p className=" text-2xl text-green-600 font-bold mx-8 py-4">Namste🙏</p>
        
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          <Moving />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a web developer specializing in building (and occasionally
          designing) currently learning new technologies.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-600 hover:border-green-600 ">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
      <SocialIcons/>
    </div>
  );
};

export default Home;
