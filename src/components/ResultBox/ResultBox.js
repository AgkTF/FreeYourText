import React from "react";
const ResultBox = ({ textResult }) => {
  return (
    <div className="mt-5 w-4/5 h-48 bg-indigo-100 rounded-lg px-3 py-2 overflow-y-scroll">
      <p className="text-indigo-700">{textResult}</p>
    </div>
  );
};

export default ResultBox;
