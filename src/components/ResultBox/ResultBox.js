import React, { useRef, useContext, useState, useEffect } from "react";
import SuccessCard from "../Card/Card";
import PropTypes from "prop-types";
import { ThemeContext } from "../../context/theme-context";

const ResultBox = ({ textResult }) => {
  const [successCopy, setSuccessCopy] = useState(false);
  const themeContext = useContext(ThemeContext);
  const textareaRef = useRef();
  const copy = () => {
    textareaRef.current.select();
    document.execCommand("copy");
    setSuccessCopy(true);
  };

  useEffect(() => {
    setTimeout(() => {
      if (successCopy) {
        setSuccessCopy(false);
      }
    }, 1000);
  }, [successCopy]);

  return (
    <div className="overflow-hidden">
      <textarea
        className={
          "mt-4 py-1 px-2 w-full h-48 text-sm text-indigo-500 border-2 border-indigo-400 rounded-lg focus:outline-none focus:shadow-outline transition duration-500 ease-in-out " +
          (themeContext.theme === "dark" ? "bg-transparent" : "")
        }
        placeholder="Your text will appear here, hopefully."
        value={textResult}
        readOnly
        ref={textareaRef}
      />

      <button onClick={copy}>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="clipboard-copy w-6 h-6 text-indigo-600 hover:text-indigo-400
           ml-2"
          style={!textResult ? { display: "none" } : { display: "block" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
          />
        </svg>
      </button>
      <SuccessCard show={successCopy} />
    </div>
  );
};

ResultBox.propTypes = {
  textResult: PropTypes.string,
};

export default ResultBox;
