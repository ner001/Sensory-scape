import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const SignIn = () => {
  const { signIn } = useAuth(); // Access signIn function from AuthContext
  const navigate = useNavigate(); // For navigation

  const handleSignIn = () => {
    signIn(); // Sign in logic
    navigate('/'); // Navigate to the home page after sign-in
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-teal-500">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-8 space-y-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800">Welcome to SensoryScape</h1>
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-3 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700 font-medium" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-3 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              type="button"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <a 
              href="#"
              className="text-green-500 hover:text-green-700"
            >
              Forgot Password?
            </a>
            <p>
              Don't have an account?{' '}
              <a
                href="#"
              >
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

