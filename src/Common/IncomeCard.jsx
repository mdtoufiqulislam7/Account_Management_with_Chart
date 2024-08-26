import React from 'react';

const IncomeCard = ({ title, amount, date, category, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-5 m-4 hover:shadow-xl transition-shadow duration-300">
      <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
      <div className="text-gray-700 text-base mb-4">
        <span className="font-semibold">Amount:</span> ${amount}
      </div>
     
      <div className="text-gray-700 text-base mb-4">
        <span className="font-semibold">Date:</span> {new Date(date).toLocaleDateString()}
      </div>
      <div className="text-gray-700 text-base mb-4">
        <span className="font-semibold">Category:</span> {category}
      </div>
      <div className="text-gray-700 text-base mb-4">
        <span className="font-semibold">Description:</span> {description}
      </div>
    </div>
  );
};

export default IncomeCard;
