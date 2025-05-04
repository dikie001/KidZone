import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-800 via-purple-600 to-pink-700 p-8 flex flex-col items-center justify-center text-center">
      <div className="bg-black/60 backdrop-blur-lg shadow-2xl rounded-3xl p-10 max-w-3xl">
        <h1 className="text-4xl font-extrabold text-pink-300 mb-4">About This App 📖✨</h1>
        <p className="text-lg text-white leading-relaxed mb-6">
          <span className="font-semibold text-white">Welcome to the Learning Portal</span> — your interactive companion for Grade 2, 3, and 5 students!
          This app is designed to help young learners explore new words, practice reading, and grow their vocabulary with fun, simplicity, and style.
        </p>

        <p className="text-white leading-relaxed mb-6">
          We believe learning should feel like an adventure — not a chore. From engaging word lists to powerful sentences crafted for Grade 5 brilliance,
          everything here is purpose-built for growth 📈.
        </p>

        <p className="text-white leading-relaxed mb-6">
          Whether you're a student, a parent, or a teacher, this platform brings value through:
        </p>

        <ul className="text-left text-white list-disc list-inside mb-6">
          <li>🧠 Carefully curated word lists for Grades 2, 3 & 5</li>
          <li>✍🏽 Grade 5-level complex sentences for reading mastery</li>
          <li>🎯 Interactive UI that encourages exploration and discovery</li>
          <li>🔄 Easily navigable layout built with React + Tailwind</li>
        </ul>

        <p className="text-white italic">“Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.” – Matilda Awino</p>
        
        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <Link
            to="/"
            className="bg-white/10 hover:bg-white/20 py-2 px-5 rounded-lg text-white font-semibold shadow-md backdrop-blur-md transition"
          >
            🏠 Home
          </Link>
          <Link
            to="/grade-2"
            className="bg-white/10 hover:bg-white/20 py-2 px-5 rounded-lg text-white font-semibold shadow-md backdrop-blur-md transition"
          >
            🧒 Grade 2
          </Link>
          <Link
            to="/grade-3"
            className="bg-white/10 hover:bg-white/20 py-2 px-5 rounded-lg text-white font-semibold shadow-md backdrop-blur-md transition"
          >
            📚 Grade 3
          </Link>
          <Link
            to="/grade-5"
            className="bg-white/10 hover:bg-white/20 py-2 px-5 rounded-lg text-white font-semibold shadow-md backdrop-blur-md transition"
          >
            🧠 Grade 5
          </Link>
          <Link
            to="/about"
            className="bg-white/10 hover:bg-white/20 py-2 px-5 rounded-lg text-white font-semibold shadow-md backdrop-blur-md transition"
          >
            ℹ️ About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
