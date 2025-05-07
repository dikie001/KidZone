import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, BookOpen, Star, Home, Info, GraduationCap, ArrowLeft, ArrowRight, CircleCheck } from "lucide-react";

const Grade5 = () => {
  const navLinks = [
    { path: "/", label: "Home", icon: <Home size={18} /> },
    { path: "/grade-2", label: "Grade 2", icon: <BookOpen size={18} /> },
    { path: "/grade-3", label: "Grade 3", icon: <BookOpen size={18} /> },
    { path: "/grade-5", label: "Grade 5", icon: <BookOpen size={18} className="text-amber-400" /> },
    { path: "/about", label: "About", icon: <Info size={18} /> },
  ];

  const [sentences, setSentences] = useState([]);
  const [selectedSentence, setSelectedSentence] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [modalAnimation, setModalAnimation] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sentences.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sentences.length / itemsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openModal = (sentence, index) => {
    setSelectedSentence(sentence);
    setActiveIndex(index);
    setTimeout(() => setModalAnimation(true), 50);
  };

  const closeModal = () => {
    setModalAnimation(false);
    setTimeout(() => {
      setSelectedSentence(null);
      setActiveIndex(null);
    }, 300);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("/grade_word_data_full.json")
      .then((res) => res.json())
      .then((data) => {
        setSentences(data.grade_5.sentences);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error loading sentences:", error);
        setIsLoading(false);
        // Simulate data for preview purposes
        setSentences([
          "The magnificent landscape stretched endlessly toward the horizon.",
          "Scientists discovered a previously unknown species in the rainforest.",
          "The orchestra performed a beautiful symphony at the concert hall.",
          "Athletes from around the world participated in the championship.",
          "The ancient civilization left remarkable artifacts for archaeologists to study.",
          "The astronomer observed celestial bodies through a powerful telescope.",
          "The community organized a fundraiser for the local children's hospital.",
          "Students collaborated on an innovative project for the science fair.",
          "The author's latest novel received exceptional reviews from critics.",
          "The documentary highlighted environmental challenges facing our planet.",
          "Technological advancements have transformed how we communicate globally.",
          "The historical museum exhibited artifacts from different time periods."
        ]);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-950 to-gray-950 text-white">
      {/* Starry background effect */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white opacity-70"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animation: `twinkle ${Math.random() * 5 + 3}s infinite ease-in-out`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 py-8 flex flex-col items-center max-w-7xl mx-auto">
        {/* Header with glowing effect */}
        <div className="text-center mb-8">
          <div className="inline-block relative">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-amber-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text mb-2 animate-pulse">
              Grade 5 Sentences
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-fuchsia-500 to-indigo-500 rounded-lg opacity-30 blur-lg -z-10 animate-pulse"></div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-2">
            <GraduationCap className="text-amber-400" size={24} />
            <p className="text-lg text-gray-300">Advanced vocabulary and sentence structure</p>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="w-full max-w-4xl bg-gray-900/80 backdrop-blur-md p-3 rounded-xl mb-8 shadow-lg border border-purple-500/30">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  link.path === "/grade-5"
                    ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md shadow-purple-500/50 scale-105"
                    : "bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white hover:scale-105"
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mb-4"></div>
            <p className="text-lg text-purple-200">Loading sentences...</p>
          </div>
        ) : (
          <>
            {/* Sentences Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl">
              {currentItems.map((sentence, index) => (
                <div
                  key={index}
                  onClick={() => openModal(sentence, indexOfFirstItem + index)}
                  className="cursor-pointer relative group transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-fuchsia-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="bg-gray-800/90 backdrop-blur-sm border border-purple-500/30 p-5 rounded-xl h-full">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-purple-600 rounded-full flex-shrink-0 text-white font-bold">
                        {indexOfFirstItem + index + 1}
                      </div>
                      <p className="text-lg md:text-xl font-medium text-gray-100 group-hover:text-white transition-colors">
                        {sentence}
                      </p>
                    </div>
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-purple-600 text-white p-1 rounded-full">
                        <Star size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="mt-10 flex flex-wrap gap-2 justify-center items-center">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all ${
                  currentPage === 1
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-md hover:shadow-indigo-500/30"
                }`}
              >
                <ArrowLeft size={16} />
                <span>Previous</span>
              </button>

              <div className="flex gap-1">
                {currentPage > 3 && totalPages > 5 && (
                  <>
                    <button
                      onClick={() => paginate(1)}
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
                    >
                      1
                    </button>
                    {currentPage > 4 && (
                      <span className="w-9 h-9 flex items-center justify-center text-gray-400">...</span>
                    )}
                  </>
                )}

                {[...Array(totalPages).keys()].map((num) => {
                  const pageNum = num + 1;
                  // Show pagination numbers around current page for better UX
                  if (
                    pageNum === 1 || 
                    pageNum === totalPages || 
                    (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={num}
                        onClick={() => paginate(pageNum)}
                        className={`w-9 h-9 flex items-center justify-center rounded-full font-medium transition-all ${
                          currentPage === pageNum
                            ? "bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 shadow-md shadow-amber-400/30"
                            : "bg-gray-800 hover:bg-gray-700 text-white"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  }
                  return null;
                })}

                {currentPage < totalPages - 2 && totalPages > 5 && (
                  <>
                    {currentPage < totalPages - 3 && (
                      <span className="w-9 h-9 flex items-center justify-center text-gray-400">...</span>
                    )}
                    <button
                      onClick={() => paginate(totalPages)}
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
                    >
                      {totalPages}
                    </button>
                  </>
                )}
              </div>

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all ${
                  currentPage === totalPages
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                    : "bg-fuchsia-600 hover:bg-fuchsia-700 text-white hover:shadow-md hover:shadow-fuchsia-500/30"
                }`}
              >
                <span>Next</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-400">
          <p>© 2025 Interactive Learning Platform</p>
          <p className="mt-1">Enhancing vocabulary through engaging content</p>
        </div>
      </div>

      {/* Enhanced Modal with Animation */}
      {selectedSentence && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
          style={{ opacity: modalAnimation ? 1 : 0 }}
          onClick={closeModal}
        >
          <div 
            className="relative bg-gradient-to-b from-gray-900 to-purple-950 border border-purple-500/50 text-white p-8 rounded-2xl shadow-xl w-[90%] max-w-2xl transition-all duration-300"
            style={{ 
              transform: modalAnimation ? 'scale(1)' : 'scale(0.9)',
              opacity: modalAnimation ? 1 : 0
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 bg-purple-500/5 rounded-2xl"></div>
            
            {/* Modal Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-purple-600 rounded-full text-white font-bold mr-3">
                  {activeIndex !== null ? activeIndex + 1 : ""}
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 via-fuchsia-400 to-indigo-400 text-transparent bg-clip-text">
                  Grade 5 Sentence
                </h2>
              </div>
              
              <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 mb-4">
                <p className="text-2xl font-medium text-center leading-relaxed">{selectedSentence}</p>
              </div>
              
              {/* Learning Tools */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <button className="flex items-center justify-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-medium transition-colors">
                  <BookOpen size={18} />
                  <span>Practice Writing</span>
                </button>
                <button className="flex items-center justify-center gap-2 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 rounded-xl font-medium transition-colors">
                  <CircleCheck size={18} />
                  <span>Mark as Learned</span>
                </button>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-3 -right-3 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full shadow-lg border border-purple-500/50 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
};

export default Grade5;