import React from "react";
const Card = ({ show }) => {
  return (
    <div
      className="mt-3 py-1 px-1 w- flex flex-col items-center justify-center bg-green-100 text-green-600 border-green-400 border-2 rounded-lg text-xs sm:text-sm font-semibold transition duration-500 ease-in-out"
      style={
        !show
          ? { transform: "translateY(200%)" }
          : { transform: "translateY(0)" }
      }
    >
      <p>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="check-circle w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </p>
      <p>
        Copied to clipboard{" "}
        <span role="img" aria-label="party-popper">
          🎉
        </span>
      </p>
    </div>
  );
};

export default Card;
