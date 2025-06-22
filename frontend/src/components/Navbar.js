import React, { useState } from 'react';
import { Menu, X, Home, BarChart3, PlusSquare } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-700">💸 ExpenseTracker</h1>

        <button onClick={() => setOpen(!open)} className="md:hidden text-blue-700">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className="hidden md:flex items-center gap-6">
          <NavItem icon={<Home className="w-4 h-4" />} label="Home" />
          <NavItem icon={<BarChart3 className="w-4 h-4" />} label="Dashboard" />
          <NavItem icon={<PlusSquare className="w-4 h-4" />} label="Add" />
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-blue-50">
          <NavItem icon={<Home />} label="Home" mobile />
          <NavItem icon={<BarChart3 />} label="Dashboard" mobile />
          <NavItem icon={<PlusSquare />} label="Add" mobile />
        </div>
      )}
    </nav>
  );
}

function NavItem({ icon, label, mobile }) {
  return (
    <button
      className={`flex items-center gap-2 text-blue-700 hover:text-blue-900 transition ${
        mobile ? 'w-full py-2 border-b border-blue-100' : ''
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
