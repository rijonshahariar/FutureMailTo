import React from 'react';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            How It Works
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Sending messages to your future self is simple and secure. Follow these easy steps to get started.
          </p>
        </div>

        {/* YouTube Video Section */}
        <div className="mb-16">
          <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Watch How FutureMailTo Works</h2>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/ZT7eousaPr4"
                title="How FutureMailTo Works"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="flex items-start space-x-6 p-8 bg-gray-800/50 rounded-2xl border border-gray-700/50">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                1
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Write Your Message</h3>
              <p className="text-gray-300 leading-relaxed">
                Compose your letter with goals, reflections, predictions, or encouragement. Share your current thoughts, dreams, and aspirations with your future self.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-6 p-8 bg-gray-800/50 rounded-2xl border border-gray-700/50">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                2
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Choose Delivery Date</h3>
              <p className="text-gray-300 leading-relaxed">
                Select when you want to receive your message - in 6 months, 1 year, 5 years, or any custom date in the future. The choice is yours.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-6 p-8 bg-gray-800/50 rounded-2xl border border-gray-700/50">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                3
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Secure Storage</h3>
              <p className="text-gray-300 leading-relaxed">
                Your message is encrypted and stored securely in our database. No one can access it until the delivery date you specified arrives.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-6 p-8 bg-gray-800/50 rounded-2xl border border-gray-700/50">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                4
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Receive Your Message</h3>
              <p className="text-gray-300 leading-relaxed">
                On your chosen date, you'll receive your message directly in your inbox. Discover how much you've grown and what dreams you've achieved.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="/" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium
            bg-gradient-to-r from-cyan-400 to-purple-500 
            hover:from-purple-500 hover:to-cyan-400
            text-gray-900 rounded-xl transition-all duration-300
            hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]
            active:scale-95">
            <span className="relative">Start Writing Now</span>
            <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
