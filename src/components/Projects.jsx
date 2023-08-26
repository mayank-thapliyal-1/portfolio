import React from "react";
import ProjectItem from "./ProjectItems";
import QuizzyImg from "../assets/images/Quizzy.png"
import CodeNebula from "../assets/images/CodeNebula.png"
import DrumKitImg from "../assets/images/DrumKit.png"
import MoveItImg from "../assets/images/MoveIt.png"

const Projects=()=>{
    return(
<div id="Projects" className="max-w-[1040] m-auto md:pl-20 p-4 py-16">
    <h1 className="text-4xl font-bold text-center text-[#100b5e]">Projects</h1>
    <p className=" text-center py-8">
    I am a seasoned front-end developer skilled in crafting captivating web experiences. Proficient in HTML, CSS, JavaScript,tailwindcss and ReactJS, I seamlessly blend innovation with functionality.</p>
    <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={QuizzyImg} title='Quizzy' link='https://quizzy-git-main-mayank-thapliyal-1.vercel.app/'/>
        <ProjectItem img={CodeNebula} title='CodeNebula' link='https://code-nebulae-git-main-mayank-thapliyal-1.vercel.app/' />
        <ProjectItem img={DrumKitImg} title='DrumKit' link='https://drum-kit-git-main-mayank-thapliyal-1.vercel.app/' />
        <ProjectItem img={MoveItImg} title='MoveIt' link="https://move-it-git-main-mayank-thapliyal-1.vercel.app/"/>
    </div>
 </div>
    );
};
export default Projects