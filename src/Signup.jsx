import React, { useState } from "react";
import bgvideo from "/bgfinal.mp4";
import axios from "axios";
function Signup() {


  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  
  const handleRegister = async (e) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/register",
        userData
      );
      console.log(response);
      alert("User Registered Successfully");
    } catch (err) {
      alert(`Error occured :${err}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="flex flex-col border bg-white/50 items-center m-auto back backdrop-blur-sm rounded-lg font-medium txt-black">
        <div className="flex items-center justify-center ">
          <label className="m-2 w-[60px]" htmlFor="name">
            Name:
          </label>
          <input
            className="p-2 m-4 rounded-md"
            id="name"
            type="text"
            value={userData.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <label className="m-2 w-[60px]" htmlFor="email">
            Email:
          </label>
          <input
            className="p-2 m-4 rounded-md"
            type="email"
            id="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-center ">
          <label className="m-2 w-[60px]" htmlFor="pass">
            Password:
          </label>
          <input
            className="p-2 m-4 rounded-md"
            type="password"
            id="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <span className="bg-white/50 rounded px-4 py-1 border-2 border-gray-300 hover:border-orange-400 hover:bg-orange-200">
          <button onClick={handleRegister}>Register</button>
        </span>
      </div>
    </div>
  );
}

export default Signup;
