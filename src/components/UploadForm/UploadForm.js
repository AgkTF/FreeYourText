import React, { useRef, useState } from "react";
import { createWorker } from "tesseract.js";
import ResultBox from "../ResultBox/ResultBox";
import UploadedImg from "../UploadedImg/UploadedImg";
import ProgressBar from "../ProgressBar/ProgressBar";

const UploadForm = () => {
  const fileInputRef = useRef();

  const [langSelected, setLangSelected] = useState("");
  const [uploadedFile, setUploadedFile] = useState();
  const [textResult, setTextResult] = useState("");
  const [progress, setProgress] = useState(0);

  const langChangeHandler = (event) => {
    setLangSelected(event.target.value);
  };

  const inputFieldChangeHandler = () => {
    console.log(fileInputRef.current.files[0]);
    setUploadedFile(fileInputRef.current.files[0]);
  };

  const worker = createWorker({
    logger: (m) => {
      console.log(m);
      if (m.status === "recognizing text") {
        setProgress(m.progress);
      }
    },
  });

  const startTesseract = async (event) => {
    event.preventDefault();

    await worker.load();
    await worker.loadLanguage(langSelected);
    await worker.initialize(langSelected);
    const {
      data: { text },
    } = await worker.recognize(uploadedFile);

    console.log(text);
    setTextResult(text);
  };

  let btnContent = "GO!";
  if (progress > 0 && progress < 1) {
    btnContent = (
      <div className="flex justify-center">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="cog w-6 h-6 animate-spin"
        >
          <path
            fillRule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  } else if (progress === 1) {
    btnContent = (
      <div className="flex justify-center items-center">
        <svg viewBox="0 0 20 20" fill="currentColor" className="upload w-5 h-5">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="ml-1 tracking-wide">
          DONE{" "}
          <span role="img" aria-label="party-popper">
            🎉
          </span>
        </span>
      </div>
    );
  }

  return (
    <div className="mt-16 mx-auto flex flex-col items-center">
      <form
        onSubmit={startTesseract}
        className="flex flex-col items-center w-full"
      >
        <div className="flex flex-col justify-between">
          <input
            type="file"
            name="fileInputRef"
            id="file"
            ref={fileInputRef}
            onChange={inputFieldChangeHandler}
            accept=".jpg,.svg,.jpeg,.png,.webp"
            className="border-0 h-px overflow-hidden p-0 absolute w-px whitespace-no-wrap"
            style={{ clip: "rect(0, 0,0, 0)" }}
          />

          {uploadedFile ? (
            <label
              htmlFor="file"
              className="px-2 py-1 font-semibold rounded text-green-600 border-2 border-green-500 cursor-pointer text-center flex items-center justify-center"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="upload w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Uploaded Successfully</span>
            </label>
          ) : (
            <label
              htmlFor="file"
              className="px-2 py-1 rounded text-indigo-600 border-2 border-indigo-500 hover:bg-indigo-100 cursor-pointer text-center flex items-center justify-center"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="upload w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Upload image</span>
            </label>
          )}

          <select
            value={langSelected}
            onChange={langChangeHandler}
            className="mt-4 px-2 py-1 rounded box-border font-normal text-indigo-600 border-2  border-indigo-500 bg-white
            "
          >
            <option value="" disabled>
              Select a language
            </option>
            <option value="ara">Arabic</option>
            <option value="eng">English</option>
          </select>
        </div>

        {!langSelected || !uploadedFile ? (
          <button
            type="submit"
            className="mt-8 px-2 py-2 w-1/2 font-semibold text-lg text-white bg-indigo-700 hover:bg-indigo-800 rounded-lg shadow-xl hover:shadow-sm max-w-xs cursor-not-allowed opacity-50 flex justify-center items-center"
          >
            Select from above{" "}
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="ml-1 arrow-circle-up w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <ProgressBar progress={progress} />
          </button>
        ) : (
          <button
            type="submit"
            className="mt-8 px-2 py-2 w-1/2 font-semibold text-lg text-white bg-indigo-700 hover:bg-indigo-800 rounded-lg shadow-xl hover:shadow-sm max-w-xs"
          >
            {btnContent}
            <ProgressBar progress={progress} />
          </button>
        )}
      </form>

      <UploadedImg
        image={uploadedFile ? URL.createObjectURL(uploadedFile) : ""}
      />
      <ResultBox textResult={textResult} />
    </div>
  );
};

export default UploadForm;
