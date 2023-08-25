import React from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
// import Work from "./components/Work";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

export const App = () => {
  return (
    <div>
      <Sidenav />
      <Main />
      {/* <Work/> */}
      <Skills/>
      <Projects />
      <Contact/>
    
    </div>
  );
};
export default App;
