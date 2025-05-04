import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { XIcon } from "lucide-react";

const Grade5 = () => {
  const navLinks = [
    { path: "/", label: "🏠 Home" },
    { path: "/grade-2", label: "📘 Grade 2" },
    { path: "/grade-3", label: "📗 Grade 3" },
    { path: "/grade-5", label: "📙 Grade 5" },
    { path: "/about", label: "ℹ️ About" },
  ];

  const [sentences, setSentences] = useState([]);
  const [selectedSentence, setSelectedSentence] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sentences.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sentences.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetch("/grade_word_data_full.json")
      .then((res) => res.json())
      .then((data) => setSentences(data.grade_5.sentences));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-gray-950 text-white px-4 py-6 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-500 via-fuchsia-500 to-purple-600 text-transparent bg-clip-text mb-6">
        Grade 5 Sentences ✍️
      </h1>

      {/* Navigation */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="bg-slate-800 hover:bg-fuchsia-700 transition-colors duration-300 px-4 py-2 rounded-lg font-semibold shadow-sm shadow-fuchsia-500"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Sentences List */}
      <div className="flex flex-col gap-4 w-full max-w-5xl bg-slate-900 p-6 rounded-xl shadow-md shadow-purple-800">
        {currentItems.map((sentence, index) => (
          <div
            key={index}
            onClick={() => setSelectedSentence(sentence)}
            className="cursor-pointer bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-600 hover:from-indigo-700 hover:to-purple-800 transition-all text-white text-xl font-medium p-5 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.01] ease-in-out"
          >
            {indexOfFirstItem + index + 1}. {sentence}
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex flex-wrap gap-3 justify-center items-center">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            currentPage === 1
              ? "bg-slate-700 text-gray-400 cursor-not-allowed"
              : "bg-fuchsia-600 hover:bg-fuchsia-700 text-white"
          }`}
        >
          ◀ Back
        </button>

        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num}
            onClick={() => paginate(num + 1)}
            className={`px-3 py-2 rounded-full font-semibold transition-all ${
              currentPage === num + 1
                ? "bg-amber-400 text-black"
                : "bg-slate-800 text-white hover:bg-purple-600"
            }`}
          >
            {num + 1}
          </button>
        ))}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            currentPage === totalPages
              ? "bg-slate-700 text-gray-400 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700 text-white"
          }`}
        >
          Next ▶
        </button>
      </div>

      {/* Modal */}
      {selectedSentence && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative bg-slate-950 border border-purple-500 text-white p-8 rounded-3xl shadow-xl w-[90%] max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-300 mb-4 text-center">
              ✨ Sentence ✨
            </h2>
            <p className="text-xl md:text-2xl font-medium text-center">{selectedSentence}</p>

            <button
              onClick={() => setSelectedSentence(null)}
              className="absolute top-4 right-4 bg-purple-700 hover:bg-purple-500 text-white p-2 rounded-full"
            >
              <XIcon size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Grade5;
