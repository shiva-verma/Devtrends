import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const fetchTrendingRepos = async (language = '', timeRange = 'daily') => {
  try {
    const response = await axios.get(`${API_URL}/github/trending`, {
      params: { language, timeRange }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching trending repos:', error);
    return [];
  }
};

export const fetchHackerNews = async () => {
  try {
    const response = await axios.get(`https://dev.to/api/articles`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Hacker News:', error);
    return [];
  }
}; 

// services/api.js
export const fetchDevTo = async (page = 1, perPage = 10) => {
  try {
    const response = await fetch(`https://dev.to/api/articles?page=${page}&per_page=${perPage}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Dev.to posts:', error);
    throw error;
  }
};


export const getGitHub = async (language, timeRange) => {
  try {
    const response = await fetch(`${API_URL}/github/trending?language=${language}&timeRange=${timeRange}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json(); 
    return data; // Assuming this returns an array
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    throw error;
  }
};

export const getHackerNews = () => {
  return axios.get(`${API_URL}/hn/trending`);
}