"use client";

import React from 'react';
import { FiDownload } from 'react-icons/fi';

const SpokenEnglish = () => {
  const pdfs = [
    { title: 'Lesson 1: Basics of Spoken English', url: '/pdfs/lesson1.pdf' },
    { title: 'Lesson 2: Common Phrases', url: '/pdfs/lesson2.pdf' },
    { title: 'Lesson 3: Grammar Essentials', url: '/pdfs/lesson3.pdf' },
    // Add more PDFs as needed
  ];

  return (
    <div className="container mt-20 mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Video Section */}
      <div className="md:col-span-2">
        <h1 className="text-3xl font-bold mb-4">Spoken English Class</h1>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Spoken English Class"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>

      {/* PDF Sidebar */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Class Materials</h2>
        <ul className="space-y-4">
          {pdfs.map((pdf, index) => (
            <li key={index} className="flex items-center justify-between p-2 border-b">
              <span className="text-gray-800">{pdf.title}</span>
              <a
                href={pdf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 flex items-center space-x-1 transition duration-300"
              >
                <FiDownload /> <span>View PDF</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpokenEnglish;
