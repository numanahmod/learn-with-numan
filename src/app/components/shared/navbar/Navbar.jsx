"use client"; // This ensures the component is client-side rendered

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FiMenu,
  FiX,
  FiBook,
  FiPenTool,
  FiHelpCircle,
  FiEdit,
  FiLogIn,
  FiHome,
  FiLogOut
} from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../../firebase/Firebase.config';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [bgColor, setBgColor] = useState('bg-gradient-to-r from-blue-400 via-teal-500 to-green-500');
  const [isClient, setIsClient] = useState(false);
  const [user, setUser] = useState(null);
  const pathname = usePathname();

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  useEffect(() => {
    setBgColor('bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 bg-opacity-90');
    setIsClient(true);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const getLinkClass = (path) => {
    return pathname === path ? 'text-yellow-300' : 'hover:text-yellow-300 text-white';
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      <nav className={`${bgColor} fixed top-0 left-0 w-full p-4 shadow-md z-50 text-white`}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-2xl font-extrabold">
            <Link href="/" className="hover:text-yellow-300 transition duration-300">
              Learn English with Numan
            </Link>
          </div>

          <button
            onClick={handleSidebarToggle}
            className="text-white md:hidden focus:outline-none hover:text-yellow-300 transition duration-300"
          >
            {isSidebarOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>

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
            {user ? (
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-1 text-white hover:text-yellow-300"
              >
                <FiLogOut /> <span>Log Out</span>
              </button>
            ) : (
              <Link href="/signup" className={`flex items-center space-x-1 ${getLinkClass('/signup')}`}>
                <FiLogIn /> <span>Sign up</span>
              </Link>
            )}
          </div>
        </div>

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
              <Link href="/" className={`flex items-center space-x-2 ${getLinkClass('/')}`}>
                <FiHome /> <span>Home</span>
              </Link>
            </li>
            <li onClick={closeSidebar}>
              <Link href="/ssc" className={`flex items-center space-x-2 ${getLinkClass('/ssc')}`}>
                <FiBook /> <span>SSC</span>
              </Link>
            </li>
            <li onClick={closeSidebar}>
              <Link href="/spoken" className={`flex items-center space-x-2 ${getLinkClass('/spoken')}`}>
                <FiBook /> <span>Spoken</span>
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
            <li onClick={closeSidebar}>
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-2 text-white hover:text-yellow-300"
                >
                  <FiLogOut /> <span>Log Out</span>
                </button>
              ) : (
                <Link href="/signup" className={`flex items-center space-x-2 ${getLinkClass('/signup')}`}>
                  <FiLogIn /> <span>Sign up</span>
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
