import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkModeToggle = ({ handeThemeSwitch }) => {
  return (
    <button onClick={handeThemeSwitch} className="flex flex-row duration-300 border-2 border-white dark:border-black items-center bg-slate-300 dark:bg-slate-700 dark:flex-row-reverse h-8 w-14 p-1 px-[2px] rounded-full shadow-md">
      <div className="p-1 bg-white dark:bg-black rounded-full">
        <BiSolidMoon className="text-lg text-slate-500 block dark:hidden" />
        <BiSolidSun className="hidden text-slate-200 dark:block" />
      </div>
    </button>
  );
};

export default DarkModeToggle;
