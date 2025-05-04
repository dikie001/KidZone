import React, { useState } from "react";
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
      text: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
      color: "text-sky-400",
    },
    {
      name: "Matilda Awino",
      verseRef: "Psalm 56:3",
      text: "When I am afraid, I put my trust in you.",
      color: "text-sky-400",
    },
    {
      name: "Matilda Awino",
      verseRef: "Isaiah 41:10",
      text: "Do not fear, for I am with you; do not be dismayed, for I am your God.",
      color: "text-sky-400",
    },
    {
      name: "Gavin Sowon",
      verseRef: "Philippians 4:13",
      text: "I can do all things through Christ who strengthens me.",
      color: "text-rose-400",
    },
    {
      name: "Gavin Sowon",
      verseRef: "Joshua 1:9",
      text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
      color: "text-rose-400",
    },
    {
      name: "Gavin Sowon",
      verseRef: "1 Corinthians 16:13",
      text: "Be on your guard; stand firm in the faith; be courageous; be strong.",
      color: "text-rose-400",
    },
    {
      name: "Ryanne Ochieng",
      verseRef: "Proverbs 3:5",
      text: "Trust in the Lord with all your heart and do not lean on your own understanding.",
      color: "text-amber-300",
    },
    {
      name: "Ryanne Ochieng",
      verseRef: "Romans 12:21",
      text: "Do not be overcome by evil, but overcome evil with good.",
      color: "text-amber-300",
    },
    {
      name: "Ryanne Ochieng",
      verseRef: "Matthew 5:14",
      text: "You are the light of the world. A city on a hill cannot be hidden.",
      color: "text-amber-300",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedKid, setSelectedKid] = useState("Matilda Awino");
  const itemsPerPage = 3;

  // Filter verses based on the selected kid
  const filteredVerses = verses.filter((verse) => verse.name === selectedKid);

  const indexOfLastVerse = currentPage * itemsPerPage;
  const indexOfFirstVerse = indexOfLastVerse - itemsPerPage;
  const currentVerses = filteredVerses.slice(indexOfFirstVerse, indexOfLastVerse);

  const totalPages = Math.ceil(filteredVerses.length / itemsPerPage);

  const handleKidSelection = (kidName) => {
    setSelectedKid(kidName);
    setCurrentPage(1); // Reset page to 1 when selecting a new kid
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-900 to-black text-white px-6 py-10 flex flex-col items-center">

      {/* Title */}
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

      {/* Kid Selection Buttons */}
      <div className="flex gap-6 mb-8">
        <button
          onClick={() => handleKidSelection("Matilda Awino")}
          className={`px-6 py-2 shadow-md shadow-black rounded-xl font-semibold ${selectedKid === "Matilda Awino" ? "bg-sky-600" : "bg-sky-400"} text-white transition-all duration-300`}
        >
          Matilda
        </button>
        <button
          onClick={() => handleKidSelection("Gavin Sowon")}
          className={`px-6 py-2 shadow-md shadow-black rounded-xl font-semibold ${selectedKid === "Gavin Sowon" ? "bg-rose-600" : "bg-rose-400"} text-white transition-all duration-300`}
        >
          Sowon
        </button>
        <button
          onClick={() => handleKidSelection("Ryanne Ochieng")}
          className={`px-6 py-2 shadow-md shadow-black rounded-xl font-semibold ${selectedKid === "Ryanne Ochieng" ? "bg-amber-600" : "bg-amber-400"} text-white transition-all duration-300`}
        >
          Ryanne 
        </button>
      </div>

      {/* Verse Cards */}
      <div className="grid gap-8 max-w-4xl w-full mb-8">
        {currentVerses.map((v, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-slate-800 via-slate-900 to-black border border-slate-700 p-6 rounded-2xl shadow-md shadow-fuchsia-600 hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
          >
            <h2 className={`text-3xl font-bold mb-2 ${v.color}`}>{v.name}</h2>
            <p className="text-lg font-semibold text-cyan-400 italic mb-2">{v.verseRef}</p>
            <p className=" text-slate-200 text-xl leading-relaxed tracking-wide">{v.text}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex gap-4 justify-center mt-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className={`px-5 py-2 rounded-lg font-semibold bg-pink-700 hover:bg-pink-600 transition-all disabled:opacity-40`}
        >
          ⬅️ Back
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className={`px-5 py-2 rounded-lg font-semibold bg-emerald-700 hover:bg-emerald-600 transition-all disabled:opacity-40`}
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
};

export default Memory;
