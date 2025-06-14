# DevTrends

A developer dashboard to track trending repositories and tech news.

## Features

- GitHub Trending API integration
- Hacker News Feed integration
- Tagging service logic
- Frontend pages for GitHub and Hacker News data

## Tech Stack

- **Frontend**: React, TailwindCSS, React Router
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Caching**: Redis (optional)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm run install-all
   ```
3. Create a `.env` file in the server directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/devtrends
   GITHUB_TOKEN=your_github_token_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

- `client/`: Frontend code
  - `components/`: React components
  - `pages/`: Page components
  - `services/`: API services
- `server/`: Backend code
  - `routes/`: API routes
  - `controllers/`: Route controllers
  - `models/`: MongoDB models
  - `jobs/`: Background jobs
  - `utils/`: Utility functions
  - `config/`: Configuration files

## License

ISC 