import React, { useEffect, useState } from 'react';
import { Wallet, CalendarDays, TrendingUp } from 'lucide-react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import API from '../api';

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await API.get('');
    setExpenses(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const getTotal = () => {
    return expenses.reduce((sum, exp) => sum + parseFloat(exp.amount), 0).toFixed(2);
  };

  const getTodayTotal = () => {
    const today = new Date().toISOString().split('T')[0];
    return expenses
      .filter(exp => exp.date === today)
      .reduce((sum, exp) => sum + parseFloat(exp.amount), 0)
      .toFixed(2);
  };

  const getTopCategory = () => {
    const counts = {};
    expenses.forEach(e => counts[e.category] = (counts[e.category] || 0) + 1);
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-blue-100 min-h-screen space-y-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-2">📊 Expense Tracker Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-white p-5 rounded-2xl shadow-md flex items-center gap-4">
          <Wallet className="w-10 h-10 text-blue-600" />
          <div>
            <p className="text-gray-500 text-sm">Total Expenses</p>
            <h3 className="text-2xl font-semibold text-blue-700">${getTotal()}</h3>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-md flex items-center gap-4">
          <CalendarDays className="w-10 h-10 text-green-600" />
          <div>
            <p className="text-gray-500 text-sm">Today's Spending</p>
            <h3 className="text-2xl font-semibold text-green-700">${getTodayTotal()}</h3>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-md flex items-center gap-4">
          <TrendingUp className="w-10 h-10 text-purple-600" />
          <div>
            <p className="text-gray-500 text-sm">Top Category</p>
            <h3 className="text-2xl font-semibold text-purple-700">{getTopCategory()}</h3>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-6">
        <ExpenseForm onAdded={fetchExpenses} />
        <ExpenseList data={[...expenses].slice(-3).reverse()} />
      </div>
    </div>
  );
}
