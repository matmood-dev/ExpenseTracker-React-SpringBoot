import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ExpensesPage from './pages/ExpensesPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20 px-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/expenses" element={<ExpensesPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
