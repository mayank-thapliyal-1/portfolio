import React, { useEffect, useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import DarkModeToggle from "./components/DarkModeToggle";

const App = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:light").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handeThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="dark:bg-slate-900 relative">
      <div className="fixed z-10 top-4 right-4 hidden md:block ">
        <DarkModeToggle handeThemeSwitch={handeThemeSwitch}  />
      </div>
      <Sidenav handeThemeSwitch={handeThemeSwitch} />
      <Main />
      {/* <Work/> */}
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};
export default App;
