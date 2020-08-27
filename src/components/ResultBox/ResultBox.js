import React from "react";
const ResultBox = ({ textResult }) => {
  return (
    <div className="mt-12 w-full h-48 bg-white rounded-lg px-3 py-2">
      <p className="text-gray-700">{textResult}</p>
    </div>
  );
};

export default ResultBox;
