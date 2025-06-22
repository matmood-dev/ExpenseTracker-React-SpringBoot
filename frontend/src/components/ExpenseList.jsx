import React, { useEffect, useState } from 'react';
import API from '../api';
import { Trash2, BadgeDollarSign } from 'lucide-react';

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
    <div className="bg-gradient-to-tr from-white to-blue-50 p-6 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
        <BadgeDollarSign className="w-6 h-6" /> Expense List
      </h2>
      <ul className="divide-y">
        {expenses.map(exp => (
          <li key={exp.id} className="py-4 flex justify-between items-center hover:bg-blue-100 px-3 rounded-md transition">
            <div>
              <p className="text-lg font-medium text-gray-800">{exp.title}</p>
              <p className="text-sm text-gray-500">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs font-semibold">{exp.category}</span>
                {' • '}
                {exp.date}
              </p>
              {exp.description && <p className="text-xs mt-1 text-gray-600 italic">{exp.description}</p>}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-600 font-semibold text-lg">${exp.amount}</span>
              <button
                onClick={() => deleteExpense(exp.id)}
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md transition"
                title="Delete"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
