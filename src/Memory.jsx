import React from "react";

import { Link } from "react-router-dom";

const Memory = () => {

  const numbers = [];
  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }

  return (
    <div className="min-h-screen  w-full bg-gradient-to-br from-indigo-600 via-pink-600 to-blue-500 grid-cols-10 bg- items-center gap-3 justify-center">
      <h1 className="text-center bg-black/40 w-120 mb-5  p-5 rounded-lg shadow-md shadow-black m-auto font-extrabold text-white text-3xl ">
        Memory Verses
      </h1>
      <div className="flex gap-3 items-center justify-center m-5">
        <Link to="/words" className="bg-black/40 py-1.5 px-4 rounded-lg text-white font-semibold shadow-md shadow-cyan-500">
          Reading
        </Link>
        <Link to="grade-3">Grade 3</Link>
      </div>
      <div className=" w-4xl m-auto bg-black/60 p-6 rounded-lg shadow-lg shadow-cyan-500">
        <h2 className="text-center text-4xl font-extrabold text-blue-500">
          Matilda Awino
        </h2>
        <p className="text-3xl font-semibold text-cyan-400">Ephesians 4:32</p>
        <p className="text-white text-2xl">
          Be kind and compassionate to one another, forgiving each other, just
          as our Lord Jesus Christ forgave you.
        </p>
      </div>

      <div className=" w-4xl mt-4 m-auto bg-black/60 p-6 rounded-lg shadow-lg shadow-cyan-500">
        <h2 className="text-center text-4xl font-extrabold text-pink-500">
          Gavin Sowon
        </h2>
        <p className="text-3xl font-semibold text-cyan-400">Philippians 4:13</p>
        <p className="text-white text-2xl">
          I can do all things through christ who strengthens me.
        </p>
      </div>

      <div className=" w-4xl pb-5 m-auto mt-4 bg-black/60 p-6 rounded-lg shadow-lg shadow-cyan-500">
        <h2 className="text-center text-4xl font-extrabold text-yellow-500">
          Ryanne Ochieng
        </h2>
        <p className="text-3xl font-semibold text-cyan-400">Proverbs 3:5</p>
        <p className="text-white text-2xl">
          Trust in the Lord with all your heart and do not lean on your own
          understanding.
        </p>
      </div>
    </div>
  );
};

export default Memory;
