import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';

function Login() {
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);


  const { signInWithGoogle } = useAuth();
  const { currentUser } = useAuth();
  const { signInAnonymous } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (currentUser) {
    return <Navigate to="/" replace />;
  }

  const handleAnonymousSignIn = async () => {
    setIsLoading1(true);
    try {
      await signInAnonymous();
      if (location.state?.from) {
        navigate(location.state.from, {
          state: { formData: location.state.formData }
        });
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Sign in failed:', error);
    } finally {
      setIsLoading1(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading2(true);
    try {
      await signInWithGoogle();
      // Redirect back to the previous page with saved form data
      if (location.state?.from) {
        navigate(location.state.from, {
          state: { formData: location.state.formData }
        });
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error("Error signing in:", error);
    } finally {
      setIsLoading2(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logo/Brand */}
        <a href="/" className="flex justify-center mb-8 group">
          <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent
            hover:from-purple-500 hover:to-cyan-400 transition-all duration-500">
            FutureMailTo
          </span>
        </a>

        {/* Main Card */}
        <div className="bg-gray-800 py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-gray-700">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-200 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-400">
              Sign in to start time traveling
            </p>
          </div>

          {/* Google Sign In Button */}
          <button
            onClick={handleGoogleSignIn}
            disabled={isLoading2}
            className="w-full cursor-pointer flex items-center justify-center px-8 py-4 border border-gray-700 rounded-xl
              text-lg font-medium text-gray-200 bg-gray-900
              hover:bg-gray-700 hover:border-gray-600
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
              transition-all duration-300 relative group
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {!isLoading2 && (
              <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  className="fill-[#4285F4]"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  className="fill-[#34A853]"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  className="fill-[#FBBC05]"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  className="fill-[#EA4335]"
                />
              </svg>
            )}
            {isLoading2 ? (
              <svg className="animate-spin h-5 w-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              "Sign in with Google"
            )}
          </button>

          <button
            onClick={handleAnonymousSignIn}
            disabled={isLoading1}
            className="w-full cursor-pointer mt-2 flex items-center justify-center px-8 py-4 border border-gray-700 rounded-xl
              text-lg font-medium text-gray-200 bg-gray-900
              hover:bg-gray-700 hover:border-gray-600
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
              transition-all duration-300 relative group
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {!isLoading1 && (
              <p className='text-xl mr-3'>👻</p>
            )}
            {isLoading1 ? (
              <svg className="animate-spin h-5 w-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              "Use as a Ghost"
            )}
          </button>

          {/* Terms and Privacy */}
          <p className="mt-6 text-center text-sm text-gray-400">
            By signing in, you agree to our{' '}
            <a href="/terms-conditions" className="text-purple-400 hover:text-purple-300">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy-policy" className="text-purple-400 hover:text-purple-300">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login; 