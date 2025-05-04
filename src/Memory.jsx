import React from "react";
import { Link } from "react-router-dom";

const Memory = () => {
  const verses = [
    {
      name: "Matilda Awino",
      verseRef: "Ephesians 4:32",
      text: "Be kind and compassionate to one another, forgiving each other, just as our Lord Jesus Christ forgave you.",
      color: "text-blue-400",
    },
    {
      name: "Gavin Sowon",
      verseRef: "Philippians 4:13",
      text: "I can do all things through Christ who strengthens me.",
      color: "text-pink-400",
    },
    {
      name: "Ryanne Ochieng",
      verseRef: "Proverbs 3:5",
      text: "Trust in the Lord with all your heart and do not lean on your own understanding.",
      color: "text-yellow-300",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-pink-600 to-purple-700 px-6 py-10 flex flex-col items-center text-white">
      <h1 className="text-4xl font-extrabold bg-black/40 rounded-xl px-8 py-4 shadow-lg shadow-black mb-10">
        ✨ Memory Verses ✨
      </h1>

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        <Link
          to="/words"
          className="bg-white/10 hover:bg-white/20 py-2 px-5 rounded-lg text-white font-semibold shadow-md backdrop-blur-md transition"
        >
          📚 Reading
        </Link>
        <Link
          to="/grade-3"
          className="bg-white/10 hover:bg-white/20 py-2 px-5 rounded-lg text-white font-semibold shadow-md backdrop-blur-md transition"
        >
          🧠 Grade 3
        </Link>
      </div>

      {/* Verses Section */}
      <div className="grid gap-8 max-w-4xl w-full">
        {verses.map((v, i) => (
          <div
            key={i}
            className="bg-black/60 p-6 rounded-2xl shadow-lg shadow-cyan-500"
          >
            <h2 className={`text-3xl font-extrabold mb-1 ${v.color}`}>
              {v.name}
            </h2>
            <p className="text-xl font-semibold text-cyan-300 mb-3">
              {v.verseRef}
            </p>
            <p className="text-lg leading-relaxed text-white">{v.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memory;
