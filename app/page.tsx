"use client";

import "./global.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsSplitUpAndLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { createNewTree } from "./journey/prompt";
import { useRouter } from "next/navigation";

const chris = {
  "title": "Kyle's Car Insurance Dilemma",
  "scenario": "Kyle, a responsible car owner, has a comprehensive car insurance plan with a high premium but a low deductible. One day, while driving to work, he accidentally rear-ends another car at a stoplight. The damage to his car and the other driver's car is significant, and both parties need to file an insurance claim.",
  "options": [
    {
      "title": "Option 1: File an Insurance Claim",
      "result": "Kyle decides to file an insurance claim since he has a low deductible. He contacts his insurance company, and they agree to cover the damages. However, since his premium is high, he will need to pay a relatively lower deductible out of pocket. Kyle is relieved that his insurance plan helped him in this situation, and he pays the deductible to get his car repaired."
    },
    {
      "title": "Option 2: Avoid Filing an Insurance Claim",
      "result": "Kyle considers not filing an insurance claim to avoid increasing his future premiums. He checks his finances and realizes that he can cover the repair costs himself without involving the insurance company. By doing this, Kyle avoids paying the deductible and prevents his insurance premiums from going up in the future. While it's a financial strain in the short term, he feels it's the best decision for his long-term financial stability."
    }
  ]
}

const Page: React.FC = () => {
  const router = useRouter();
  const [theme, setTheme] = useState<string>("Default");
  const [insuranceType, setInsuranceType] = useState<string>("Auto");
  const [playerName, setPlayerName] = useState<string>("");
  const [isThemeTooltipVisible, setThemeTooltipVisible] = useState(false);
  const [isInsuranceTooltipVisible, setInsuranceTooltipVisible] = useState(false);

  const handleBeginQuest = async () => {
    const data = await createNewTree({
      name: playerName,
      theme: theme,
      insuranceType: insuranceType,
      insuranceSelection: {
        premium: 100,
        deductible: 100
      }
    });

    localStorage.setItem('data', JSON.stringify(data));

    router.push('/journey');
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
            onChange={(e) => setTheme(e.target.value)}
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
            onChange={(e) => setInsuranceType(e.target.value)}
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
