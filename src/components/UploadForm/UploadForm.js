import React, { useRef, useState } from "react";
import ResultBox from "../ResultBox/ResultBox";

const UploadForm = () => {
  const uploadField = useRef();

  const [langSelected, setLangSelected] = useState("");
  // const []

  const langChangeHandler = (event) => {
    setLangSelected(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(uploadField);
    alert(`Selected file - ${uploadField.current.files[0].name}`);
  };

  return (
    <div className="pt-48 w-1/2 m-auto">
      <form onSubmit={formSubmitHandler} className="flex flex-col items-center">
        <div className="flex justify-between w-full">
          <input
            type="file"
            name="uploadField"
            ref={uploadField}
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

      <ResultBox textResult="Your free text will be here, hopefully." />
    </div>
  );
};

export default UploadForm;
