import { Link } from 'react-router-dom';
import { getAllPosts, formatDate, calculateReadTime } from '../../utils/blogUtils';

function BlogList() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-900 pt-32 pb-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              FutureMailTo Blog
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover insights about writing to your future self, personal growth, 
            and the psychology of time capsules.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.slug}
              className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Post Image */}
              <Link to={`/blog/${post.slug}`}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || '/og-futuremailto.jpg'}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {post.category && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  )}
                </div>
              </Link>

              {/* Post Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span>{formatDate(post.date)}</span>
                  <span>•</span>
                  <span>{calculateReadTime(post.content)}</span>
                </div>

                {/* Title */}
                <Link to={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </Link>

                {/* Description */}
                {/* <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.description}
                </p> */}

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Read More Link */}
                {/* <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Read More
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link> */}
              </div>
            </article>
          ))}
        </div>

        {/* No Posts Message */}
        {posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No blog posts found.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-800/40 rounded-2xl p-8 md:p-12 border border-gray-700/50">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Write to Your Future Self?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Start your journey of self-reflection today. Write a letter, set a delivery date, 
              and let your future self discover the message when the time is right.
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Write Your Letter
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
