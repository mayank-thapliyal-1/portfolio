import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineProject,
} from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import DarkModeToggle from "./DarkModeToggle";

const sibebarData = [
  {
    icon: <AiOutlineHome size={20} />,
    href: "#Main",
    name: "Home",
  },
  // {
  //   icon: <GrProjects size={20} />,
  //   href: "#Work",
  //   name: "Work",
  // },
  {
    icon: <VscTools size={20} />,
    href: "#Skills",
    name: "Skills",
  },
  {
    icon: <AiOutlineProject size={20} />,
    href: "#Projects",
    name: "Projects",
  },
  {
    icon: <BsPerson size={20} />,
    href: "#Main",
    name: "Resume",
  },
  {
    icon: <AiOutlineMail size={20} />,
    href: "#Contact",
    name: "Contact me",
  },
];

const Sidenav = ({ handeThemeSwitch }) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className="absolute z-10 top-4 left-4 md:hidden ">
        <DarkModeToggle handeThemeSwitch={handeThemeSwitch} />
      </div>
      <AiOutlineMenu
        onClick={handleNav}
        className=" text-gray-500 dark:text-black absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed  w-full h-screen bg-white/90 flex lg:hidden flex-col justify-center items-center z-20">
          {sibebarData.map((data,i) => (
            <a
              key={data.href+i}
              onClick={handleNav}
              href={data.href}
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
            >
              {data.icon}
              <span className="pl-4">{data.name}</span>
            </a>
          ))}
        </div>
      ) : (
        ""
      )}
      <div className=" md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          {sibebarData.map((data,i) => (
            <a
              key={data.href+i}
              href={data.href}
              className="dark:bg-slate-400  bg-slate-300 rounded-full shadow-lg shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              {data.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidenav;
