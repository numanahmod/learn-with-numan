"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { auth, googleProvider } from '../firebase/Firebase.config'; // Adjust the import path
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { useRouter } from 'next/navigation'; // Use next/navigation for App Router
import Image from 'next/image';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Initialize useRouter from next/navigation

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Create user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      
      // SweetAlert2 popup on success
      Swal.fire({
        title: 'Success!',
        text: 'You have successfully signed up.',
        icon: 'success',
        confirmButtonText: 'Go to Homepage',
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirect to homepage after success
          router.push('/'); // Navigate to the homepage
        }
      });
    } catch (error) {
      // Handle errors and display them
      setError(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      // Sign up with Google provider
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // SweetAlert2 popup after Google login
      Swal.fire({
        title: 'Welcome!',
        text: `Welcome ${user.displayName}`,
        icon: 'success',
        confirmButtonText: 'Go to Homepage',
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirect to homepage after Google sign up
          router.push('/'); // Navigate to the homepage
        }
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex mt-16 items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Create Your Account</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form className="space-y-6" onSubmit={handleSignUp}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 text-black py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out text-black"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 pt-8 right-3 flex items-center text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition ease-in-out"
          >
            Sign Up
          </button>
        </form>
        
        <div className="flex items-center justify-center mt-6 space-x-4">
          <div className="w-full">
            <button
              className="w-full py-3 text-white rounded-lg flex items-center justify-center transition ease-in-out"
              onClick={handleGoogleSignUp}
            >
              <Image 
                src="/Google_logo_2013-2015-600x206.png" 
                alt="Google Logo" 
                width={100} 
                height={100} 
              />
            </button>
          </div>
        </div>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <Link href="/login" className="text-indigo-600 hover:text-indigo-500 transition ease-in-out">
            SignIn
          </Link>
        </p>
      </div>
    </div>
  );
}
