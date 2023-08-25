import React from "react";
const Skillsitem=({img})=>{
    return(
        <div className="bg-[#100b5e] h-fit w-fit p-4 shadow-lg shadow-gray-700 rounded-lg hover:scale-110 ease-in duration-500"><img className="bg-white rounded-xl p-3 h-36" src={img} alt="" /></div>
    );
};
export default Skillsitem;