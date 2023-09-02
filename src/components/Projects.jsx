import React from "react";
import ProjectItem from "./ProjectItems";
import QuizzyImg from "../assets/images/Quizzy.png";
import CodeNebula from "../assets/images/CodeNebula.png";
import DrumKitImg from "../assets/images/DrumKit.png";
import MoveItImg from "../assets/images/Moveit.png";

const Projects = () => {
  return (
    <div
      id="Projects"
      className=" dark:bg-slate-900 max-w-[1040] m-auto md:pl-20 p-4 py-16"
    >
      <h1 className="text-4xl font-bold text-center dark:text-slate-200 text-[#100b5e]">
        Projects
      </h1>
      <p className=" dark:text-slate-300 text-center py-8">
        I am a seasoned front-end developer skilled in crafting captivating web
        experiences. Proficient in HTML, CSS, JavaScript,tailwindcss and
        ReactJS, I seamlessly blend innovation with functionality.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={QuizzyImg}
          title="Quizzy"
          use="React Js"
          link="https://quizzy-git-main-mayank-thapliyal-1.vercel.app/"
          linker="https://github.com/mayank-thapliyal-1/Quizzy"
        />
        <ProjectItem
          img={CodeNebula}
          title="CodeNebula"
          use="Css , Html"
          link="https://code-nebulae-git-main-mayank-thapliyal-1.vercel.app/"
          linker="https://github.com/mayank-thapliyal-1/CodeNebulae"
        />
        <ProjectItem
          img={DrumKitImg}
          title="DrumKit"
          use="Javascript , css"
          link="https://drum-kit-git-main-mayank-thapliyal-1.vercel.app/"
          linker="https://github.com/mayank-thapliyal-1/Drum-Kit-Starting-Files"
        />
        <ProjectItem
          img={MoveItImg}
          title="MoveIt"
          use="Bootstrap"
          link="https://move-it-git-main-mayank-thapliyal-1.vercel.app/"
          linker="https://github.com/mayank-thapliyal-1/Move-IT"
        />
      </div>
    </div>
  );
};
export default Projects;
