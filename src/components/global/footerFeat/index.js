import React from 'react';

const CardComponent = ({ img, title, text }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
      <img className="w-full" src={img} alt="Card image cap" />
      <div className="px-6 py-4 text-center">
        <h2 className="font-bold mb-2">{title}</h2>
        <p className="text-base">{text}</p>
      </div>
    </div>
  );
};

export default CardComponent;
