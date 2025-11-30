import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieConsentModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowModal(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowModal(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowModal(false);
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm w-full">
      <div className="bg-gray-800/95 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 shadow-2xl">
        <div className="text-left">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">Cookie Preferences</h3>
          </div>
          
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            We use cookies to improve your experience. Read our{' '}
            <Link 
              to="/privacy-policy" 
              className="text-cyan-400 hover:text-purple-400 transition-colors duration-300 underline"
            >
              Privacy Policy
            </Link>
            {' '}for more details.
          </p>
          
          <div className="flex gap-3">
            <button
              onClick={handleReject}
              className="flex-1 px-4 py-2 text-sm text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 px-4 py-2 text-sm bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-purple-500 hover:to-cyan-400 text-gray-900 font-medium rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentModal;
