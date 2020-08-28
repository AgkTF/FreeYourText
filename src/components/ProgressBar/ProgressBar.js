import React from "react";

const ProgressBar = ({ progress }) => {
  const containerStyles = {
    display: "block",
  };

  const fillerStyles = {
    width: `${Math.round(progress * 100)}%`,
  };

  const percentageStyles = {
    left: "45%",
  };

  return (
    <div
      style={progress > 0 ? containerStyles : null}
      className="relative hidden mt-2 w-full h-10 font-semibold text-lg text-white rounded overflow-hidden bg-gray-400"
    >
      <div
        style={fillerStyles}
        className="h-full bg-green-500 flex items-center transition-all ease-in duration-100"
      >
        <span style={percentageStyles} className="absolute">
          {Math.round(progress * 100)}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
