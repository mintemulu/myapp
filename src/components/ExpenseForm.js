import React, { useState } from 'react';
import './ExpenseTracker.css';

function ExpenseForm({ addExpense }) {
    const [expenseName, setExpenseName] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');

    const handleNameChange = (event) => {
        setExpenseName(event.target.value);
    };

    const handleAmountChange = (event) => {
        setExpenseAmount(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!expenseName || !expenseAmount) return;
        addExpense({ name: expenseName, amount: parseFloat(expenseAmount) });
        setExpenseName('');
        setExpenseAmount('');
    };

    return (
        <div className="expense-form">
            <h2>Add Expense</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Expense Name:
                    <input
                        type="text"
                        value={expenseName}
                        onChange={handleNameChange}
                        className="input-field"
                    />
                </label>
                <label>
                    Amount:
                    <input
                        type="number"
                        value={expenseAmount}
                        onChange={handleAmountChange}
                        className="input-field"
                    />
                </label>
                <button type="submit" className="submit-button">Add Expense</button>
            </form>
        </div>
    );
}

export default ExpenseForm;
