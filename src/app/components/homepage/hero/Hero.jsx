"use client";
import React from 'react';
import Link from 'next/link';

const Hero = () => (
  <section className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white py-20 text-center">
    <h1 className="text-3xl md:text-5xl font-bold">Master English with Expert Guidance</h1>
    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
      Comprehensive courses, practical tests, and expert advice for every learner..
    </p>
    <div className="mt-6 space-x-4">
      <Link href="/courses" className="bg-yellow-300 text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-yellow-400 transition">Get Started</Link>
      <Link href="/explore" className="bg-gray-900 text-yellow-300 py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition">Explore Courses</Link>
    </div>
  </section>
);

export default Hero;
