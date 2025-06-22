import React, { useEffect, useState } from 'react';
import API from '../api';

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await API.get('');
    setExpenses(res.data);
  };

  const deleteExpense = async (id) => {
    await API.delete(`/${id}`);
    fetchExpenses();
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Expense List</h2>
      <ul className="space-y-3">
        {expenses.map(exp => (
          <li key={exp.id} className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="font-medium">{exp.title}</p>
              <p className="text-sm text-gray-500">{exp.category} • {exp.date}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-blue-600 font-semibold">${exp.amount}</span>
              <button
                onClick={() => deleteExpense(exp.id)}
                className="text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
