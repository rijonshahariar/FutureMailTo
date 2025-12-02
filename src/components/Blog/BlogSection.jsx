import { Link } from 'react-router-dom';
import { getAllPosts, formatDate, calculateReadTime } from '../../utils/blogUtils';

function BlogSection() {
  const posts = getAllPosts().slice(0, 3); // Get only 3 latest posts

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800/50 to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
            ✨ From Our Blog
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Insights & Stories
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore the art of writing to your future self and discover how others 
            are using time capsule letters for personal growth.
          </p>
        </div>

        {/* Blog Posts - Unique Horizontal Card Layout */}
        <div className="space-y-6">
          {posts.map((post, index) => (
            <Link 
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block"
            >
              <article 
                className={`relative flex flex-col lg:flex-row gap-6 p-6 rounded-2xl border border-gray-700/50 
                  bg-gradient-to-r ${index === 0 ? 'from-cyan-500/5 to-transparent' : index === 1 ? 'from-purple-500/5 to-transparent' : 'from-pink-500/5 to-transparent'}
                  hover:border-cyan-500/30 transition-all duration-500 
                  hover:shadow-2xl hover:shadow-cyan-500/5 hover:-translate-y-1`}
              >
                {/* Post Number - Large Background */}
                <div className="absolute top-4 right-4 lg:top-6 lg:right-8 text-7xl lg:text-9xl font-bold text-gray-700/20 select-none">
                  0{index + 1}
                </div>

                {/* Image */}
                <div className="relative w-full lg:w-72 h-48 lg:h-44 flex-shrink-0 rounded-xl overflow-hidden">
                  <img
                    src={post.image || '/og-futuremailto.jpg'}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  
                  {/* Category Badge */}
                  {post.category && (
                    <span className="absolute bottom-3 left-3 px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/20">
                      {post.category}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center relative z-10">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(post.date)}
                    </span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {calculateReadTime(post.content)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Description */}
                  {/* <p className="text-gray-400 line-clamp-2 mb-4 hidden sm:block">
                    {post.description}
                  </p> */}

                  {/* Read More Arrow */}
                  <div className="flex items-center text-cyan-400 font-medium">
                    <span className="mr-2 group-hover:mr-4 transition-all duration-300">Read Article</span>
                    <svg 
                      className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Tags - Desktop Only */}
                {post.tags && post.tags.length > 0 && (
                  <div className="hidden xl:flex flex-col justify-center gap-2 pr-16">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-800/80 text-gray-400 text-xs rounded-full text-center whitespace-nowrap"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Link>
          ))}
        </div>

        {/* Read More Button */}
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-800/50 
              border border-gray-700 hover:border-cyan-500/50 rounded-full
              text-white font-semibold transition-all duration-300
              hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <span>Read More Posts</span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg 
                className="w-4 h-4 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
