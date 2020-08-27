import React from "react";
// import Img from "../../assets/tesseract-test.png";

const UploadedImg = ({ image }) => {
  return (
    <div className="mt-12 w-4/5 rounded-lg overflow-hidden bg-indigo-100">
      <div className="relative pb-4/5">
        <img
          src={image}
          alt="uploaded"
          className="absolute h-full w-full object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default UploadedImg;
