import React from "react";
const Skillsitem=({img,alt})=>{
    return(
        <div className="bg-[#100b5e] h-fit w-fit p-4 shadow-lg shadow-gray-700 rounded-lg hover:scale-110 ease-in duration-500"><img className="bg-white rounded-xl p-3 h-28 w-28 lg:h-36 lg:w-36" src={img} alt={alt} /></div>
    );
};
export default Skillsitem;