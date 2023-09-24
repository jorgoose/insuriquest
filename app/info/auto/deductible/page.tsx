"use client";

import "../../../global.css";

import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsSplitUpAndLeft } from "@fortawesome/free-solid-svg-icons";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

const DeductibleInfo: React.FC = () => {
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
          icon={faShieldAlt}
          className="text-blue-500 mb-12"
          size="4x"
        />
        <h1 className="text-6xl font-bold mb-12 text-center text-gray-800 font-poppins">
          Deductible 101
        </h1>
      </div>

      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-2xl space-y-6 relative z-10 border-2 border-blue-200">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
          Understanding Deductibles 🛡️
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed">
          In insurance, a deductible is the amount paid out of pocket by the
          policyholder before an insurance provider will pay any expenses. It's
          a way to share the risk between the insurer and the insured.
        </p>

        <div className="relative group transition-shadow duration-300 rounded-md">
          <label
            className="block mb-2 text-lg font-medium text-gray-600"
            htmlFor="example"
          >
            Example 📖
          </label>
          <p className="text-gray-700 leading-relaxed bg-opacity-50 px-4 py-2 border rounded-md">
            If you have a deductible of $500 and you incur $3,000 in medical
            expenses due to an accident, you will pay the first $500 and the
            insurance company will pay the remaining $2,500.
          </p>
        </div>

        <div className="relative group transition-shadow duration-300 rounded-md">
          <label
            className="block mb-2 text-lg font-medium text-gray-600"
            htmlFor="why"
          >
            Why Do Deductibles Exist? 🤔
          </label>
          <p className="text-gray-700 leading-relaxed bg-opacity-50 px-4 py-2 border rounded-md">
            Deductibles exist to prevent large volumes of minor claims with
            lower values from overwhelming insurers. They also serve as a way
            for the insurance company to avoid the administrative costs of
            processing small claims.
          </p>
        </div>

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform transform duration-150 hover:scale-105"
          onClick={() => {
            console.log("Learning more...");
          }}
        >
          Return to Quest
        </button>
      </div>
    </div>
  );
};

export default DeductibleInfo;
