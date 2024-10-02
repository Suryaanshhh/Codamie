import React from "react";
import bgvideo from "/bgfinal.mp4";
import { useState } from "react";
import axios from "axios";
function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    pass: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleLogin = async (e) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        loginData
      );
      console.log(response);
      alert("User Login Successfully");
    } catch (err) {
      alert(`Error occured :${err}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="font-medium bg-white/40 w-[500px] backdrop-blur-sm m-auto p-8 text-black rounded-xl">
        <div className="">
          <h1>Welcome to codamie</h1>
          <h2>Get your condoms ready with viagra</h2>
        </div>
        <div className="mt-5">
          <span className="flex">
            <label className="block" htmlFor="email">
              Enter your email{" "}
            </label>
            <label className="block ml-[56px]" htmlFor="pass">
              Enter Password{" "}
            </label>
          </span>
          <span className="flex gap-2">
            <input
              className="w-full bg-transparent border border-black"
              id="email"
              type="email"
              value={loginData.email}
              onChange={handleChange}
            />
            <input
              className="w-full bg-transparent border border-black"
              id="pass"
              type="text"
              value={loginData.password}
              onChange={handleChange}
            />
            <button
              onClick={handleLogin}
              className="bg-white/50 rounded px-4 py-1 border-2 border-white/50 hover:border-orange-400 hover:bg-orange-200"
            >
              {" "}
              Login
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
