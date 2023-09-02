import React from "react";
const ProjectItem =({img,title,link,linker,use})=>{
    return(
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl group hover: bg-gradient-to-r from-gray-200 to-[#100b5e]">
            <img src={img} alt="" className=" rounded-xl group-hover:opacity-10"/>
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className=" text-2xl font-bold text-center text-white tracking-wider">{title}</h3>
                <p className=" pb-4 pt-2 text-white text-center">{use}</p>
                <div className=" flex gap-[20px]">
                <a  href={linker} target="blank"><p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-sm  hover:text-pink-300 " >github</p></a>
                <a href={link} target="blank"><p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-sm hover:text-pink-300">more info</p></a>
                </div>
                </div>
        </div>
        
        
    );
};
export default ProjectItem