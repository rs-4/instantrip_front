import React from 'react';

const ImageTextComponent = ({
  imgSrc,
  title,
  italicTitle,
  text,
  buttonText
}) => {
  return (
    <div className="m-2 relative ">
      <img className="w-full" src={imgSrc} alt="Image Text Component" />
      <div className="absolute bottom-5 bg-white bg-opacity-80 p-4 ml-4 w-2/4">
        <h1 className="font-bold text-lg">{title}</h1>
        <h1 className="font-bold text-lg italic">{italicTitle}</h1>
        <p className="text-base">{text}</p>
        <button
          className="bg-orange-500 text-white py-1 px-4 rounded mt-2"
          onClick={() => (window.location.href = '/result')}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ImageTextComponent;
