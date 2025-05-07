import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  X,
  BookOpen,
  Home,
  Info,
  Bookmark,
  Star,
  Volume2,
  Copy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Grade2 = () => {
  const navLinks = [
    { path: "/", label: "Home", icon: <Home size={18} /> },
    { path: "/grade-2", label: "Grade 2", icon: <BookOpen size={18} /> },

    { path: "/grade-3", label: "Grade 3", icon: <BookOpen size={18} /> },
    { path: "/grade-5", label: "Grade 5", icon: <BookOpen size={18} /> },
    { path: "/about", label: "About", icon: <Info size={18} /> },
  ];

  const [words, setWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [loadingAnimation, setLoadingAnimation] = useState(true);
  const [filterActive, setFilterActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);

  // Word categories for demonstration
  const wordCategories = {
    "sight words": ["the", "and", "was", "for", "you"],
    "action words": ["run", "jump", "play", "read", "write"],
    animals: ["cat", "dog", "fish", "bird", "frog"],
    colors: ["red", "blue", "green", "yellow", "purple"],
    numbers: ["one", "two", "three", "four", "five"],
  };

  useEffect(() => {
    // Simulate loading data with a short delay for animation
    setTimeout(() => {
      fetch("/grade_word_data_full.json")
        .then((res) => res.json())
        .then((data) => {
          setWords(
            data.grade_2.words || // Fallback data in case the fetch fails
            [
              "cat",
              "dog",
              "run",
              "jump",
              "play",
              "read",
              "write",
              "the",
              "and",
              "was",
              "for",
              "you",
              "red",
              "blue",
              "green",
              "yellow",
              "purple",
              "one",
              "two",
              "three",
              "four",
              "five",
              "happy",
              "sad",
              "big",
              "small",
              "fast",
              "slow",
              "hot",
              "cold",
            ]
          );
          setLoadingAnimation(false);
        })
        .catch((err) => {
          console.error("Failed to load words:", err);
          // Fallback data
          setWords([
            "cat",
            "dog",
            "run",
            "jump",
            "play",
            "read",
            "write",
            "the",
            "and",
            "was",
            "for",
            "you",
            "red",
            "blue",
            "green",
            "yellow",
            "purple",
            "one",
            "two",
            "three",
            "four",
            "five",
            "happy",
            "sad",
            "big",
            "small",
            "fast",
            "slow",
            "hot",
            "cold",
          ]);
          setLoadingAnimation(false);
        });
    }, 800);

    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem("grade2Favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("grade2Favorites", JSON.stringify(favorites));
  }, [favorites]);

  const filteredWords = words.filter((word) =>
    word.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredWords.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalPages = Math.ceil(filteredWords.length / itemsPerPage);

  const toggleFavorite = (word) => {
    if (favorites.includes(word)) {
      setFavorites(favorites.filter((fav) => fav !== word));
    } else {
      setFavorites([...favorites, word]);
    }
  };

  const speakWord = (word) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.rate = 0.9; // Slightly slower for children
      speechSynthesis.speak(utterance);
    }
  };

  const copyWordToClipboard = (word) => {
    navigator.clipboard.writeText(word);
    // You could add a toast notification here
  };

  // Animation for cards appearing
  const getAnimationDelay = (index) => {
    return `${index * 0.05}s`;
  };

  // Get a random category for a word (for demonstration)
  const getRandomCategory = (word) => {
    const allCategories = Object.keys(wordCategories);

    // Check if the word exists in any category
    for (const category of allCategories) {
      if (wordCategories[category].includes(word.toLowerCase())) {
        return category;
      }
    }

    // If not found, assign a random category
    return allCategories[Math.floor(Math.random() * allCategories.length)];
  };

  // Get a random background color for word categories
  const getCategoryColor = (category) => {
    const colors = {
      "sight words": "from-blue-500 to-blue-600",
      "action words": "from-green-500 to-green-600",
      animals: "from-orange-500 to-orange-600",
      colors: "from-purple-500 to-purple-600",
      numbers: "from-red-500 to-red-600",
    };

    return colors[category] || "from-pink-500 to-pink-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white px-4 py-8 flex flex-col items-center">
      {/* Floating stars background animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20 animate-pulse"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Title with animation */}
      <div className="relative mb-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center">
          <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 text-transparent bg-clip-text animate-gradient-x">
            Grade 2 Word Zone
          </span>
        </h1>
        <div className="absolute -top-6 -right-6 transform rotate-12 text-yellow-300 text-2xl">
          ✨
        </div>
        <div className="absolute -bottom-4 -left-4 transform -rotate-12 text-pink-300 text-2xl">
          ✨
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className="flex items-center gap-2 bg-indigo-800 hover:bg-indigo-600 transition-all duration-300 px-4 py-2 rounded-full font-medium shadow-lg shadow-indigo-900/50 transform hover:scale-105"
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}
      </div>

      {/* Search and Filter Section */}
      <div className="w-full max-w-4xl mb-6 bg-indigo-800/50 p-4 rounded-xl backdrop-blur-sm shadow-lg">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search words..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-indigo-700/80 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-indigo-300"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-300 hover:text-white"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <button
            onClick={() => setFilterActive(!filterActive)}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              filterActive
                ? "bg-pink-600 hover:bg-pink-700 text-white"
                : "bg-gray-700 hover:bg-gray-600 text-gray-200"
            }`}
          >
            Filter
          </button>

          <button
            onClick={() => {
              setCurrentPage(1);
              setSearchTerm("");
              setFilterActive(false);
            }}
            className="px-4 py-2 bg-purple-700 hover:bg-purple-600 rounded-full font-medium transition-colors"
          >
            Reset
          </button>
        </div>

        {filterActive && (
          <div className="mt-4 flex flex-wrap gap-2">
            {Object.keys(wordCategories).map((category, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSearchTerm("");
                  // This would normally filter by category, but for demo we'll just show the words in that category
                  const categoryWords = wordCategories[category];
                  if (categoryWords && categoryWords.length > 0) {
                    setSearchTerm(categoryWords[0]); // Just set to first word as example
                  }
                }}
                className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${getCategoryColor(
                  category
                )} capitalize transition-transform hover:scale-105`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Loading Animation */}
      {loadingAnimation ? (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="w-16 h-16 border-4 border-t-pink-500 border-r-indigo-500 border-b-yellow-500 border-l-purple-500 rounded-full animate-spin mb-4"></div>
          <p className="text-lg text-indigo-200 animate-pulse">
            Loading word magic...
          </p>
        </div>
      ) : (
        <>
          {/* Word Grid */}
          <div className="max-w-5xl w-full bg-indigo-900/60 backdrop-blur-md p-6 rounded-2xl shadow-lg shadow-purple-900/30 border border-indigo-700/50 mb-8">
            {currentItems.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {currentItems.map((word, i) => {
                  const category = getRandomCategory(word);
                  const categoryColor = getCategoryColor(category);
                  const isFavorite = favorites.includes(word);

                  return (
                    <div
                      key={i}
                      className="relative overflow-hidden group"
                      style={{
                        animation: "fadeIn 0.5s ease forwards",
                        opacity: 0,
                        animationDelay: getAnimationDelay(i),
                      }}
                    >
                      <button
                        onClick={() => setSelectedWord(word)}
                        className={`w-full bg-gradient-to-br ${categoryColor} hover:saturate-150 text-white text-xl md:text-2xl font-bold py-4 px-2 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md shadow-black/50 flex flex-col items-center justify-center min-h-24`}
                      >
                        <span className="text-xs uppercase tracking-wider text-white/80 mb-1">
                          {category}
                        </span>
                        <span className="truncate max-w-full px-2">{word}</span>
                      </button>

                      {/* Quick action buttons that appear on hover */}
                      <div className="absolute -bottom-10 left-0 right-0 bg-black/70 backdrop-blur-sm flex justify-around p-2 transition-all duration-300 group-hover:bottom-0 rounded-b-xl">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            speakWord(word);
                          }}
                          className="p-1.5 hover:bg-indigo-600 rounded-full transition-colors"
                          aria-label="Speak word"
                        >
                          <Volume2 size={16} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(word);
                          }}
                          className={`p-1.5 hover:bg-pink-600 rounded-full transition-colors ${
                            isFavorite ? "text-yellow-400" : "text-white"
                          }`}
                          aria-label={
                            isFavorite
                              ? "Remove from favorites"
                              : "Add to favorites"
                          }
                        >
                          <Star
                            size={16}
                            fill={isFavorite ? "currentColor" : "none"}
                          />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            copyWordToClipboard(word);
                          }}
                          className="p-1.5 hover:bg-green-600 rounded-full transition-colors"
                          aria-label="Copy word"
                        >
                          <Copy size={16} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-indigo-200 mb-2">
                  No words found
                </h3>
                <p className="text-indigo-300">
                  Try a different search term or reset the filters
                </p>
              </div>
            )}

            {/* Favorites Section when there are favorites */}
            {favorites.length > 0 && (
              <div className="mt-8 pt-6 border-t border-indigo-700/50">
                <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center">
                  <Bookmark className="mr-2" size={20} />
                  My Favorite Words
                </h3>
                <div className="flex flex-wrap gap-2">
                  {favorites.map((word, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedWord(word)}
                      className="bg-yellow-600/70 hover:bg-yellow-500 px-3 py-1 rounded-full text-sm font-medium transition-transform hover:scale-105 flex items-center"
                    >
                      <span>{word}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(word);
                        }}
                        className="ml-2 p-0.5 hover:bg-yellow-700 rounded-full"
                      >
                        <X size={12} />
                      </button>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Pagination Controls */}
          {currentItems.length > 0 && totalPages > 1 && (
            <div className="mb-8 bg-indigo-800/50 backdrop-blur-sm p-4 rounded-xl shadow-lg flex flex-wrap gap-2 justify-center items-center">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center px-4 py-2 rounded-lg font-semibold shadow-md transition-all ${
                  currentPage === 1
                    ? "bg-gray-700/50 text-gray-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white"
                }`}
              >
                <ChevronLeft size={18} className="mr-1" />
                <span>Prev</span>
              </button>

              <div className="flex items-center">
                <span className="px-4 py-2 text-indigo-200">
                  Page {currentPage} of {totalPages}
                </span>
              </div>

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center px-4 py-2 rounded-lg font-semibold shadow-md transition-all ${
                  currentPage === totalPages
                    ? "bg-gray-700/50 text-gray-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white"
                }`}
              >
                <span>Next</span>
                <ChevronRight size={18} className="ml-1" />
              </button>
            </div>
          )}
        </>
      )}

      {/* Enhanced Modal */}
      {selectedWord && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
          onClick={() => setSelectedWord(null)}
        >
          <div
            className="relative bg-gradient-to-br from-indigo-900 to-purple-900 border-2 border-pink-500/50 p-8 rounded-3xl shadow-2xl text-center w-[90%] max-w-md transform transition-all animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Word display with animation */}
            <div className="mb-6">
              <h2 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-yellow-300 to-purple-400 text-transparent bg-clip-text animate-pulse">
                {selectedWord}
              </h2>
              <p className="text-indigo-300 mt-2 capitalize">
                {getRandomCategory(selectedWord)}
              </p>
            </div>

            {/* Interactive buttons */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => speakWord(selectedWord)}
                className="flex items-center justify-center gap-2 bg-indigo-700 hover:bg-indigo-600 py-3 px-4 rounded-xl transition-all hover:scale-105"
              >
                <Volume2 size={20} />
                <span>Hear Word</span>
              </button>

              <button
                onClick={() => toggleFavorite(selectedWord)}
                className={`flex items-center justify-center gap-2 ${
                  favorites.includes(selectedWord)
                    ? "bg-yellow-600 hover:bg-yellow-500"
                    : "bg-gray-700 hover:bg-gray-600"
                } py-3 px-4 rounded-xl transition-all hover:scale-105`}
              >
                <Star
                  size={20}
                  fill={
                    favorites.includes(selectedWord) ? "currentColor" : "none"
                  }
                />
                <span>
                  {favorites.includes(selectedWord) ? "Favorited" : "Favorite"}
                </span>
              </button>
            </div>

            {/* Example sentence */}
            <div className="bg-black/30 p-4 rounded-xl mb-6">
              <p className="text-lg text-indigo-100 italic">
                "I can{" "}
                {selectedWord === "the" ||
                selectedWord === "and" ||
                selectedWord === "was" ||
                selectedWord === "for" ||
                selectedWord === "you"
                  ? `use the word '${selectedWord}' in a sentence.`
                  : selectedWord.toLowerCase().endsWith("e")
                  ? `${selectedWord} with my friends.`
                  : `${selectedWord} very well!`}
                "
              </p>
            </div>

            {/* Close button with improved styling */}
            <button
              onClick={() => setSelectedWord(null)}
              className="absolute top-3 right-3 bg-pink-700 hover:bg-pink-500 text-white p-2 rounded-full transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-auto pt-6 text-center text-indigo-300 text-sm">
        <p>© 2025 Word Zone Learning | Made with ❤️ for young readers</p>
      </footer>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes animate-gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: animate-gradient-x 4s ease infinite;
        }

        .animate-fade-up {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Grade2;
