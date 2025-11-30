import { useEffect, useRef } from 'react';

function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      
      <div ref={titleRef} className="text-center px-8 py-16 max-w-5xl mx-auto opacity-0">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <h1 className="relative text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent
            animate-gradient leading-tight">
            Write a Letter to<br />your Future Self
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 animate-fade-in-up max-w-3xl mx-auto">
          Send your future self some words of inspiration, goals to achieve, 
          or just check in to see where you'll be.
        </p>
        <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium
          bg-gradient-to-r from-cyan-400 to-purple-500 
          hover:from-purple-500 hover:to-cyan-400
          text-gray-900 rounded-xl transition-all duration-300
          hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]
          active:scale-95">
          <span className="relative">Write to Future You</span>
          <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Hero; 