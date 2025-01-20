"use client"; // This ensures the component is client-side rendered

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiBook, FiPenTool, FiHelpCircle, FiEdit, FiLogIn, FiHome, FiLogOut } from 'react-icons/fi';
import { usePathname } from 'next/navigation'; // Import usePathname
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../../firebase/Firebase.config'; // Import your Firebase auth configuration

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [bgColor, setBgColor] = useState('bg-gradient-to-r from-blue-400 via-teal-500 to-green-500');
  const [isClient, setIsClient] = useState(false); // State to track if component is mounted
  const [user, setUser] = useState(null); // State to track the authenticated user
  const pathname = usePathname(); // Get the current route using usePathname

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Sign out the user
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  useEffect(() => {
    setBgColor('bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 bg-opacity-90'); // Semi-transparent background
    setIsClient(true); // Set isClient to true after mount

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Set the user state when authentication state changes
    });

    return () => unsubscribe(); // Cleanup the listener when the component unmounts
  }, []);

  const getLinkClass = (path) => {
    return pathname === path ? 'text-yellow-300' : 'hover:text-yellow-300 text-white'; // Add active class (text-yellow-300) to active link
  };

  if (!isClient) {
    return null; // Return null until the component is client-side
  }

  return (
    <>
      {/* Navbar */}
      <nav className={`${bgColor} fixed top-0 left-0 w-full p-4 shadow-md z-50 text-white`}>
        <div className="container mx-auto flex items-center justify-between">
          {/* Project Name */}
          <div className="text-white text-2xl font-extrabold">
            <Link href="/" className="hover:text-yellow-300 transition duration-300">Learn English with Numan</Link>
          </div>

          {/* Hamburger Button for Mobile */}
          <button
            onClick={handleSidebarToggle}
            className="text-white md:hidden focus:outline-none hover:text-yellow-300 transition duration-300"
          >
            {isSidebarOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>

          {/* Navbar Links for Desktop */}
          <div className="hidden md:flex space-x-6 font-medium">
            <Link href="/" className={`flex items-center space-x-1 ${getLinkClass('/')}`}>
              <FiHome /> <span>Home</span>
            </Link>
            <Link href="/ssc" className={`flex items-center space-x-1 ${getLinkClass('/ssc')}`}>
              <FiBook /> <span>SSC</span>
            </Link>
            <Link href="/spoken" className={`flex items-center space-x-1 ${getLinkClass('/spoken')}`}>
              <FiBook /> <span>Spoken</span>
            </Link>
            <Link href="/blogs" className={`flex items-center space-x-1 ${getLinkClass('/blogs')}`}>
              <FiPenTool /> <span>Blogs</span>
            </Link>
            <Link href="/helpline" className={`flex items-center space-x-1 ${getLinkClass('/helpline')}`}>
              <FiHelpCircle /> <span>Helpline</span>
            </Link>
            <Link href="/test" className={`flex items-center space-x-1 ${getLinkClass('/test')}`}>
              <FiEdit /> <span>Test</span>
            </Link>
            {/* Conditionally render SignIn/SignOut based on user state */}
            {user ? (
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-1 text-white hover:text-yellow-300"
              >
                <FiLogOut /> <span>Log Out</span>
              </button>
            ) : (
              <Link href="/login" className={`flex items-center space-x-1 ${getLinkClass('/login')}`}>
                <FiLogIn /> <span>Sign In</span>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeSidebar}
          />
        )}
        <div
          className={`fixed top-0 right-0 h-full w-64 ${bgColor} text-white z-50 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out shadow-lg`}
        >
          <button
            onClick={closeSidebar}
            className="text-white p-4 focus:outline-none hover:text-yellow-300 transition duration-300"
          >
            <FiX size={24} />
          </button>
          <ul className="flex flex-col space-y-6 p-6 text-lg">
            <li onClick={closeSidebar}>
              <Link href="/courses" className={`flex items-center space-x-2 ${getLinkClass('/courses')}`}>
                <FiBook /> <span>My Courses</span>
              </Link>
            </li>
            <li onClick={closeSidebar}>
              <Link href="/blogs" className={`flex items-center space-x-2 ${getLinkClass('/blogs')}`}>
                <FiPenTool /> <span>Blogs</span>
              </Link>
            </li>
            <li onClick={closeSidebar}>
              <Link href="/helpline" className={`flex items-center space-x-2 ${getLinkClass('/helpline')}`}>
                <FiHelpCircle /> <span>Helpline</span>
              </Link>
            </li>
            <li onClick={closeSidebar}>
              <Link href="/test" className={`flex items-center space-x-2 ${getLinkClass('/test')}`}>
                <FiEdit /> <span>Test</span>
              </Link>
            </li>
            {/* Conditionally render SignIn/SignOut for mobile */}
            <li onClick={closeSidebar}>
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-2 text-white hover:text-yellow-300"
                >
                  <FiLogOut /> <span>Log Out</span>
                </button>
              ) : (
                <Link href="/login" className={`flex items-center space-x-2 ${getLinkClass('/login')}`}>
                  <FiLogIn /> <span>Sign In</span>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
