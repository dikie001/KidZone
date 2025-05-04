import React from "react";
import { Link } from "react-router-dom";

const Memory = () => {
  const navLinks = [
    { path: "/", label: "🏠 Home" },
    { path: "/grade-2", label: "🧒 Grade 2" },
    { path: "/grade-3", label: "📚 Grade 3" },
    { path: "/grade-5", label: "🧠 Grade 5" },
    { path: "/about", label: "ℹ️ About" },
  ];

  const verses = [
    {
      name: "Matilda Awino",
      verseRef: "Ephesians 4:32",
      text: "Be kind and compassionate to one another, forgiving each other, just as our Lord Jesus Christ forgave you.",
      color: "text-sky-400",
    },
    {
      name: "Gavin Sowon",
      verseRef: "Philippians 4:13",
      text: "I can do all things through Christ who strengthens me.",
      color: "text-rose-400",
    },
    {
      name: "Ryanne Ochieng",
      verseRef: "Proverbs 3:5",
      text: "Trust in the Lord with all your heart and do not lean on your own understanding.",
      color: "text-amber-300",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-900 to-black text-white px-6 py-10 flex flex-col items-center">

      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-emerald-400 to-cyan-400 mb-12">
        ✨ Memory Verses ✨
      </h1>

      {/* Navigation */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl text-white font-medium tracking-wide transition-all duration-300 shadow-md backdrop-blur-md"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Memory Verse Cards */}
      <div className="grid gap-8 max-w-4xl w-full">
        {verses.map((v, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-slate-800 via-slate-900 to-black border border-slate-700 p-6 rounded-2xl shadow-md shadow-fuchsia-600 hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
          >
            <h2 className={`text-3xl font-bold mb-2 ${v.color}`}>
              {v.name}
            </h2>
            <p className="text-lg font-semibold text-cyan-400 italic mb-2">
              {v.verseRef}
            </p>
            <p className="text-base text-slate-200 leading-relaxed tracking-wide">
              {v.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memory;
// This component is a simple memory verse display page with navigation links and styled cards for each verse.    
// It uses Tailwind CSS for styling and React Router for navigation.