import React, { useState } from 'react';
import API from '../api';

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
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">Add Expense</h2>

      <input name="title" value={form.title} onChange={handleChange} placeholder="Title"
        className="w-full border p-2 rounded" required />

      <input name="amount" value={form.amount} type="number" onChange={handleChange} placeholder="Amount"
        className="w-full border p-2 rounded" required />

      <select name="category" value={form.category} onChange={handleChange}
        className="w-full border p-2 rounded">
        <option value="FOOD">Food</option>
        <option value="TRANSPORT">Transport</option>
        <option value="UTILITIES">Utilities</option>
        <option value="ENTERTAINMENT">Entertainment</option>
        <option value="SHOPPING">Shopping</option>
        <option value="HEALTH">Health</option>
        <option value="OTHER">Other</option>
      </select>

      <input name="date" value={form.date} type="date" onChange={handleChange}
        className="w-full border p-2 rounded" required />

      <input name="description" value={form.description} onChange={handleChange} placeholder="Description"
        className="w-full border p-2 rounded" />

      <button type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        Add Expense
      </button>
    </form>
  );
}
