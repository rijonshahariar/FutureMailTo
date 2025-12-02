// Import all markdown files from posts directory
const postFiles = import.meta.glob('/src/posts/*.md', { 
  eager: true, 
  query: '?raw',
  import: 'default'
});

// Simple frontmatter parser (browser-compatible, no gray-matter needed)
function parseFrontmatter(fileContent) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);
  
  if (!match) {
    return { data: {}, content: fileContent };
  }
  
  const frontmatterBlock = match[1];
  const content = match[2];
  const data = {};
  
  // Parse YAML-like frontmatter
  const lines = frontmatterBlock.split('\n');
  let currentKey = null;
  let isArray = false;
  
  for (const line of lines) {
    // Check for array items
    if (line.trim().startsWith('- ') && currentKey && isArray) {
      const value = line.trim().substring(2).trim().replace(/['"]/g, '');
      if (!Array.isArray(data[currentKey])) {
        data[currentKey] = [];
      }
      data[currentKey].push(value);
      continue;
    }
    
    // Check for key-value pairs - match only the first colon
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      // Skip if key contains spaces (not a valid key)
      if (key.includes(' ')) continue;
      
      // Check if this starts an array
      if (value === '') {
        currentKey = key;
        isArray = true;
        data[key] = [];
        continue;
      }
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Parse inline arrays [item1, item2]
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(item => item.trim().replace(/['"]/g, ''));
      }
      
      data[key] = value;
      currentKey = key;
      isArray = false;
    }
  }
  
  return { data, content };
}

// Parse all posts and extract frontmatter
export function getAllPosts() {
  const posts = Object.entries(postFiles).map(([filepath, content]) => {
    const { data, content: body } = parseFrontmatter(content);
    
    // Extract slug from filename if not in frontmatter
    const filename = filepath.split('/').pop().replace('.md', '');
    const slug = data.slug || filename;
    
    return {
      ...data,
      slug,
      content: body,
      filepath
    };
  });

  // Sort by date descending (newest first)
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Get a single post by slug
export function getPostBySlug(slug) {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug) || null;
}

// Get all unique categories
export function getAllCategories() {
  const posts = getAllPosts();
  const categories = [...new Set(posts.map(post => post.category).filter(Boolean))];
  return categories;
}

// Get all unique tags
export function getAllTags() {
  const posts = getAllPosts();
  const allTags = posts.flatMap(post => post.tags || []);
  return [...new Set(allTags)];
}

// Get posts by category
export function getPostsByCategory(category) {
  const posts = getAllPosts();
  return posts.filter(post => post.category === category);
}

// Get posts by tag
export function getPostsByTag(tag) {
  const posts = getAllPosts();
  return posts.filter(post => post.tags && post.tags.includes(tag));
}

// Format date for display
export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

// Calculate read time
export function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}
