"use client";

import "../../../global.css";

import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsSplitUpAndLeft } from "@fortawesome/free-solid-svg-icons";
import { faCarAlt } from "@fortawesome/free-solid-svg-icons"; // Chose an icon that represents a car, indicating the focus on auto

const TotalLossInfo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
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
          icon={faCarAlt}
          className="text-blue-500 mb-12"
          size="4x"
        />
        <h1 className="text-6xl font-bold mb-12 text-center text-gray-800 font-poppins">
          Total Loss 101
        </h1>
      </div>

      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-2xl space-y-6 relative z-10 border-2 border-blue-200">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
          What Is a Total Loss in Auto Insurance? 🚗
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed">
          In the context of auto insurance, a "total loss" occurs when the cost
          of repairing a damaged vehicle exceeds its actual cash value (ACV) or
          when the vehicle is irreparable. This is commonly known as "totaled."
        </p>

        <div className="relative group transition-shadow duration-300 rounded-md">
          <label
            className="block mb-2 text-lg font-medium text-gray-600"
            htmlFor="example"
          >
            Example 📖
          </label>
          <p className="text-gray-700 leading-relaxed bg-opacity-50 px-4 py-2 border rounded-md">
            If you're involved in a severe accident and the estimated repair
            cost for your car is $20,000, but the car's actual cash value is
            only $15,000, your insurer may declare it a total loss.
          </p>
        </div>

        <div className="relative group transition-shadow duration-300 rounded-md">
          <label
            className="block mb-2 text-lg font-medium text-gray-600"
            htmlFor="why"
          >
            Why Recognizing a Total Loss Matters? 🤔
          </label>
          <p className="text-gray-700 leading-relaxed bg-opacity-50 px-4 py-2 border rounded-md">
            Understanding the concept of a total loss helps you anticipate what
            might happen after a severe accident. It can impact your future
            insurance rates, the payout you receive, and your decision to
            replace or repair a vehicle.
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

export default TotalLossInfo;
