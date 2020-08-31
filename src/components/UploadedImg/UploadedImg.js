import React from "react";
import PropTypes from "prop-types";

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
        <p className="pt-1 px-2 text-sm text-indigo-500 text-center">
          Your uploaded image will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden bg-transparent border-indigo-400 border-2">
      {toRender}
    </div>
  );
};

UploadedImg.propTypes = {
  image: PropTypes.string,
};

export default UploadedImg;
