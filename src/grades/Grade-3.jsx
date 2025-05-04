import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { XIcon } from "lucide-react";

const Grade3 = () => {
  const navLinks = [
    { path: "/", label: "🏠 Home" },
    { path: "/grade-2", label: "🧒 Grade 2" },
    { path: "/grade-3", label: "📚 Grade 3" },
    { path: "/grade-5", label: "🧠 Grade 5" },
    { path: "/about", label: "ℹ️ About" },
  ];

  const [words, setWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);

  useEffect(() => {
    fetch("/grade_word_data_full.json")
      .then((res) => res.json())
      .then((data) => setWords(data.grade_3.words));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 py-6 flex flex-col items-center">
      
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-transparent bg-clip-text mb-6">
        Grade 3 Word Explorer
      </h1>

      {/* Navigation */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="bg-gray-700 hover:bg-purple-700 transition-colors duration-300 px-4 py-2 rounded-lg font-semibold shadow-lg"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Words Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-6xl bg-black/40 p-6 rounded-xl shadow-inner shadow-purple-900">
        {words.map((word, index) => (
          <button
            key={index}
            onClick={() => setSelectedWord(word)}
            className="bg-gradient-to-tr from-purple-700 to-indigo-800 hover:from-green-600 hover:to-cyan-600 text-white text-lg font-bold py-3 rounded-xl transition-transform transform hover:scale-105 active:scale-95 shadow-md shadow-black/50"
          >
            {index + 1}. {word}
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedWord && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative bg-gray-900 border border-purple-600 p-8 rounded-3xl shadow-2xl text-center w-[90%] max-w-sm">
            <h2 className="text-4xl font-extrabold text-purple-400 mb-4">
              {selectedWord}
            </h2>
            <button
              onClick={() => setSelectedWord(null)}
              className="absolute top-3 right-3 bg-purple-700 hover:bg-purple-500 text-white p-2 rounded-full"
            >
              <XIcon size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Grade3;

// This code defines a React component for a Grade 3 word explorer app.
// It fetches a list of words from a JSON file and displays them in a grid format.
// When a word is clicked, it opens a modal displaying the selected word.
// The component also includes navigation links to other grades and an about page.
// The styling is done using Tailwind CSS for a modern and responsive design.
// The component uses React Router for navigation and Lucide icons for the close button.
// The modal and buttons have hover and active effects for better user experience.
// The overall design is focused on simplicity and ease of use for young learners.
// The app is structured to be visually appealing with a gradient background and shadow effects.
// The component is designed to be responsive and works well on different screen sizes.
// The use of hooks like useState and useEffect allows for dynamic data fetching and state management.
// The component is a part of a larger educational platform aimed at helping students improve their vocabulary and reading skills.