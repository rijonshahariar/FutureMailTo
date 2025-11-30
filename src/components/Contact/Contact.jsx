import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-gray-400 text-xl">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 p-8 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Whether you have technical questions, feature suggestions, or just want to share your FutureMailTo experience, 
              we're here to help. Send us an email and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
              <a 
                href="mailto:support@futuremailto.us" 
                className="text-xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 font-semibold"
              >
                support@futuremailto.us
              </a>
            </div>

            <div className="pt-8 border-t border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Follow Our Journey</h3>
              <p className="text-gray-400 mb-6">
                Stay updated on new features and improvements to FutureMailTo.
              </p>
              
              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com/rijonshahariar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block rounded-full p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-gray-700"
                  aria-label="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/shahariar-rijon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block rounded-full p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-blue-600"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
