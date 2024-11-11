import React from 'react';
import Link from 'next/link';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="py-10 animate-gradient bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white">
      <div className="container mx-auto px-4 space-y-10">
        {/* Project Name and Description */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-yellow-300">Learn English with Numan</h2>
          <p className="text-lg mt-2 max-w-lg mx-auto text-gray-200">
            Improve your English skills with comprehensive courses, insightful blogs, and expert guidance. Join us today!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-8">
          <Link href="/courses" className="text-gray-200 hover:text-yellow-300 transition duration-300">Courses</Link>
          <Link href="/blogs" className="text-gray-200 hover:text-yellow-300 transition duration-300">Blogs</Link>
          <Link href="/helpline" className="text-gray-200 hover:text-yellow-300 transition duration-300">Helpline</Link>
          <Link href="/test" className="text-gray-200 hover:text-yellow-300 transition duration-300">Test</Link>
          <Link href="/login" className="text-gray-200 hover:text-yellow-300 transition duration-300">Login</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-yellow-300 transition duration-300">
            <FiFacebook size={26} />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-yellow-300 transition duration-300">
            <FiTwitter size={26} />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-yellow-300 transition duration-300">
            <FiInstagram size={26} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-yellow-300 transition duration-300">
            <FiLinkedin size={26} />
          </Link>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Learn English with Numan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
