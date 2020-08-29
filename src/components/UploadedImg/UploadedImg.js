import React from "react";

const UploadedImg = ({ image }) => {
  let toRender;

  if (image) {
    toRender = (
      <div className="relative pb-2/3">
        <img
          src={image}
          alt="uploaded"
          className="absolute h-full w-full object-contain rounded-lg "
        />
      </div>
    );
  } else {
    toRender = (
      <div className="relative pt-5 pb-4/5 text-center">
        <p className="pt-1 text-sm text-indigo-500 text-center">
          Your uploaded image will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden bg-gray-100 border-indigo-400 border-2">
      {toRender}
    </div>
  );
};

export default UploadedImg;
