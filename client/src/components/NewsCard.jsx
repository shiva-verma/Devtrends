import React from 'react';

const NewsCard = ({ post }) => {
  // Date formatting function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));

    if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="p-6 flex items-start space-x-4">
        {post.img_url && (
          <div className="flex-shrink-0">
            <img src={post.img_url} alt={post.title} className="w-24 h-24 object-cover rounded-md" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              {post.title}
            </a>
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            {post.description || "No description provided."}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <span>Published {formatDate(post.published)}</span>
                {post.reading_time && (
                  <span className="ml-3">Reading Time: {post.reading_time} min</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default NewsCard;