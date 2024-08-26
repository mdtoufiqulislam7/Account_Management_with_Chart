import React from 'react'
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className="flex flex-row gap-4 p-4 bg-white rounded-lg m-5 mts-2 w-full">
      {/* <div className="bg-white flex-1 p-4 rounded shadow-lg">
        <Dashboard />
      </div>
      <div className="bg-white flex-1 p-4 rounded shadow-lg">
        <ViewTransactions />
      </div>
      <div className="bg-white flex-1 p-4 rounded shadow-lg">
        <Income />
      </div>
      <div className="bg-white flex-1 p-4 rounded shadow-lg">
        <Expense />
      </div> */}
      <Outlet/>

    </div>
  )
}

export default MainLayout