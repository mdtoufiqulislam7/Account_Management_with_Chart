import React from 'react';
import { FaTachometerAlt, FaEye, FaDollarSign } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import  avtar from '../image/toufiq.jpg'

export default function Navigation() {

  const nagivate =  useNavigate()

  const income = ()=>{
    nagivate('/income')
    
    window.location.reload()
  }
  const expense = ()=>{
    nagivate('/expense')
    
    window.location.reload()
  }


  return (
    <div className="bg-white w-60 h-screen p-5 ml-10 my-5 rounded-lg shadow-lg flex flex-col justify-between sticky top-0">
      
      {/* User Profile Section */}
      <div className="flex flex-col items-center mb-5">
        <img
          src={avtar} // Placeholder avatar image
          alt="Toufiq"
          className="w-20 h-20 rounded-full mb-2"
        />
        <h2 className="text-xl font-semibold text-gray-800">Intake-50</h2>
      </div>
      
      {/* Navigation Items */}
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-3 p-2 hover:bg-slate-100 rounded cursor-pointer">
          <FaTachometerAlt className="text-gray-600" />
          <Link className="text-gray-800"  to="/dashboard"  >Dashboard</Link>
        </div>
        <div className="flex items-center space-x-3 p-2 hover:bg-slate-100 rounded cursor-pointer">
          <FaEye className="text-gray-600" />
          <Link className="text-gray-800" to="/view-transactions">View Transactions</Link>
        </div>
        <div className="flex items-center space-x-3 p-2 hover:bg-slate-100 rounded cursor-pointer">
          <FaDollarSign className="text-gray-600" />
          <Link className="text-gray-800"  onClick={income}  >Income</Link>
        </div>
        <div className="flex items-center space-x-3 p-2 hover:bg-slate-100 rounded cursor-pointer">
          <FaDollarSign className="text-gray-600 transform rotate-180" />
          <Link className="text-gray-800"  onClick={expense} >Expense</Link>
        </div>
        <div className="flex items-center space-x-3 p-2 hover:bg-slate-100 rounded cursor-pointer">
          <FaDollarSign className="text-gray-600 transform rotate-180" />
          <Link className="text-gray-800"  to='/monthly' >Monthly Income</Link>
        </div>
      </div>
      
      {/* Sign Out Button */}
      <div className="mt-auto">
        {/* <button className="w-full flex items-center justify-center space-x-3 p-2 bg-red-500 text-white rounded hover:bg-red-600">
          <FaSignOutAlt />
          <span>Sign Out</span>
        </button> */}
      </div>
    </div>
  );
}
