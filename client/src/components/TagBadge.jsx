import React from 'react';

const TagBadge = ({ tag }) => {
  const getTagColor = (tag) => {
    const colors = {
      frontend: 'bg-blue-100 text-blue-800',
      backend: 'bg-green-100 text-green-800',
      database: 'bg-purple-100 text-purple-800',
      devops: 'bg-orange-100 text-orange-800',
      mobile: 'bg-pink-100 text-pink-800'
    };
    return colors[tag] || 'bg-gray-100 text-gray-800';
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTagColor(tag)}`}>
      {tag}
    </span>
  );
};

export default TagBadge; 