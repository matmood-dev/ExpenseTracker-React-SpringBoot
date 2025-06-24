import React, { useEffect, useState } from 'react';
import API from '../api';
import {
  ListOrdered,
  DollarSign,
  FolderKanban,
  CalendarDays,
  FileText,
} from 'lucide-react';

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await API.get('');
    setExpenses(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-blue-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 flex items-center gap-2">
        <ListOrdered className="w-8 h-8" /> All Expenses
      </h1>

      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table className="min-w-full bg-white border border-blue-100 rounded-xl overflow-hidden">
          <thead className="bg-blue-100 text-blue-800 text-sm">
  <tr>
    <th className="p-3 text-left">
      <div className="flex items-center gap-1"><FolderKanban className="w-4 h-4" /> Title</div>
    </th>
    <th className="p-3 text-left">
      <div className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> Amount</div>
    </th>
    <th className="p-3 text-left">
      <div className="flex items-center gap-1"><FolderKanban className="w-4 h-4" /> Category</div>
    </th>
    <th className="p-3 text-left">
      <div className="flex items-center gap-1"><CalendarDays className="w-4 h-4" /> Date</div>
    </th>
    <th className="p-3 text-left">
      <div className="flex items-center gap-1"><FileText className="w-4 h-4" /> Description</div>
    </th>
  </tr>
</thead>

          <tbody>
            {[...expenses]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((expense, index) => (
              <tr key={index} className="border-t hover:bg-blue-50 transition">
                <td className="p-3 text-gray-800 font-medium">{expense.title}</td>
                <td className="p-3 text-green-600 font-semibold">${parseFloat(expense.amount).toFixed(2)}</td>
                <td className="p-3">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">
                    {expense.category}
                  </span>
                </td>
                <td className="p-3 text-sm text-gray-600">{expense.date}</td>
                <td className="p-3 text-sm text-gray-600 italic">{expense.description || '-'}</td>
              </tr>
            ))}
            {expenses.length === 0 && (
              <tr>
                <td className="p-4 text-center text-gray-500" colSpan="5">
                  No expenses recorded.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
