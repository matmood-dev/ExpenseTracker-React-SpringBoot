import React, { useState } from 'react';
import API from '../api';
import { Plus } from 'lucide-react';

export default function ExpenseForm({ onAdded }) {
  const [form, setForm] = useState({
    title: '',
    amount: '',
    category: 'FOOD',
    date: '',
    description: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await API.post('', form);
    onAdded();
    setForm({ title: '', amount: '', category: 'FOOD', date: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-tr from-blue-50 to-white p-6 rounded-2xl shadow-xl space-y-4">
      <h2 className="text-2xl font-bold text-blue-700 flex items-center gap-2">
        <Plus className="w-6 h-6" /> Add Expense
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title"
          className="border p-2 rounded-md focus:outline-blue-400" required />

        <input name="amount" value={form.amount} type="number" onChange={handleChange} placeholder="Amount"
          className="border p-2 rounded-md focus:outline-blue-400" required />

        <select name="category" value={form.category} onChange={handleChange}
          className="border p-2 rounded-md focus:outline-blue-400">
          <option value="FOOD">🍔 Food</option>
          <option value="TRANSPORT">🚌 Transport</option>
          <option value="UTILITIES">💡 Utilities</option>
          <option value="ENTERTAINMENT">🎬 Entertainment</option>
          <option value="SHOPPING">🛍️ Shopping</option>
          <option value="HEALTH">💊 Health</option>
          <option value="OTHER">🔖 Other</option>
        </select>

        <input name="date" value={form.date} type="date" onChange={handleChange}
          className="border p-2 rounded-md focus:outline-blue-400" required />
      </div>

      <textarea name="description" value={form.description} onChange={handleChange}
        placeholder="Description (optional)" rows={2}
        className="w-full border p-2 rounded-md resize-none focus:outline-blue-400" />

      <button type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-medium">
        Submit Expense
      </button>
    </form>
  );
}
