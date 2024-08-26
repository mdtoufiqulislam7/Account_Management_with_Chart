import React, { useEffect } from 'react';
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getexpense, getincome } from '../Redux_Toolkit/User_slice';

ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Chart() {
    const dispatch = useDispatch()
    const { income, expense,expenseStatus,incomeStatus,error } = useSelector(state => state.accounts);
    useEffect(() => {
        if (incomeStatus === 'idle') {
            dispatch(getincome());
        }
        if (expenseStatus === 'idle') {
            dispatch(getexpense());
        }
    }, [dispatch, incomeStatus, expenseStatus]);

    if (incomeStatus === 'loading' || expenseStatus === 'loading') {
        return <div>Loading...</div>;
    }

    if (incomeStatus === 'failed' || expenseStatus === 'failed') {
        return <div>Error: {error}</div>;
    }

    // Extract amounts from income and expense arrays
    const incomeAmounts = income.map(item => item.amount);
    const expenseAmounts = expense.map(item => item.amount);

    const data = {
        labels: income.map((_, index) => `Month ${index + 1}`),
        datasets: [
            {
                label: 'Income',
                data: incomeAmounts, // Use extracted income amounts
                borderColor: 'green',
                fill: false,
            },
            {
                label: 'Expense',
                data: expenseAmounts, // Use extracted expense amounts
                borderColor: 'red',
                fill: false,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Income vs Expense',
            },
        },
    };

    // Calculate total income, total expenses, and difference
    const totalIncome = incomeAmounts.reduce((acc, val) => acc + val, 0);
    const totalExpense = expenseAmounts.reduce((acc, val) => acc + val, 0);
    const netTotal = totalIncome - totalExpense;

    // Find max and min income (assuming income array is not empty)
    const maxIncome = Math.max(...incomeAmounts);
    const minIncome = Math.min(...incomeAmounts);
    const maxExpense = Math.max(...expenseAmounts);
    const minExpense = Math.min(...expenseAmounts);
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '70%' }}>
                <Line data={data} options={options} />
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <div><strong>Total Income:</strong> ${totalIncome}</div>
                    <div><strong>Total Expense:</strong> ${totalExpense}</div>
                    <div><strong>Net Total:</strong> ${netTotal}</div>
                </div>
            </div>
            <div className='w-40 rounded-lg bg-slate-400 h-32' style={{ width: '25%', paddingLeft: '20px' }}>
                <h3>Recent History</h3>
                <h3>Income</h3>

                <div><strong>Max Income:</strong> ${maxIncome}</div>
                <div><strong>Min Income:</strong> ${minIncome}</div>
                
            </div>
            <div className='w-40 rounded-lg bg-slate-400 h-32 ml-4' style={{width: '25%',paddingLeft:"20px"}}>
                <h3>Recent History</h3>
                <h3>Expense</h3>

                <div><strong>Max Income:</strong> ${maxExpense}</div>
                <div><strong>Min Income:</strong> ${minExpense}</div>
            </div>
        </div>
    );
}
