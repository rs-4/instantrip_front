import React from 'react';

const FeatureCard = ({ icon, title, text }) => {
  return (
    <div className="bg-[#D9D9D9]  rounded-lg shadow-lg p-6">
      <div className="">
    
          {icon}
   
        <span className="text-xl font-semibold">{title}</span>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default FeatureCard;
