import React from "react";
const ResultBox = ({ textResult }) => {
  return (
    <div className="mt-5 max-w-xs w-4/5 h-48 bg-indigo-100 rounded-lg px-3 py-2 overflow-y-scroll">
      {textResult ? (
        <p className="text-base text-indigo-700">{textResult}</p>
      ) : (
        <p className="pt-4 text-sm text-indigo-500 text-center">
          Your text will appear here, hopefully.
        </p>
      )}
    </div>
  );
};

export default ResultBox;
