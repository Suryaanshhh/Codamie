import React from "react";
import logo from "/logo.png";
const Header = () => {
  return (
    <nav className="bg-white-50 flex justify-between p-3">
      <div className="flex items-end">
        <img src={logo} className="h-14"></img>
        <span>
          <h3 className="font-semibold text-2xl">Codamie</h3>
          <p className="text-sm">Fuck your programming partner</p>
        </span>
      </div>
      <div className="flex">
        <ul className="flex gap-3 items-center font-medium">
          <li className="hover:text-orange-500 hover:cursor-pointer">Home</li>
          <li className="hover:text-orange-500 hover:cursor-pointer">About Us</li>
          <li className="hover:text-orange-500 hover:cursor-pointer">Contact us</li>
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <button className="border-orange-500 border-2 px-4 py-1 rounded hover:bg-orange-200 transition-all ease-in-out delay-100">Sign In</button>
        <button className="border-orange-500 border-2 px-4 py-1 rounded hover:bg-orange-200 transition-all ease-in-out delay-100">Sign Up</button>
      </div>
    </nav>
  );
};
export default Header;
