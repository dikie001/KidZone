import React from "react";
import { Link } from "react-router-dom";

const Memory = () => {
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
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        <Link
          to="/words"
          className="bg-gradient-to-r from-indigo-700 to-violet-700 hover:from-indigo-600 hover:to-violet-600 px-5 py-2 rounded-lg font-semibold shadow-md transition-all duration-300"
        >
          📚 Reading
        </Link>
        <Link
          to="/grade-3"
          className="bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-600 hover:to-pink-500 px-5 py-2 rounded-lg font-semibold shadow-md transition-all duration-300"
        >
          🧠 Grade 3
        </Link>
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
// The component is structured to be responsive and visually appealing, with a gradient background and hover effects on the cards.
// The verses are hardcoded in an array, and each verse is displayed in a card format with a name, reference, and text.
// The navigation links allow users to navigate to other parts of the app, such as the reading section and Grade 3 words.
// The component is designed to be easy to read and understand, with clear typography and spacing.
// The use of Tailwind CSS classes allows for quick adjustments to the design without needing to write custom CSS.
// The component is functional and can be easily integrated into a larger React application.  