import React from "react";
import Workitem from "./Workitem";
const data = [
  {
    year: 2020,
    title: "Software Developer",
    details: "Developed web applications using Python and Django.",
    duration: "Full-time",
  },
  {
    year: 2018,
    title: "Data Analyst",
    details:
      "Analyzed and visualized data to provide insights for decision-making.",
    duration: "Part-time",
  },
  {
    year: 2017,
    title: "Intern",
    details: "Assisted in various tasks including research and documentation.",
    duration: "Summer internship",
  },
  {
    year: 2015,
    title: "Sales Associate",
    details: "Interacted with customers and managed store inventory.",
    duration: "Part-time",
  },
  {
    year: 2014,
    title: "Freelance Graphic Designer",
    details: "Created visual designs for clients on a project basis.",
    duration: "Flexible hours",
  },
];
const Work = () => {
  return (
    <div id="Work" className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className=" text-4xl font-bold text-center text-[#001b56]">Work</h1>

      {data.map((item,idx) => (
        <Workitem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};
export default Work;
