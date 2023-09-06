import React from "react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import backgroudImage from "../assets/images/Coverpic.jpeg"
const Main = () => {
  return (
    <div id="Main">
      <img
        className=" w-full h-screen object-cover object-left scale-x-[1]"
        src={backgroudImage}
        alt=""
      />

      <div className="w-full h-screen absolute top-0 left-0 bg-white/60 dark:bg-black/60 ">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className=" sm:text-5xl text-4xl font-bold text-gray-800 dark:text-slate-200">
            I'm Mayank Thapliyal
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800 dark:text-slate-200">
            I'm a
            <TypeAnimation
              sequence={[
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
            <a href="https://github.com/dashboard" target="blank">
              <FaGithub
                className="dark:text-slate-500  cursor-pointer rounded-md hover:scale-110 ease-in-out duration-500 hover:bg-white hover: w-6 hover:h-6"
                size={20}
              />
            </a>
            <a href="https://www.instagram.com/mayank_thapliyal1/" target="blank">
              <FaInstagram
                className="dark:text-slate-500 cursor-pointer rounded-md hover:scale-110 ease-in-out duration-500 hover:bg-white hover: w-6 hover:h-6"
                size={20}
              />
            </a>
            <a href="https://www.linkedin.com/in/mayank-thapliyal-17b134259/" target="blank">
              <FaLinkedinIn
                className="dark:text-slate-500 cursor-pointer rounded-md hover:scale-110 ease-in-out duration-500 hover:bg-white hover: w-6 hover:h-6"
                size={20}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
