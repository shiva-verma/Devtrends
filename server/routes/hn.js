const express = require('express');
const router = express.Router();
const axios = require('axios');

const ALGOLIA_API_BASE = 'https://hn.algolia.com/api/v1';

// Function to fetch trending Hacker News posts
const fetchTrendingPosts = async (page = 0, hitsPerPage = 30) => {
  try {
    const response = await axios.get(`${ALGOLIA_API_BASE}/search`, {
      params: {
        tags: 'front_page',
        page,
        hitsPerPage,
        numericFilters: 'points>10'
      }
    });

    // Transform the data to a more usable format
    const posts = response.data.hits.map(post => ({
      id: post.objectID,
      title: post.title,
      url: post.url || `https://news.ycombinator.com/item?id=${post.objectID}`,
      points: post.points,
      author: post.author,
      createdAt: post.created_at,
      commentsCount: post.num_comments,
      commentsUrl: `https://news.ycombinator.com/item?id=${post.objectID}`,
      domain: post.url ? new URL(post.url).hostname : 'news.ycombinator.com'
    }));

    return {
      posts,
      totalPages: response.data.nbPages,
      currentPage: response.data.page
    };
  } catch (error) {
    console.error('Error fetching Hacker News posts:', error);
    throw error;
  }
};

router.get('/trending', async (req, res) => {
  try {
    const { page = 0 } = req.query;
    const data = await fetchTrendingPosts(parseInt(page));
    res.json(data);
  } catch (error) {
    console.error('Error in /trending endpoint:', error);
    res.status(500).json({ error: 'Failed to fetch Hacker News posts' });
  }
});

module.exports = router; 