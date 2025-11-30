import React, { useState } from 'react';
import { Page } from '../types';
import { Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';
import { signInWithGoogle } from '../services/firebase';

interface LoginProps {
  setPage: (page: Page) => void;
}

const Login: React.FC<LoginProps> = ({ setPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError('');
    try {
      const user = await signInWithGoogle();
      console.log("Logged in user:", user);
      // Here you would typically save user info to context
      setPage('HOME');
    } catch (err: any) {
      console.error("Login Error:", err);
      // Display the actual error message (e.g., domain unauthorized, popup closed)
      setError(err.message || 'Failed to sign in with Google. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login delay
    setTimeout(() => {
        setIsLoading(false);
        alert('Logged in successfully! (Demo - use Google for real auth)');
        setPage('HOME');
    }, 1500);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=2000&auto=format&fit=crop" 
          alt="Aquarium Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-black/80"></div>
      </div>

      {/* Main Content Card */}
      <div className="relative z-10 w-full max-w-5xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/10 m-4">
        
        {/* Left Side: Brand & Visual */}
        <div className="hidden md:flex flex-col justify-center items-start p-12 w-1/2 bg-blue-900/40 text-white">
          <h2 className="text-4xl font-extrabold mb-4">Welcome Back to eFarm</h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Your premium gateway to aquatic life, thriving plants, and quality poultry.
            Sign in to manage your orders and explore our latest collections.
          </p>
          <div className="flex items-center gap-2 text-sm text-blue-200">
            <div className="h-1 w-12 bg-green-400 rounded-full"></div>
            <span>Trusted by 10,000+ Farmers & Hobbyists</span>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-white flex flex-col justify-center">
          <div className="text-center md:text-left mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Sign In</h3>
            <p className="text-gray-500 mt-2">Access your account dashboard</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-600 text-xs rounded-md border border-red-100 break-words">
              {error}
            </div>
          )}

          {/* Google Sign In Button */}
          <button 
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition duration-300 shadow-sm mb-6 group"
          >
            {isLoading ? (
               <Loader2 className="animate-spin text-gray-500" />
            ) : (
                <>
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                <span>Continue with Google</span>
                </>
            )}
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500 hover:underline">Forgot Password?</a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {isLoading ? <Loader2 className="animate-spin" /> : 'Sign In Account'}
              {!isLoading && <ArrowRight className="ml-2 w-4 h-4" />}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <button onClick={() => setPage('SIGNUP')} className="font-bold text-blue-600 hover:text-blue-500 hover:underline">
              Create an account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;