import React, { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

export default function Dashboard() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">💸 Expense Tracker</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <ExpenseForm onAdded={() => setRefreshKey(old => old + 1)} />
        <ExpenseList key={refreshKey} />
      </div>
    </div>
  );
}
