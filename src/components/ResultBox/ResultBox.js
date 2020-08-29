import React from "react";
const ResultBox = ({ textResult }) => {
  return (
    <div className="mt-5 max-w-xs h-56 text-left rounded-lg px-3 py-2 overflow-y-scroll border-indigo-400 border-2 sm:mt-0 sm:ml-8 sm:h-64 sm:w-1/2 sm:max-w-none lg:self-center">
      {textResult ? (
        <p className="text-base text-indigo-600">{textResult}</p>
      ) : (
        <p className="pt-4 text-sm text-indigo-500 text-center">
          Your text will appear here, hopefully.
        </p>
      )}
    </div>
  );
};

export default ResultBox;
