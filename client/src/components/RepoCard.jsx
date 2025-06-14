import React from 'react';
import TagBadge from './TagBadge';

const RepoCard = ({ repo }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <img
            src={repo.owner.avatarUrl}
            alt={`${repo.owner.login}'s avatar`}
            className="w-12 h-12 rounded-full border border-gray-200"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900 truncate">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  {repo.fullName}
                </a>
              </h3>
            </div>
            <p className="text-sm text-gray-500 mb-2">by {repo.owner.login}</p>
          </div>
        </div>

        <p className="mt-4 text-gray-600 line-clamp-2">
          {repo.description || 'No description available'}
        </p>

        {repo.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {repo.tags.map((tag, index) => (
              <TagBadge key={index} tag={tag} />
            ))}
          </div>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-medium">{repo.stars.toLocaleString()}</span>
          </div>

          {repo.language && (
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-blue-500 mr-1.5"></span>
              <span>{repo.language}</span>
            </div>
          )}

          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Updated {formatDate(repo.updatedAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard; 