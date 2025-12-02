import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopUserMenuOpen, setIsDesktopUserMenuOpen] = useState(false);
  const [isMobileUserMenuOpen, setIsMobileUserMenuOpen] = useState(false);
  
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const isAnony = currentUser ? currentUser.isAnonymous : false;

  const desktopUserMenuRef = useRef();
  const mobileUserMenuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (desktopUserMenuRef.current && !desktopUserMenuRef.current.contains(event.target)) {
        setIsDesktopUserMenuOpen(false);
      }
      if (mobileUserMenuRef.current && !mobileUserMenuRef.current.contains(event.target)) {
        setIsMobileUserMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setIsDesktopUserMenuOpen(false);
      setIsMobileUserMenuOpen(false);
      setIsMobileMenuOpen(false);
      sessionStorage.removeItem('formData');
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // User Menu Component to avoid duplication
  const UserMenu = ({ isMobile = false }) => {
    const menuRef = isMobile ? mobileUserMenuRef : desktopUserMenuRef;
    const isOpen = isMobile ? isMobileUserMenuOpen : isDesktopUserMenuOpen;
    const setIsOpen = isMobile ? setIsMobileUserMenuOpen : setIsDesktopUserMenuOpen;

    return (
      <div className={`${isMobile ? '' : 'relative'}`} ref={menuRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex cursor-pointer items-center space-x-3 focus:outline-none"
        >
          <img 
              src={isAnony ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTelZ7W2tOs5kd_GIOw595myZLLf4KBda-Q5w&s" : currentUser.photoURL}
              alt={currentUser.displayName}
            className="w-10 h-10 rounded-full border-2 border-purple-500"
          />
          <svg className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className={`absolute right-0 mt-2 w-48 bg-gray-800 rounded-xl shadow-lg border border-gray-700 py-1 z-50`} onClick={(e) => e.stopPropagation()}>
            <Link
              to="/dashboard"
              className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsOpen(false);
              }}
            >
              My Emails
            </Link>
            <Link
              to="/profile"
              className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsOpen(false);
              }}
            >
             My Profile
            </Link>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleLogout();
              }}
              className="block cursor-pointer w-full text-left px-4 py-2 text-gray-200 hover:bg-gray-700"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-500 bg-gray-900/90 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0">
            <Link to="/" className="group flex items-center">
              <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent
                hover:from-purple-500 hover:to-cyan-400 transition-all duration-500">
                FutureMailTo
              </span>
            </Link>
          </div>

          {/* Mobile menu button or User Icon */}
          <div className="flex lg:hidden">
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-300 hover:text-white focus:outline-none"
                  aria-label="Toggle mobile menu"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
                <UserMenu isMobile={true} />
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-300 hover:text-white focus:outline-none"
                  aria-label="Toggle mobile menu"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
                <Link to="/login" 
                  className="relative inline-flex items-center px-4 py-3 text-lg font-medium
                    bg-gradient-to-r from-cyan-400 to-purple-500 
                    hover:from-purple-500 hover:to-cyan-400
                    text-gray-900 rounded-xl transition-all duration-300
                    hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]
                    active:scale-95">
                  <span className="relative">Login</span>
                </Link>
              </div>
            )}
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link to="/" className="nav-link group">
              <span className="relative text-lg">Home</span>
            </Link>
            <Link to="/about" className="nav-link group">
              <span className="relative text-lg">About</span>
            </Link>
            <Link to="/how-it-works" className="nav-link group">
              <span className="relative text-lg">How It Works</span>
            </Link>
            <Link to="/faq" className="nav-link group">
              <span className="relative text-lg">FAQ</span>
            </Link>
            <Link to="/blog" className="nav-link group">
              <span className="relative text-lg">Blog</span>
            </Link>
            <Link to="/contact" className="nav-link group">
              <span className="relative text-lg">Contact</span>
            </Link>
            {currentUser && (
              <Link to="/dashboard" 
                className="nav-link group flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="relative text-lg">Dashboard</span>
              </Link>
            )}
            {currentUser ? (
              <UserMenu />
            ) : (
              <Link to="/login" 
                className="relative inline-flex items-center px-8 py-3 text-lg font-medium
                  bg-gradient-to-r from-cyan-400 to-purple-500 
                  hover:from-purple-500 hover:to-cyan-400
                  text-gray-900 rounded-xl transition-all duration-300
                  hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]
                  active:scale-95">
                <span className="relative">Get Started</span>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 pb-6' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="flex flex-col space-y-4 bg-gray-800/95 backdrop-blur-sm rounded-xl mt-4 p-6 border border-gray-700/50">
            <Link
              to="/"
              className="nav-link group py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative text-lg">Home</span>
            </Link>
            <Link
              to="/about"
              className="nav-link group py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative text-lg">About</span>
            </Link>
            <Link
              to="/how-it-works"
              className="nav-link group py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative text-lg">How It Works</span>
            </Link>
            <Link
              to="/faq"
              className="nav-link group py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative text-lg">FAQ</span>
            </Link>
            <Link
              to="/blog"
              className="nav-link group py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative text-lg">Blog</span>
            </Link>
            <Link
              to="/contact"
              className="nav-link group py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative text-lg">Contact</span>
            </Link>
            {currentUser && (
              <Link
                to="/dashboard"
                className="nav-link group py-2 flex items-center space-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="relative text-lg">Dashboard</span>
              </Link>
            )}
            {!currentUser && (
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium
                  bg-gradient-to-r from-cyan-400 to-purple-500 
                  hover:from-purple-500 hover:to-cyan-400
                  text-gray-900 rounded-xl transition-all duration-300
                  hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]
                  active:scale-95 mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative">Get Started</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 