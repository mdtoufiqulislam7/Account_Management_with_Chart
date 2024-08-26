
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {   getmaydata } from '../Redux_Toolkit/Monthly';
import IncomeCard from '../Common/IncomeCard'; // Import your IncomeCard component

export default function May() {
    const { month, status, error } = useSelector(state => state.month);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(getmaydata());
        }
    }, [dispatch, status]);

    if (status === 'loading') {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-6">May Income</h1>
            <div className="flex flex-wrap justify-center">
            {month.length > 0 ? (
                month.map((income, index) => (
                    <IncomeCard
                        key={index}
                        title={income.title}
                        amount={income.amount}
                        date={income.date}
                        category={income.category}
                        description={income.description}
                    />
                ))
            ) : (
                <div>No Income has been made yet this month</div>
            )}
            </div>
            <div className="mt-4 text-center">
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                    onClick={() => navigate('/monthly')}
                >
                    Back to Monthly Overview
                </button>
            </div>
        </div>
    );
}


