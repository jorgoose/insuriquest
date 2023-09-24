"use client";

import "../../../global.css";

import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsSplitUpAndLeft } from "@fortawesome/free-solid-svg-icons";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";

const ComprehensiveInfo: React.FC = () => {
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
          icon={faCarSide}
          className="text-blue-500 mb-12"
          size="4x"
        />
        <h1 className="text-6xl font-bold mb-12 text-center text-gray-800 font-poppins">
          Comprehensive 101
        </h1>
      </div>

      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-2xl space-y-6 relative z-10 border-2 border-blue-200">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
          Understanding Comprehensive Coverage 🚗
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed">
          Comprehensive auto insurance covers damage to your car caused by
          events that are out of your control. It covers things like theft,
          vandalism, natural disasters, falling objects, fire, and collisions
          with animals.
        </p>

        <div className="relative group transition-shadow duration-300 rounded-md">
          <label
            className="block mb-2 text-lg font-medium text-gray-600"
            htmlFor="example"
          >
            Example 📖
          </label>
          <p className="text-gray-700 leading-relaxed bg-opacity-50 px-4 py-2 border rounded-md">
            If a tree branch falls on your car during a storm and causes damage,
            comprehensive coverage would help pay for the repairs, minus any
            deductible.
          </p>
        </div>

        <div className="relative group transition-shadow duration-300 rounded-md">
          <label
            className="block mb-2 text-lg font-medium text-gray-600"
            htmlFor="why"
          >
            Why Is Comprehensive Coverage Important? 🤔
          </label>
          <p className="text-gray-700 leading-relaxed bg-opacity-50 px-4 py-2 border rounded-md">
            Comprehensive coverage provides financial protection against
            unpredictable events that can damage your car. It's especially
            valuable if you live in areas prone to natural disasters or if your
            vehicle is parked in places where theft or vandalism is common.
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

export default ComprehensiveInfo;
