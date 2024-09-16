import React from "react";
import bgvideo from "/bgfinal.mp4";
function Signup() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="flex flex-col border bg-white/50 items-center m-auto back backdrop-blur-sm rounded-lg font-medium txt-black">
        <div className="flex items-center justify-center ">
          <label className="m-2 w-[60px]" htmlFor="name">
            Name:
          </label>
          <input className="p-2 m-4 rounded-md" id="name" type="text" />
        </div>
        <div className="flex items-center justify-center">
          <label className="m-2 w-[60px]" htmlFor="email">
            Email:
          </label>
          <input className="p-2 m-4 rounded-md" type="email" id="email" />
        </div>
        <div className="flex items-center justify-center ">
          <label className="m-2 w-[60px]" htmlFor="pass">
            Password:
          </label>
          <input className="p-2 m-4 rounded-md" type="text" id="pass" />
        </div>
        <span className="bg-white/50 rounded px-4 py-1 border-2 border-gray-300 hover:border-orange-400 hover:bg-orange-200">
          <button>Register</button>
        </span>
      </div>
    </div>
  );
}

export default Signup;
