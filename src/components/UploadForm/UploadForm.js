import React, { useRef, useState } from "react";
import { createWorker } from "tesseract.js";
import ResultBox from "../ResultBox/ResultBox";
import UploadedImg from "../UploadedImg/UploadedImg";

const UploadForm = () => {
  const fileInputRef = useRef();

  const [langSelected, setLangSelected] = useState("");
  const [uploadedFile, setUploadedFile] = useState();
  const [textResult, setTextResult] = useState("");

  const langChangeHandler = (event) => {
    setLangSelected(event.target.value);
  };

  const inputFieldChangeHandler = () => {
    console.log(fileInputRef.current.files[0]);
    setUploadedFile(fileInputRef.current.files[0]);
  };

  const worker = createWorker({
    logger: (m) => console.log(m),
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
            className="mt-4 px-2 py-1 rounded box-border font-normal text-indigo-600 border-2  border-indigo-500
            "
          >
            <option value="" disabled>
              Select a language
            </option>
            <option value="ara">Arabic</option>
            <option value="eng">English</option>
          </select>
        </div>
        <button
          type="submit"
          className="mt-8 px-2 py-2 w-1/3 font-semibold text-lg text-white bg-indigo-700 hover:bg-indigo-800 rounded shadow-xl hover:shadow-sm"
        >
          GO!
        </button>
      </form>

      <UploadedImg
        image={uploadedFile ? URL.createObjectURL(uploadedFile) : ""}
      />
      <ResultBox textResult={textResult} />
    </div>
  );
};

export default UploadForm;
