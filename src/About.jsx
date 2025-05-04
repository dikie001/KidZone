import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-200 to-yellow-100 p-8 flex flex-col items-center justify-center text-center">
      <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-10 max-w-3xl">
        <h1 className="text-4xl font-extrabold text-orange-600 mb-4">About This App 📖✨</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <span className="font-semibold text-black">Welcome to the Learning Portal</span> — your interactive companion for Grade 2, 3, and 5 students!
          This app is designed to help young learners explore new words, practice reading, and grow their vocabulary with fun, simplicity, and style.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          We believe learning should feel like an adventure — not a chore. From engaging word lists to powerful sentences crafted for Grade 5 brilliance,
          everything here is purpose-built for growth 📈.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Whether you're a student, a parent, or a teacher, this platform brings value through:
        </p>

        <ul className="text-left text-gray-700 list-disc list-inside mb-6">
          <li>🧠 Carefully curated word lists for Grades 2, 3 & 5</li>
          <li>✍🏽 Grade 5-level complex sentences for reading mastery</li>
          <li>🎯 Interactive UI that encourages exploration and discovery</li>
          <li>🔄 Easily navigable layout built with React + Tailwind</li>
        </ul>

        <p className="text-gray-700 italic">“Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.” – Abigail Adams</p>
      </div>
    </div>
  );
};

export default About;
