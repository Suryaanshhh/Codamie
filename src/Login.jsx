import React from "react";
import bgvideo from "/bgfinal.mp4";
import { useState } from "react";
function Login() {
    
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <video muted autoPlay loop className="absolute -z-10  "  src={bgvideo}></video>
      <div className="font-medium bg-white/40 w-[500px] backdrop-blur-sm m-auto p-8 text-black rounded-xl">
        <div className="">
          <h1>Welcome to codamie</h1>
          <h2>Get your condoms ready with viagra</h2>
        </div>
        <div className="mt-5">
          <label className="block" htmlFor="email">
            Enter your email{" "}
          </label>
          <span className="flex gap-2">
            <input className="w-full bg-transparent border border-black" id="email" type="email" />
            <button className="bg-white/50 rounded px-4 py-1 border-2 border-white/50 hover:border-orange-400 hover:bg-orange-200">Submit</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
