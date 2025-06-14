const express = require('express');
const router = express.Router();
const axios = require('axios');
const extractTags = require('../utils/tagExtractor');

// GitHub API base URL
const GITHUB_API_BASE = 'https://api.github.com';

// Function to fetch trending repositories
const fetchTrendingRepos = async (language = '', timeRange = 'daily') => {
  try {
    // Calculate date range
    const date = new Date();
    const timeRanges = {
      daily: 1,
      weekly: 7,
      monthly: 30
    };
    date.setDate(date.getDate() - timeRanges[timeRange]);

    // Format date for GitHub API
    const since = date.toISOString().split('T')[0];

    // Build query
    let query = `created:>${since}`;
    if (language) {
      query += ` language:${language}`;
    }

    // Fetch repositories
    const response = await axios.get(`${GITHUB_API_BASE}/search/repositories`, {
      params: {
        q: query,
        sort: 'stars',
        order: 'desc',
        per_page: 30
      },
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': process.env.GITHUB_TOKEN ? `token ${process.env.GITHUB_TOKEN}` : undefined
      }
    });

    // Transform and enrich the data
    const repos = response.data.items.map(repo => ({
      name: repo.name,
      fullName: repo.full_name,
      description: repo.description,
      stars: repo.stargazers_count,
      language: repo.language,
      url: repo.html_url,
      tags: extractTags(repo.description || ''),
      createdAt: repo.created_at,
      updatedAt: repo.updated_at,
      owner: {
        login: repo.owner.login,
        avatarUrl: repo.owner.avatar_url
      }
    }));

    return repos;
  } catch (error) {
    console.error('Error fetching trending repos:', error);
    throw error;
  }
};

router.get('/trending', async (req, res) => {
  try {
    const { language, timeRange = 'daily' } = req.query;
    const repos = await fetchTrendingRepos(language, timeRange);
    res.json(repos);
  } catch (error) {
    console.error('Error in /trending endpoint:', error);
    res.status(500).json({ error: 'Failed to fetch trending repositories' });
  }
});

module.exports = router; 