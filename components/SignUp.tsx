import React, { useState } from 'react';
import { Page } from '../types';
import { Mail, Lock, User, ArrowRight, Loader2 } from 'lucide-react';
import { signInWithGoogle } from '../services/firebase';

interface SignUpProps {
  setPage: (page: Page) => void;
}

const SignUp: React.FC<SignUpProps> = ({ setPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    setError('');
    try {
      const user = await signInWithGoogle();
      console.log("Signed up user:", user);
      // Here you would typically save user info to context
      setPage('HOME');
    } catch (err: any) {
      console.error("SignUp Error:", err);
      setError(err.message || 'Failed to sign up with Google. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setIsLoading(true);
    // Simulate signup delay
    setTimeout(() => {
        setIsLoading(false);
        alert('Account created successfully! (Demo)');
        setPage('LOGIN');
    }, 1500);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534943441045-c496264d86b7?q=80&w=2000&auto=format&fit=crop" 
          alt="Nature Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-bl from-green-900/80 to-black/80"></div>
      </div>

      {/* Main Content Card */}
      <div className="relative z-10 w-full max-w-5xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row-reverse border border-white/10 m-4">
        
        {/* Right Side: Visual */}
        <div className="hidden md:flex flex-col justify-center items-start p-12 w-1/2 bg-green-900/40 text-white">
          <h2 className="text-4xl font-extrabold mb-4">Join the eFarm Family</h2>
          <p className="text-green-100 text-lg mb-8 leading-relaxed">
             Start your journey with premium livestock, expert advice, and a community of passionate farmers.
          </p>
          <ul className="space-y-4 text-green-50">
            <li className="flex items-center gap-3">
               <div className="bg-green-500/20 p-2 rounded-full"><User size={16} /></div>
               <span>Access to Exclusive Breeds</span>
            </li>
            <li className="flex items-center gap-3">
               <div className="bg-green-500/20 p-2 rounded-full"><User size={16} /></div>
               <span>Track Orders in Real-time</span>
            </li>
            <li className="flex items-center gap-3">
               <div className="bg-green-500/20 p-2 rounded-full"><User size={16} /></div>
               <span>Earn Rewards on Every Purchase</span>
            </li>
          </ul>
        </div>

        {/* Left Side: Sign Up Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-white flex flex-col justify-center">
          <div className="text-center md:text-left mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Create Account</h3>
            <p className="text-gray-500 mt-2">Get started with your free account today</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-600 text-xs rounded-md border border-red-100 break-words">
              {error}
            </div>
          )}

          {/* Google Button */}
           <button 
            onClick={handleGoogleSignUp}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition duration-300 shadow-sm mb-6 group"
          >
            {isLoading ? (
               <Loader2 className="animate-spin text-gray-500" />
            ) : (
                <>
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                <span>Sign up with Google</span>
                </>
            )}
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or register with email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                </div>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                  </div>
                  <input
                    type="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                  </div>
                  <input
                    type="password"
                    name="confirmPassword"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 mt-2"
            >
              {isLoading ? <Loader2 className="animate-spin" /> : 'Create Account'}
              {!isLoading && <ArrowRight className="ml-2 w-4 h-4" />}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button onClick={() => setPage('LOGIN')} className="font-bold text-green-600 hover:text-green-500 hover:underline">
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;