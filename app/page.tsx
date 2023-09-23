// pages/page.tsx

"use client";

// Import global.css
import "./global.css";

// pages/page.tsx
import React, { useState } from "react";

const Page: React.FC = () => {
  const [theme, setTheme] = useState<string>("Default");
  const [insuranceType, setInsuranceType] = useState<string>("Auto");
  const [playerName, setPlayerName] = useState<string>("");

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex flex-col justify-center items-center p-4 font-poppins">
      <h1 className="text-6xl font-bold mb-12 text-center text-gray-800">
        InsuriQuest
      </h1>
      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-2xl space-y-6 relative z-10 border-2 border-blue-200">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
          Quest Options 🌍
        </h2>

        <div className="relative group hover:shadow-lg transition-shadow duration-300 rounded-md">
          <label
            className="block mb-2 text-lg font-medium text-gray-600"
            htmlFor="theme"
          >
            Theme 🎨
          </label>
          <select
            id="theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-gray-700 bg-opacity-50 group-hover:bg-opacity-70 transition-opacity"
          >
            <option value="Default">Default</option>
            <option value="Dark">Dark</option>
            <option value="Light">Light</option>
          </select>
        </div>

        <div className="relative group hover:shadow-lg transition-shadow duration-300 rounded-md">
          <label
            className="block mb-2 text-lg font-medium text-gray-600"
            htmlFor="insuranceType"
          >
            Insurance Type 🛡️
          </label>
          <select
            id="insuranceType"
            value={insuranceType}
            onChange={(e) => setInsuranceType(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-gray-700 bg-opacity-50 group-hover:bg-opacity-70 transition-opacity"
          >
            <option value="Auto">Auto</option>
            <option value="Home">Home</option>
            <option value="Life">Life</option>
          </select>
        </div>

        {/* Input for player name */}
        <div className="relative group hover:shadow-lg transition-shadow duration-300 rounded-md">
          <label
            className="block mb-2 text-lg font-medium text-gray-600"
            htmlFor="playerName"
          >
            Player Name 🎮
          </label>
          <input
            id="playerName"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-gray-700 bg-opacity-50 group-hover:bg-opacity-70 transition-opacity"
          />
        </div>

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform transform duration-150 hover:scale-105"
          onClick={() => {
            console.log("Beginning Quest...");
          }}
        >
          Begin Quest
        </button>
      </div>
    </div>
  );
};

export default Page;
