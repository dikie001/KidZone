import { XIcon } from "lucide-react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Grade5 = () => {

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/grade-2", label: "Grade 2" },
    { path: "/grade-3", label: "Grade 3" },
    { path: "/grade-5", label: "Grade 5" },
    { path: "/about", label: "About" },
  ];

  const [word, setWords] = useState([]);
  const [cont, setCont] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    
    fetch("/grade_word_data_full.json")
      .then((res) => res.json())
      .then((data) => {
        setWords(data.grade_5.sentences);
      });
    console.log(word);
  }, []);

  //modal for content pop up
  const content = (w) => {
    setIsModalVisible(true);
    setCont(w);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      {" "}
      <div className={`${isModalVisible && 'blur-sm bg-black/70'} text-center p-2 flex flex-col items-center`}>
        <h1 className="bg-black/70 mb-3 m-auto w-100 p-2  text-green-500 text-4xl font-extrabold rounded-2xl shadow-md shadow-black/80">
          Grade 5 Reading
        </h1>
        <div className="flex gap-3">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="bg-green-700 active:ring-2 ring-white py-1.5 px-4 rounded-lg text-white font-semibold mb-2 shadow-md transition-transform transform hover:scale-105 active:scale-90 ease-in-out"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="bg-black/50 gap-2 rounded-xl shadow-lg text-2xl font-semibold shadow-red-400 text-white max-w-6xl flex flex-col  p-5">
          {word.map((w, i) => (
            <h1
              onClick={() => content(w)}
              className="bg-black/70 cursor-pointer p-4 transition-transform hover:ring-2 ring-green-500 transform hover:scale-105 ease-in-out duration-300 justify-start px-5 flex rounded-xl shadow-md shadow-blue-800"
              key={i}
            >
              {i}. {w}
            </h1>
          ))}
        </div>
 
      </div>
      {isModalVisible && (
          <div className="bg-blue-700  text-white py-9 px-5 shadow-md shadow-cyan-400  p-5 text-4xl md:text-5xl min-lg:text-7xl font-bold  fixed top-50 flex items-center justify-center  w-50 md:w-100  rounded-lg  ">
            {cont}
            <div
              onClick={() => setIsModalVisible(false)}
              className="bg-black/60 shadow-md hover:bg-blue-700 shadow-blue-400 active:ring-2 ring-blue-200 absolute top-1 right-2 p-1 rounded-xl text-white"
            >
              <XIcon size={25} className=" font-bold" />
            </div>
          </div>
        )}
    </div>
  );
};

export default Grade5;
