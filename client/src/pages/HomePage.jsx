import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to DevTrends!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Trending GitHub Repositories</h2>
          <p>Placeholder for featured GitHub trending data...</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Latest Hacker News</h2>
          <p>Placeholder for featured Hacker News data...</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 