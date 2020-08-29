import React from "react";
const WarningCard = () => {
  return (
    <div className="absolute py-1 px-1 h-auto w-48 text-center rounded-lg border-2 border-yellow-500 bg-yellow-100 shadow-lg">
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="mx-auto exclamation w-5 h-5 text-yellow-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <p className="text-yellow-500 text-sm">
        You shouldn't really be here. But it's okay.
      </p>
    </div>
  );
};

export default WarningCard;
