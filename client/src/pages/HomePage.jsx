import React, { useState, useEffect } from 'react';
import { getGitHub, getHackerNews } from '../services/api';

const HomePage = () => {
  const [githubTrending, setGithubTrending] = useState([]);
  const [hackerNewsTrending, setHackerNewsTrending] = useState([]);
  const [githubError, setGithubError] = useState(null);
  const [hackerNewsError, setHackerNewsError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const language = 'javascript';
        const since = 'daily';
        try {
          const ghData = await getGitHub(language, since);
          console.log('github data', ghData);
          setGithubTrending(ghData);
        } catch (error) {
          setGithubError('Failed to load GitHub trending data');
        }
        try {
          const hnData = await getHackerNews();
          console.log('Hacker News data', hnData);
          setHackerNewsTrending(hnData);
        } catch (error) {
          setHackerNewsError('Failed to load Hacker News trending data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub Trending Repositories</h1>
      {githubError ? (
        <p>{githubError}</p>
      ) : githubTrending.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {githubTrending.map((repo, i) => (
            <div key={i} className="bg-white shadow rounded p-4">
              <h2 className="text-xl font-bold">{repo.name}</h2>
              <p className="text-gray-600">{repo.description}</p>
              <a className="text-blue-500" href={repo.url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading GitHub data...</p>
      )}

      <h1 className="text-2xl font-bold mt-8 mb-4">Hacker News Trending Articles</h1>
      {hackerNewsError ? (
        <p>{hackerNewsError}</p>
      ) : hackerNewsTrending?.data?.posts?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hackerNewsTrending?.data?.posts?.map((news, i) => (
            <div key={i} className="bg-white shadow rounded p-4">
              <h2 className="text-xl font-bold">{news.title}</h2>
              <p className="text-gray-600">Score: {news.score}</p>
              <a className="text-blue-500" href={news.url} target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading Hacker News data...</p>
      )}
    </div>
  );
};

export default HomePage;