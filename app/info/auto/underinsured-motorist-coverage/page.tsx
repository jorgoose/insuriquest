"use client";

import "../../../global.css";

import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsSplitUpAndLeft } from "@fortawesome/free-solid-svg-icons";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons"; // Chose an icon that might represent the balancing act of coverage

const UnderinsuredMotoristCoverageInfo: React.FC = () => {
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
          icon={faBalanceScale}
          className="text-blue-500 mb-12"
          size="4x"
        />
        <h1 className="text-6xl font-bold mb-12 text-center text-gray-800 font-poppins">
          Underinsured Motorist Coverage 101
        </h1>
      </div>

      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-2xl space-y-6 relative z-10 border-2 border-blue-200">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
          Understanding Underinsured Motorist Coverage 🚗
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed">
          Underinsured Motorist Coverage is designed to protect you if you're
          involved in an accident with a driver whose insurance coverage is
          insufficient to cover the damages or medical expenses. This coverage
          can bridge the gap between someone else's policy limits and the actual
          cost of your injuries or property damage.
        </p>

        <div className="relative group transition-shadow duration-300 rounded-md">
          <label
            className="block mb-2 text-lg font-medium text-gray-600"
            htmlFor="example"
          >
            Example 📖
          </label>
          <p className="text-gray-700 leading-relaxed bg-opacity-50 px-4 py-2 border rounded-md">
            Imagine you have $100,000 in medical bills from an accident, but the
            other driver's insurance can only cover $50,000. If you have
            Underinsured Motorist Coverage, it could help cover the remaining
            $50,000, depending on your policy limits.
          </p>
        </div>

        <div className="relative group transition-shadow duration-300 rounded-md">
          <label
            className="block mb-2 text-lg font-medium text-gray-600"
            htmlFor="why"
          >
            Why Is It Important? 🤔
          </label>
          <p className="text-gray-700 leading-relaxed bg-opacity-50 px-4 py-2 border rounded-md">
            This coverage offers you an added layer of protection against
            drivers who may not have enough insurance. It ensures that you don't
            have to pay out-of-pocket for expenses that exceed another driver's
            policy limits.
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

export default UnderinsuredMotoristCoverageInfo;
