import React from 'react';
import { useNavigate } from 'react-router-dom';

function Monthly() {
  const navigate = useNavigate(); // Hook to navigate

  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const handleMonthClick = (month) => {
    navigate(`/${month.toLowerCase()}`); // Navigate to the month detail route
    window.location.reload()
  };

  return (
    <div className="flex flex-wrap justify-around p-5">
      {months.map((month, index) => (
        <div
          key={index}
          className="bg-gray-200 border border-gray-300 rounded-lg p-2 m-2 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-300 cursor-pointer h-20 flex items-center justify-center"
          onClick={() => handleMonthClick(month)} // Call handleMonthClick on click
        >
          {month}
        </div>
      ))}
    </div>
  );
}

export default Monthly;
