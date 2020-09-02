import React, { useRef, useState } from "react";
import { createWorker } from "tesseract.js";
import ResultBox from "../ResultBox/ResultBox";
import UploadedImg from "../UploadedImg/UploadedImg";
import ProgressBar from "../ProgressBar/ProgressBar";
import Confetti from "react-dom-confetti";

const UploadForm = () => {
  const fileInputRef = useRef();

  const [langSelected, setLangSelected] = useState("");
  const [uploadedFile, setUploadedFile] = useState();
  const [textResult, setTextResult] = useState("");
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("");

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
      if (m.status && m.status !== "recognizing text") {
        setStatus("preparing");
      } else if (m.status && m.status === "recognizing text") {
        setProgress(m.progress);
      }
    },
  });

  const startTesseract = async (event) => {
    event.preventDefault();
    // Just to make sure the users can tinker with it.
    if (!langSelected || !uploadedFile) {
      return console.log("💩");
    }

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
  if (progress === 0 && status !== "") {
    btnContent = (
      <div className="flex justify-center items-center">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="refresh w-5 h-5 animate-spin duration-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        <span className="ml-1 tracking-wide">{status}</span>
      </div>
    );
  } else if (progress > 0 && progress < 1) {
    btnContent = (
      <div className="flex justify-center">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="cog w-6 h-6 animate-spin duration-700"
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

  const confettiConfig = {
    angle: "90",
    spread: "146",
    startVelocity: "40",
    elementCount: "50",
    dragFriction: 0.12,
    duration: "2230",
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "921px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  return (
    <div className=" relative mt-12 mx-auto flex flex-col items-center justify-center">
      <form
        onSubmit={startTesseract}
        className="flex flex-col items-center w-full"
      >
        <div className="flex flex-col justify-between items-center sm:flex-row">
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
              className="px-2 py-1 font-semibold rounded-lg text-green-600 border-2 border-green-500 cursor-pointer text-center flex items-center justify-center"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="check-circle w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Uploaded Successfully</span>
            </label>
          ) : (
            <label
              htmlFor="file"
              className="px-2 py-1 rounded-lg text-indigo-600 border-2 border-indigo-500 hover:bg-indigo-100 cursor-pointer text-center flex items-center justify-center"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="upload w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              <span>Upload image</span>
            </label>
          )}

          <select
            value={langSelected}
            onChange={langChangeHandler}
            className="mt-3 pl-2 pr-6 py-1 rounded-lg box-border font-normal text-indigo-600 border-2 border-indigo-500 bg-transparent sm:mt-0 sm:ml-5 appearance-none focus:outline-none focus:shadow-outline hover:bg-gray-200"
            style={{
              backgroundImage: "url(down-arrow.svg)",
              backgroundPosition: "97% 0.6em",
              backgroundRepeat: "no-repeat",
              backgroundSize: "1em",
              maxWidth: "11rem",
            }}
          >
            <option value="" disabled>
              Select a language
            </option>
            <option value="afr">Afrikaans</option>
            <option value="amh">Amharic</option>
            <option value="ara">Arabic</option>
            <option value="asm">Assamese</option>
            <option value="aze">Azerbaijani</option>
            <option value="aze_cyrl">Azerbaijani - Cyrillic</option>
            <option value="bel">Belarusian</option>
            <option value="ben">Bengali</option>
            <option value="bod">Tibetan</option>
            <option value="bos">Bosnian</option>
            <option value="bul">Bulgarian</option>
            <option value="cat">Catalan; Valencian</option>
            <option value="ceb">Cebuano</option>
            <option value="ces">Czech</option>
            <option value="chi_sim">Chinese - Simplified</option>
            <option value="chi_tra">Chinese - Traditional</option>
            <option value="chr">Cherokee</option>
            <option value="cym">Welsh</option>
            <option value="dan">Danish</option>
            <option value="deu">German</option>
            <option value="dzo">Dzongkha</option>
            <option value="ell">Greek, Modern (1453-)</option>
            <option value="eng">English</option>
            <option value="enm">English, Middle (1100-1500)</option>
            <option value="epo">Esperanto</option>
            <option value="est">Estonian</option>
            <option value="eus">Basque</option>
            <option value="fas">Persian</option>
            <option value="fin">Finnish</option>
            <option value="fra">French</option>
            <option value="frk">German Fraktur</option>
            {/* <option value="frm">French, Middle (ca. 1400-1600)</option> */}
            <option value="gle">Irish</option>
            <option value="glg">Galician</option>
            {/* <option value="grc">Greek, Ancient (-1453)</option> */}
            <option value="guj">Gujarati</option>
            {/* <option value="hat">Haitian; Haitian Creole</option> */}
            <option value="heb">Hebrew</option>
            <option value="hin">Hindi</option>
            <option value="hrv">Croatian</option>
            <option value="hun">Hungarian</option>
            <option value="iku">Inuktitut</option>
            <option value="ind">Indonesian</option>
            <option value="isl">Icelandic</option>
            <option value="ita">Italian</option>
            <option value="ita_old">Italian - Old</option>
            <option value="jav">Javanese</option>
            <option value="jpn">Japanese</option>
            <option value="kan">Kannada</option>
            <option value="kat">Georgian</option>
            <option value="kat_old">Georgian - Old</option>
            <option value="kaz">Kazakh</option>
            <option value="khm">Central Khmer</option>
            <option value="kir">Kirghiz; Kyrgyz</option>
            <option value="kor">Korean</option>
            <option value="kur">Kurdish</option>
            <option value="lao">Lao</option>
            <option value="lat">Latin</option>
            <option value="lav">Latvian</option>
            <option value="lit">Lithuanian</option>
            <option value="mal">Malayalam</option>
            <option value="mar">Marathi</option>
            <option value="mkd">Macedonian</option>
            <option value="mlt">Maltese</option>
            <option value="msa">Malay</option>
            <option value="mya">Burmese</option>
            <option value="nep">Nepali</option>
            <option value="nld">Dutch; Flemish</option>
            <option value="nor">Norwegian</option>
            <option value="ori">Oriya</option>
            <option value="pan">Panjabi; Punjabi</option>
            <option value="pol">Polish</option>
            <option value="por">Portuguese</option>
            <option value="pus">Pushto; Pashto</option>
            {/* <option value="ron">Romanian; Moldavian; Moldovan</option> */}
            <option value="rus">Russian</option>
            <option value="san">Sanskrit</option>
            <option value="sin">Sinhala; Sinhalese</option>
            <option value="slk">Slovak</option>
            <option value="slv">Slovenian</option>
            <option value="spa">Spanish; Castilian</option>
            {/* <option value="spa_old">Spanish; Castilian - Old</option> */}
            <option value="sqi">Albanian</option>
            <option value="srp">Serbian</option>
            <option value="srp_latn">Serbian - Latin</option>
            <option value="swa">Swahili</option>
            <option value="swe">Swedish</option>
            <option value="syr">Syriac</option>
            <option value="tam">Tamil</option>
            <option value="tel">Telugu</option>
            <option value="tgk">Tajik</option>
            <option value="tgl">Tagalog</option>
            <option value="tha">Thai</option>
            <option value="tir">Tigrinya</option>
            <option value="tur">Turkish</option>
            <option value="uig">Uighur; Uyghur</option>
            <option value="ukr">Ukrainian</option>
            <option value="urd">Urdu</option>
            <option value="uzb">Uzbek</option>
            <option value="uzb_cyrl">Uzbek - Cyrillic</option>
          </select>
        </div>

        {!langSelected || !uploadedFile ? (
          <button
            type="submit"
            className="mt-6 px-2 py-2 w-1/2 font-semibold text-white bg-indigo-700 hover:bg-indigo-800 rounded-lg shadow-xl hover:shadow-sm max-w-xs text-base cursor-not-allowed opacity-50 flex justify-center items-center sm:mt-5 focus:outline-none tracking-wider"
            disabled={!langSelected || !uploadedFile}
          >
            Select something{" "}
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="ml-1 arrow-circle-up w-6 h-6 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
              />
            </svg>
            <ProgressBar progress={progress} />
          </button>
        ) : (
          <button
            type="submit"
            className="mt-6 px-2 py-2 w-1/2 font-semibold text-white bg-indigo-700 hover:bg-indigo-800 rounded-lg shadow-xl hover:shadow-sm max-w-xs text-lg sm:mt-5 focus:outline-none focus:shadow-outline"
          >
            {btnContent}
            <ProgressBar progress={progress} />
          </button>
        )}

        <Confetti active={progress === 1} config={confettiConfig} />
      </form>

      <div className="mt-12 w-1/2 sm:w-5/12 max-w-sm">
        <UploadedImg
          image={uploadedFile ? URL.createObjectURL(uploadedFile) : ""}
        />
        <ResultBox textResult={textResult} />
      </div>
    </div>
  );
};

export default UploadForm;
