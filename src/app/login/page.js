"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { auth, googleProvider } from '../firebase/Firebase.config'; // Adjust the import path
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { useRouter } from 'next/navigation'; // Use next/navigation for App Router
import Image from 'next/image';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Initialize useRouter from next/navigation

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Redirect to the homepage immediately after successful sign-in
      router.push('/'); // Navigate to the homepage
      
      // SweetAlert2 popup after redirect
      Swal.fire({
        title: 'Sign In Successful',
        text: 'You have successfully signed in!',
        icon: 'success',
        confirmButtonText: 'Go to Homepage',
      });
    } catch (error) {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
        // Show custom alert if the user is not found or if invalid credentials are provided
        Swal.fire({
          title: 'Sign Up First',
          text: 'Please sign up before signing in or give correct email and pass.',
          icon: 'warning',
          confirmButtonText: 'Go to Sign Up',
        }).then((result) => {
          if (result.isConfirmed) {
            router.push('/signup'); // Redirect to the sign-up page
          }
        });
      } else {
        setError(error.message);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      // Redirect to the homepage immediately after successful Google login
      router.push('/'); // Navigate to the homepage

      // SweetAlert2 popup after redirect
      Swal.fire({
        title: 'Welcome!',
        text: `Welcome ${user.displayName}`,
        icon: 'success',
        confirmButtonText: 'Go to Homepage',
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex mt-16 items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Sign In to Your Account</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form className="space-y-6" onSubmit={handleSignIn}>
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
            Sign In
          </button>
        </form>

        <div className="flex items-center justify-center mt-6 space-x-4">
          <div className="w-full">
            <button
              className="w-full py-3 text-white rounded-lg flex items-center justify-center transition ease-in-out"
              onClick={handleGoogleSignIn}
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
          Do not have an account?{' '}
          <Link
            href="/signup"
            className="text-indigo-600 hover:text-indigo-500 transition ease-in-out"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
