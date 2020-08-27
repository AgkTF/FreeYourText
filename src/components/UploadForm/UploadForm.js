import React, { useRef, useState } from "react";
import { createWorker } from "tesseract.js";
import ResultBox from "../ResultBox/ResultBox";
import UploadedImg from "../UploadedImg/UploadedImg";

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
          <label
            htmlFor="file"
            className="px-2 py-1 bg-indigo-200 rounded text-indigo-600 hover:bg-indigo-300 cursor-pointer text-center"
          >
            Upload image
          </label>
          <select
            value={langSelected}
            onChange={langChangeHandler}
            className="mt-2 px-2 py-1 rounded box-border font-normal text-indigo-600 bg-gradient-to-r from-indigo-200 to-indigo-200"
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
          className="mt-8 px-2 py-1 w-1/3 font-semibold text-gray-200 bg-indigo-700 hover:bg-indigo-800 rounded shadow-xl hover:shadow-sm"
        >
          Submit
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
