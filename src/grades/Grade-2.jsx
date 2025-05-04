import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { XIcon } from "lucide-react";

const Grade2 = () => {
  const navLinks = [
    { path: "/", label: "🏠 Home" },
    { path: "/grade-3", label: "📘 Grade 3" },
    { path: "/grade-5", label: "📕 Grade 5" },
    { path: "/about", label: "ℹ️ About" },
  ];

  const [words, setWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = words.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetch("/grade_word_data_full.json")
      .then((res) => res.json())
      .then((data) => setWords(data.grade_2.words));
  }, []);

  const totalPages = Math.ceil(words.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 py-6 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-yellow-400 to-red-500 text-transparent bg-clip-text mb-6">
        Grade 2 Word Zone
      </h1>

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className="bg-gray-700 hover:bg-pink-700 transition-colors duration-300 px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/40"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Word Grid */}
      <div className="max-w-6xl w-full bg-black/40 p-6 rounded-xl shadow-inner shadow-yellow-700">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 w-full">
          {currentItems.map((w, i) => (
            <button
              key={i}
              onClick={() => setSelectedWord(w)}
              className="bg-gradient-to-br from-yellow-600 to-pink-700 hover:from-purple-600 hover:to-indigo-600 text-white text-xl md:text-2xl font-bold py-3 rounded-xl transition-transform transform hover:scale-105 active:scale-95 shadow-md shadow-black/50"
            >
              {indexOfFirstItem + i + 1}. {w}
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
                : "bg-pink-600 hover:bg-pink-700 text-white"
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
                  ? "bg-yellow-500 text-black"
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
                : "bg-green-600 hover:bg-green-700 text-white"
            }`}
          >
            Next ▶
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedWord && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative bg-gray-900 border border-pink-500 p-8 rounded-3xl shadow-2xl text-center w-[90%] max-w-sm">
            <h2 className="text-4xl font-extrabold text-pink-400 mb-4">
              {selectedWord}
            </h2>
            <button
              onClick={() => setSelectedWord(null)}
              className="absolute top-3 right-3 bg-pink-700 hover:bg-pink-500 text-white p-2 rounded-full"
            >
              <XIcon size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Grade2;
