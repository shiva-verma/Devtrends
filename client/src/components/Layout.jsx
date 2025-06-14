import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto p-4">
          <nav className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">DevTrends</Link>
            <div className="space-x-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link to="/repos" className="text-gray-600 hover:text-gray-900">Repos</Link>
              <Link to="/news" className="text-gray-600 hover:text-gray-900">News</Link>
            </div>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-white shadow-md mt-8">
        <div className="container mx-auto p-4 text-center text-gray-600">
          <p>&copy; 2025 DevTrends. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 