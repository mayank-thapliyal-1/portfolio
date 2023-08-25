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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dignissimos. Illo quidem numquam modi, itaque asperiores in commodi perspiciatis? Fugiat nesciunt quibusdam possimus. Sunt placeat et, distinctio quo ullam nesciunt.
    </p>
    <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={QuizzyImg} title='Quizzy' link='https://quizzy-git-main-mayank-thapliyal-1.vercel.app/'/>
        <ProjectItem img={CodeNebula} title='CodeNebula' link='https://mayank-thapliyal-1.github.io/CodeNebulae/' />
        <ProjectItem img={DrumKitImg} title='DrumKit' link='https://drum-kit-git-main-mayank-thapliyal-1.vercel.app/' />
        <ProjectItem img={MoveItImg} title='MoveIt' link="https://mayank-thapliyal-1.github.io/Move-IT/"/>
    </div>
 </div>
    );
};
export default Projects