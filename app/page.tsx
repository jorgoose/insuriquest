"use client";

import "./global.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsSplitUpAndLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { createNewTree } from "./journey/prompt";
import { useRouter } from "next/navigation";
import { InsuranceType, Theme } from "@/types/data";

const Page: React.FC = () => {
  const router = useRouter();
  const [theme, setTheme] = useState<Theme>("modern day");
  const [insuranceType, setInsuranceType] = useState<InsuranceType>("Auto");
  const [playerName, setPlayerName] = useState<string>("");
  const [isThemeTooltipVisible, setThemeTooltipVisible] = useState(false);
  const [isInsuranceTooltipVisible, setInsuranceTooltipVisible] =
    useState(false);

  const handleBeginQuest = async () => {
    const data = await createNewTree({
      name: playerName,
      theme: theme,
      insuranceType: insuranceType,
      insuranceSelection: {
        premium: "High",
        deductible: "Low",
      },
    });

    localStorage.setItem('data', JSON.stringify(data));

    router.push('/journey');
  };

  const [isLoading, setIsLoading] = useState(true); // Added a new state variable for loading

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // simulate the icons have loaded after 1 second
    }, 0);

    return () => clearTimeout(timer); // cleanup timer
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4`">
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon
          icon={faArrowsSplitUpAndLeft}
          className="text-blue-500 mb-12"
          size="4x"
        />
        <h1 className="text-6xl font-bold mb-12 text-center text-gray-800 font-poppins">
          InsuriQuest
        </h1>
      </div>

      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-2xl space-y-6 relative z-10 border-2 border-blue-200">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
          Quest Options 🌍
        </h2>

        <div className="relative group transition-shadow duration-300 rounded-md">
          <label
            className="block mb-2 text-lg font-medium text-gray-600"
            htmlFor="theme"
          >
            Theme 🎨
            <span
              className="ml-2 inline-block relative cursor-help"
              onMouseEnter={() => setThemeTooltipVisible(true)}
              onMouseLeave={() => setThemeTooltipVisible(false)}
            >
              <FontAwesomeIcon icon={faQuestionCircle} />
              {isThemeTooltipVisible && (
                <span className="absolute left-6 -top-1 w-48 text-sm text-gray-700 bg-white border p-2 rounded-md shadow-lg">
                  Select a theme to set the mood of your quest.
                </span>
              )}
            </span>
          </label>
          <select
            id="theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value as Theme)}
            className="w-full hover:shadow-lg px-4 py-2 border rounded-md text-gray-700 bg-opacity-50 group-hover:bg-opacity-70 transition-opacity"
          >
            <option value="modern day">Default</option>
            <option value="fantasy">Fantasy</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="wild west">Wild West</option>
            <option value="medieval">Medieval</option>
            <option value="pirate">Pirate</option>
            <option value="cyberpunk">Cyberpunk</option>
          </select>
        </div>

        <div className="relative group transition-shadow duration-300 rounded-md">
          <label
            className="block mb-2 text-lg font-medium text-gray-600"
            htmlFor="insuranceType"
          >
            Insurance Type 🛡️
            <span
              className="ml-2 inline-block relative cursor-help"
              onMouseEnter={() => setInsuranceTooltipVisible(true)}
              onMouseLeave={() => setInsuranceTooltipVisible(false)}
            >
              <FontAwesomeIcon icon={faQuestionCircle} />
              {isInsuranceTooltipVisible && (
                <span className="absolute left-6 -top-1 w-48 text-sm text-gray-700 bg-white border p-2 rounded-md shadow-lg">
                  Choose the type of insurance you want to learn more about.
                </span>
              )}
            </span>
          </label>
          <select
            id="insuranceType"
            value={insuranceType}
            onChange={(e) => setInsuranceType(e.target.value as InsuranceType)}
            className="w-full hover:shadow-lg px-4 py-2 border rounded-md text-gray-700 bg-opacity-50 group-hover:bg-opacity-70 transition-opacity"
          >
            <option value="Auto">Auto</option>
            <option value="Home">Home</option>
            <option value="Life">Life</option>
          </select>
        </div>

        {/* Input for player name */}
        <div className="relative group transition-shadow duration-300 rounded-md">
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
            className="w-full hover:shadow-lg px-4 py-2 border rounded-md text-gray-700 bg-opacity-50 group-hover:bg-opacity-70 transition-opacity"
          />
        </div>

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform transform duration-150 hover:scale-105"
          onClick={handleBeginQuest}
        >
          Begin Quest
        </button>
      </div>
    </div>
  );
};

export default Page;
