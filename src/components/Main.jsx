import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
const Main = () => {
  return (
    <div id="Main">
      <img
        className=" w-full h-screen object-cover object-left scale-x-[1]"
        src="./src/assets/images/coverpic.jpeg" alt=""
        
      />
      
      <div className="w-full h-screen absolute top-0 left-0 bg-white/60 ">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className=" sm:text-5xl text-4xl font-bold text-gray-800">I'm Mayank Thapliyal</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                " Developer",
                2000,
                "  Coder",
                2000,
                "  Tech Enthusiast",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              />
          </h2>
          <div className="flex  justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className=" cursor-pointer" size={20}/>
            <FaFacebookF className=" cursor-pointer" size={20}/>
            <FaInstagram className=" cursor-pointer" size={20}/>
          <FaLinkedinIn className=" cursor-pointer" size={20}/> 
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
