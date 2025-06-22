import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20 px-4">
        <Dashboard />
      </div>
      <Footer />
    </>
  );
}

export default App;
