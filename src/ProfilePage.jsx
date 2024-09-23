import React, { useState } from "react";
import Select from "react-select";
import defaultProfileImage from "../src/assets/placeHolder/profile.jpg";
import bgimage from "../src/assets/placeHolder/bg_image.jpg";

const codingLanguage = [
  { value: "java", label: "Java" },
  { value: "javascript", label: "JavaScript" },
  { value: "python", label: "Python" },
  { value: "c++", label: "C++" },
  { value: "ruby", label: "Ruby" },
];
const stackOptions = [
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "mern", label: "Mern" },
  { value: "fullstack", label: "Fullstack" },
  { value: "devops", label: "Devops" },
];
function ProfilePage() {
  const [selectedImage, setSelectedImage] = useState(null); // Set the initial image to the default image (dp)

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Set the preview to the selected image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <img src={bgimage} alt="" className="absolute -z-10  " />
      <div className="text-center font-extrabold ">
        <h1>Developer Profile</h1>
      </div>
      <div className="">
        <div className=" flex justify-center flex-col h-[200px] w-[200px] m-auto p-2 mt-14 mb-8">
          <img
            className="border border-slate-500 mt-4 rounded-full"
            src={selectedImage || defaultProfileImage}
            alt="  Profile"
          />
          <input
            className="border border-red-400 rounded-xl mt-3"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className=" flex flex-col  p-8 font-medium items-center ">
          <label htmlFor="tech" className="text-left">
            Choose Your Preferred Technology :{" "}
          </label>
          <div className="w-max">
            <Select
              isMulti
              name="colors"
              options={stackOptions}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
          <label htmlFor="codingLanguage">
            Choose Your Preferred Programming Language :{" "}
          </label>
          <div className="w-max">
            <Select
              isMulti
              name="colors"
              options={codingLanguage}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
        </div>
        <div className="m-auto flex justify-center"> 
        <button className="bg-red-400 text-white rounded-xl px-4 py-2 hover:bg-red-600 transition  ">
          Submit
        </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
