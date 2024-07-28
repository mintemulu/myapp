import React from 'react';
import './ExpenseTracker.css';

function ExpenseList({ expenses }) {
    const total = expenses ? expenses.reduce((sum, expense) => sum + expense.amount, 0) : 0;

    return (
        <div className="expense-list">
            <h2>Expense List</h2>
            <ul>
                {expenses && expenses.map((expense, index) => (
                    <li key={index}>
                        {expense.name} - {expense.amount} birr
                    </li>
                ))}
            </ul>
            <h3>Total: {total} birr</h3>
        </div>
    );
}

export default ExpenseList;
