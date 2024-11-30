import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Make sure your AuthContext provides signIn function

const SignIn = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate(); // For navigation

  // State for managing form input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle the sign-in process
  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent page reload
    await signIn(email, password); // Call the signIn function with email and password
    navigate('/dashboard'); // Redirect to the dashboard after sign-in
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-gray-800">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center text-gray-800">Welcome to SensoryScape</h1>
        <form className="space-y-6" onSubmit={handleSignIn}>
          {/* Email input */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-3 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              required
            />
          </div>

          {/* Password input */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-3 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              required
            />
          </div>

          {/* Sign-In Button */}
          <div className="flex items-center justify-between">
            <button
              className="w-full py-3 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              type="submit"
            >
              Sign In
            </button>
          </div>

          {/* Links for forgot password and sign up */}
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
                href="/signup" // Redirect to signup page
                className="text-green-500 hover:text-green-700"
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
