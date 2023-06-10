import React from "react";



const About = () => {

  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-green-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Namaste. I'm <span className="text-green-600 font-black ">Ravi</span>, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              
              Frontend Developer: Crafting Engaging Web Experiences Passionate
              about creating captivating web experiences, I specialize in HTML,
              CSS, and JavaScript to build pixel-perfect interfaces. Using
              modern frameworks like React or Next, I develop dynamic and
              responsive web applications. Continuously
              learning and adapting to emerging technologies, I strive to shape
              the digital world with visually stunning and intuitive user
              interfaces. Let's embark on a journey of innovation and creativity
              together, crafting impactful frontend solutions for the modern
              web.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
