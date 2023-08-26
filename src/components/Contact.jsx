import { Input } from "postcss";
import React from "react";
const Contact=()=>{
    return(
        <div id="Contact" className="dark:bg-slate-900 max-w-[1040] m-auto md:pl-20 p-4 py-16">
            <h1 className="py-4 text-4xl font-bold text-center dark:text-slate-200 text-[#100b5e]">Contact</h1>
            <form action='https://getform.io/f/45a7d69c-e201-4f76-952e-62d6014df512' method='POST' encType='multipart/form-data'>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className=" flex flex-col">
                        <label htmlFor="name" className=" dark:text-slate-200 uppercase text-sm py-2"  >NAME</label>
                        <input id="name" className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text" name='name'/>
                    </div>
                    <div className=" flex flex-col">
                        <label htmlFor="phone" className="  dark:text-slate-200 uppercase text-sm py-2" >Phone Number</label>
                        <input id="phone"  className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text" name='Phone' />
                    </div>
                </div>
                <div className=" flex flex-col py-2">
                    <label htmlFor="email" className=" dark:text-slate-200 uppercase text-sm py-2" >Email</label>
                    <input id="email" className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email" name= "email"/>
                </div>
                <div className=" flex flex-col py-2">
                    <label htmlFor="subject" className=" dark:text-slate-200 uppercase text-sm py-2" >Subject</label>
                    <input id="subject" className="border-2 rounded-lg p-3 flex border-gray-300"
                     type="Subject" name="subject" />
                 </div>
                 <div className=" flex flex-col py-2">
                    <label htmlFor="message" className="dark:text-slate-200 uppercase text-sm py-2" >Message</label>
                    <textarea id="message" className="border-2 rounded-lg p-3 flex border-gray-300"
                     name="Message"  rows="10"></textarea>
                 </div>
                 <button className=" dark:bg-blue-900 bg-[#001b5e] text-gray-100 mt-4 rounded-lg p-4">Send Message</button>
            </form>
            </div>
    );
};
export default Contact
