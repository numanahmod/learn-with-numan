
"use client"// pages/login.js
import { useState } from 'react';
import Link from 'next/link';
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 pt-5 flex items-center text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-gray-600">Remember me</label>
            </div>
            <Link href="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            Login
          </button>
        </form>
        <div className="flex items-center justify-between">
          <div className="w-1/2 px-2">
            <button className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 flex items-center justify-center">
              <FaFacebook className="mr-2" /> Login with Facebook
            </button>
          </div>
          <div className="w-1/2 px-2">
            <button className="w-full py-2 text-white bg-red-500 rounded-md hover:bg-red-600 flex items-center justify-center">
              <FaGoogle className="mr-2" /> Login with Google
            </button>
          </div>
        </div>
        <p className="text-sm text-center text-gray-600">
          Do not have an account?{' '}
          <Link href="/signup" className="text-indigo-600 hover:text-indigo-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
