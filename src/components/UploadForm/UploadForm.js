import React, { useRef, useState } from "react";
import { createWorker } from "tesseract.js";
import ResultBox from "../ResultBox/ResultBox";

const UploadForm = () => {
  const fileInputRef = useRef();

  const [langSelected, setLangSelected] = useState("");
  const [uploadedFile, setUploadedFile] = useState();
  const [textResult, setTextResult] = useState(
    "Your free text will be here, hopefully."
  );

  const langChangeHandler = (event) => {
    setLangSelected(event.target.value);
  };

  const inputFieldChangeHandler = () => {
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
    <div className="py-48 w-1/2 m-auto">
      <form onSubmit={startTesseract} className="flex flex-col items-center">
        <div className="flex justify-between w-full">
          <input
            type="file"
            name="fileInputRef"
            ref={fileInputRef}
            onChange={inputFieldChangeHandler}
            accept=".jpg,.svg,.jpeg,.png,.webp"
            className=""
          />
          <select
            value={langSelected}
            onChange={langChangeHandler}
            className="rounded px-2 py-1 box-border font-semibold bg-gray-100"
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
          className="mt-8 px-2 py-1 w-1/3 font-semibold text-gray-200 bg-gray-700 hover:bg-gray-800 rounded"
        >
          Submit
        </button>
      </form>

      <ResultBox textResult={textResult} />
    </div>
  );
};

export default UploadForm;
