import React from "react";

const UploadedImg = ({ image }) => {
  let toRender;

  if (image) {
    toRender = (
      <div className="relative pb-4/5">
        <img
          src={image}
          alt="uploaded"
          className="absolute h-full w-full object-contain rounded-lg"
        />
      </div>
    );
  } else {
    toRender = (
      <div className="relative pt-5 pb-4/5 text-center">
        <p className="text-sm text-indigo-500">
          Your uploaded image will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-12 max-w-xs w-4/5 rounded-lg overflow-hidden bg-indigo-100">
      {toRender}
    </div>
  );
};

export default UploadedImg;
