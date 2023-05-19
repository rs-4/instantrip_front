import React from 'react';

const FeatureCard = ({ icon, title, text }) => {
  return (
    <div className="bg-[#D9D9D9] flex flex-col justify-between rounded-lg shadow-lg p-6 h-full">
      <div className="mb-4">
        {icon}
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default FeatureCard;
