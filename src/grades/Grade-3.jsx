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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = words.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(words.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
      <div className="w-full max-w-6xl bg-black/40 p-6 rounded-xl shadow-inner shadow-purple-900">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
          {currentItems.map((word, index) => (
            <button
              key={index}
              onClick={() => setSelectedWord(word)}
              className="bg-gradient-to-tr from-purple-700 to-indigo-800 hover:from-green-600 hover:to-cyan-600 text-white text-lg font-bold py-3 rounded-xl transition-transform transform hover:scale-105 active:scale-95 shadow-md shadow-black/50"
            >
              {indexOfFirstItem + index + 1}. {word}
            </button>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center items-center">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg font-semibold shadow-md transition-all ${
              currentPage === 1
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700 text-white"
            }`}
          >
            ◀ Back
          </button>

          {[...Array(totalPages).keys()].map((num) => (
            <button
              key={num}
              onClick={() => paginate(num + 1)}
              className={`px-3 py-2 rounded-full font-semibold transition-colors ${
                currentPage === num + 1
                  ? "bg-blue-400 text-black"
                  : "bg-gray-700 text-white hover:bg-purple-600"
              }`}
            >
              {num + 1}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg font-semibold shadow-md transition-all ${
              currentPage === totalPages
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            Next ▶
          </button>
        </div>
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
