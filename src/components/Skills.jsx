import React from "react";
import Skillsitem from "./Skillsitem";

const Skills = () => {
  return (
    <div id="Skills" className=" dark:bg-slate-900 max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className=" text-4xl font-bold text-center dark:text-slate-200 text-[#001b5e]">Skills</h1>
      <div className=" grid  justify-center  mt-5  py-4 lg:pl-24 sm:p-10 sm:grid-cols-3 gap-5 ">
        <Skillsitem
          img={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          }
        />
        <Skillsitem
          img={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          }
        />
        <Skillsitem
          img={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          }
        />
        <Skillsitem
          img={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          }
        />
        <Skillsitem
          img={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          }
        />
        <Skillsitem
          img={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
          }
        />
      </div>
    </div>
  );
};
export default Skills;
