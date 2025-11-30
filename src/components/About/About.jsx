import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About FutureMailTo
          </h1>
          <p className="text-gray-400 text-xl">
            Connecting your present self with your future dreams and aspirations.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              FutureMailTo exists to help people reflect, grow, and stay connected with their goals over time. In our fast-paced world, we often lose sight of our dreams and forget the person we wanted to become.
            </p>
            <p className="text-gray-300 leading-relaxed">
              By writing to your future self, you create a bridge between who you are today and who you aspire to be tomorrow. It's a powerful tool for self-reflection, goal setting, and personal growth.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Who We Help</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Whether you're a student planning your career, a professional setting new goals, or someone simply wanting to capture this moment in time, FutureMailTo is for anyone who believes in the power of intentional reflection.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our users write about career aspirations, personal milestones, relationship goals, or simply document their current thoughts and feelings to revisit years later.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Built with Care</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Created by Shahariar Rijon, FutureMailTo combines thoughtful design with robust technology. We use modern web technologies and secure cloud infrastructure to ensure your messages are safe and delivered reliably.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Every feature is designed with privacy and user experience in mind, because we believe your future correspondence should be both meaningful and secure.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="/" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium
            bg-gradient-to-r from-cyan-400 to-purple-500 
            hover:from-purple-500 hover:to-cyan-400
            text-gray-900 rounded-xl transition-all duration-300
            hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]
            active:scale-95">
            <span className="relative">Start Your Journey</span>
            <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About; 