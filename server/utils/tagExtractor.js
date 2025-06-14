const extractTags = (description) => {
  const tags = [];
  const keywords = {
    frontend: ['react', 'vue', 'angular', 'javascript', 'typescript', 'html', 'css'],
    backend: ['node', 'express', 'django', 'flask', 'python', 'java', 'spring'],
    database: ['mongodb', 'mysql', 'postgresql', 'redis'],
    devops: ['docker', 'kubernetes', 'aws', 'azure', 'gcp'],
    mobile: ['react native', 'flutter', 'ios', 'android']
  };

  Object.entries(keywords).forEach(([category, words]) => {
    if (words.some(word => description.toLowerCase().includes(word))) {
      tags.push(category);
    }
  });

  return tags;
};

module.exports = extractTags; 