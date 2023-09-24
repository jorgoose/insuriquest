"use client";

import "../../../global.css";

import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsSplitUpAndLeft } from "@fortawesome/free-solid-svg-icons";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";

const LiabilityInfo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true); // State variable for loading

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
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="absolute top-4 left-4 flex items-center space-x-2">
        <FontAwesomeIcon
          icon={faArrowsSplitUpAndLeft}
          className="text-blue-500"
          size="2x"
        />
        <h1 className="text-2xl font-bold text-gray-800 font-poppins">
          InsuriQuest
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon
          icon={faBalanceScale}
          className="text-blue-500 mb-12"
          size="4x"
        />
        <h1 className="text-6xl font-bold mb-12 text-center text-gray-800 font-poppins">
          Liability 101
        </h1>
      </div>

      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-2xl space-y-6 relative z-10 border-2 border-blue-200">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
          Understanding Liability 🏛️
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed">
          In insurance, liability refers to the responsibility of an individual
          or entity for actions or decisions that result in harm or damage to
          another party. Liability insurance provides coverage against claims
          resulting from injuries and damage to people or property.
        </p>

        <div className="relative group transition-shadow duration-300 rounded-md">
          <label
            className="block mb-2 text-lg font-medium text-gray-600"
            htmlFor="example"
          >
            Example 📖
          </label>
          <p className="text-gray-700 leading-relaxed bg-opacity-50 px-4 py-2 border rounded-md">
            If you accidentally cause a car accident and are found at fault,
            liability insurance will cover the costs of property damage and
            medical expenses for the other party up to your coverage limit.
          </p>
        </div>

        <div className="relative group transition-shadow duration-300 rounded-md">
          <label
            className="block mb-2 text-lg font-medium text-gray-600"
            htmlFor="why"
          >
            Why Is Liability Insurance Important? 🤔
          </label>
          <p className="text-gray-700 leading-relaxed bg-opacity-50 px-4 py-2 border rounded-md">
            Liability insurance protects you from the financial burden of being
            held legally responsible for damages or injuries to another party.
            It ensures that you won't have to pay out-of-pocket for costs that
            can be substantial and financially devastating.
          </p>
        </div>

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform transform duration-150 hover:scale-105"
          onClick={() => {
            console.log("Returning to Quest...");
          }}
        >
          Return to Quest
        </button>
      </div>
    </div>
  );
};

export default LiabilityInfo;
