import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ReposPage from './pages/ReposPage';
import NewsPage from './pages/NewsPage';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/repos" element={<ReposPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App; 