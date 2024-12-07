"use client"; // For client-side rendering

import React, { useState } from "react";

const GrammarPage = () => {
  const [visibleSections, setVisibleSections] = useState({});

  const toggleSection = (id) => {
    setVisibleSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const sections = [
    {
      id: 1,
      title: "Letter (বর্ণ)",
      content: (
        <>
          <p>ইংরেজি ২৬ টি letter কে দুই ভাগে ভাগ করা হয়। যথাঃ-</p>
          <ul className="ml-6 list-disc">
            <li>
              <strong>Vowel [5টি]</strong>: a, e, i, o, u
            </li>
            <li>
              <strong>Consonant [21টি]</strong>: b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z
            </li>
          </ul>
          <p>
            <strong>Note:</strong> Semi-vowel: w, y
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "Syllable (শব্দাংশ)",
      content: (
        <>
          <p>কোনো word কে আমরা যত খন্ডে বিভক্ত করে উচ্চারণ করি তার প্রতিটি খন্ডকে এক একটি Syllable বলে।</p>
          <p>
            <strong>Example:</strong> Boy, new, bas+ket = basket, fa+ther = father, edu+ca+tion = education, exa+mi+na+tion = examination
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: "Parts of Speech",
      content: (
        <>
          <p>Sentence এর প্রত্যেকটি অংশকে Parts of Speech বলে।</p>
          <p>Bah! Abir and Asif are good friends and they go to school regularly.</p>
          <p>Int. N. Con. N. V. Adj. N. Con. Pr. V. P. N. Adv.</p>
          <p>Parts of Speech – আট প্রকার। যথাঃ-</p>
          <ul className="ml-6 list-disc">
            <li>1. Noun - (বিশেষ্য)</li>
            <li>2. Pronoun - (সর্বনাম)</li>
            <li>3. Adjective - (বিশেষণ)</li>
            <li>4. Verb - (ক্রিয়া)</li>
            <li>5. Adverb - (ক্রিয়া বিশেষণ)</li>
            <li>6. Preposition - (অব্যয়)</li>
            <li>7. Conjunction - (যোজক)</li>
            <li>8. Interjection - (আবেগসূচক)</li>
          </ul>
        </>
      ),
    },
    {
      id: 4,
      title: "Types of Parts of Speech (Parts of Speech এর প্রকার)",
      content: (
        <>
          <p>Parts of Speech - আট প্রকার:</p>
          <table className="w-full text-left border-collapse border border-gray-300 mt-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3">Name of Part of Speech</th>
                <th className="border border-gray-300 p-3">Definition</th>
                <th className="border border-gray-300 p-3">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">Noun (বিশেষ্য)</td>
                <td className="border border-gray-300 p-3">ব্যক্তি, বস্তু, স্থান, বা ধারণা বোঝায়।</td>
                <td className="border border-gray-300 p-3">Sylhet, Dhaka, Nazrul, book, boy, happiness</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Pronoun (সর্বনাম)</td>
                <td className="border border-gray-300 p-3">নাম বাদ দিয়ে ব্যবহৃত শব্দ।</td>
                <td className="border border-gray-300 p-3">he, she, it, they, we, you</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Adjective (বিশেষণ)</td>
                <td className="border border-gray-300 p-3">নাম বা সর্বনামের গুণ, অবস্থা বা পরিমাণ জানায়।</td>
                <td className="border border-gray-300 p-3">good, bad, beautiful, tall, quick</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Verb (ক্রিয়া)</td>
                <td className="border border-gray-300 p-3">কাজ বা অবস্থা জানায়।</td>
                <td className="border border-gray-300 p-3">go, eat, run, jump, eat</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Adverb (ক্রিয়া বিশেষণ)</td>
                <td className="border border-gray-300 p-3">ক্রিয়া, বিশেষণ বা অন্য কোন adverb এর গুণ জানায়।</td>
                <td className="border border-gray-300 p-3">very, not, quickly, softly, well</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Preposition (অব্যয়)</td>
                <td className="border border-gray-300 p-3">বাক্যে নাম বা সর্বনামের সাথে সম্পর্ক প্রকাশ করে।</td>
                <td className="border border-gray-300 p-3">in, on, at, before, with, of</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Conjunction (যোজক)</td>
                <td className="border border-gray-300 p-3">শব্দ, বাক্য বা পদ যুক্ত করতে ব্যবহৃত হয়।</td>
                <td className="border border-gray-300 p-3">and, but, or, as because</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Interjection (আবেগসূচক)</td>
                <td className="border border-gray-300 p-3">আবেগ বা অনুভূতি প্রকাশ করে।</td>
                <td className="border border-gray-300 p-3">Hurrah, of, wow, Ouch, Hurrah</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      id: 5,
      title: "Types of Noun (বিশেষ্য)",
      content: (
        <>
          <p>নামকরণের মাধ্যমে সংজ্ঞা, উদাহরণসহ প্রকারসমূহ আলোচনা করা হলোঃ</p>
          <table className="w-full text-left border-collapse border border-gray-300 mt-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3">Name of Noun</th>
                <th className="border border-gray-300 p-3">Definition</th>
                <th className="border border-gray-300 p-3">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">Proper Noun</td>
                <td className="border border-gray-300 p-3">নির্দিষ্ট ব্যক্তি, বস্তু বা স্থানের নাম বুঝায়। (প্রথম অক্ষর Capital letter হয়)</td>
                <td className="border border-gray-300 p-3">Padma, Friday, Sylhet, Tamim</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Common Noun</td>
                <td className="border border-gray-300 p-3">কোনো শ্রেণি, ব্যক্তি,বা বস্তুর সাধারণ নাম বুঝায়।</td>
                <td className="border border-gray-300 p-3">river, week, man, book</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Collective Noun</td>
                <td className="border border-gray-300 p-3">একই জাতিকে সমষ্টিগতভাবে বুঝায়।</td>
                <td className="border border-gray-300 p-3">class, team, army, jury</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Material Noun</td>
                <td className="border border-gray-300 p-3">যা গণনা করা যায় না, শুধু পরিমাপ করা যায়।</td>
                <td className="border border-gray-300 p-3">water, iron, tea, gold</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Abstract Noun</td>
                <td className="border border-gray-300 p-3">যা দ্বারা কোনো গুণ বা দোষের নাম বুঝায়।</td>
                <td className="border border-gray-300 p-3">honesty, anger, peace, kindness</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
  ];

  return (
    <div className="bg-secondary min-h-screen py-8 px-4 md:px-8 mt-28">
      <h1 className="text-4xl font-semibold text-center mb-8 text-sky-500">Basic English Grammar</h1>

      {sections.map((section) => (
        <div
          key={section.id}
          className="bg-white p-6 rounded-lg shadow-lg mb-6 transition-all hover:shadow-xl"
        >
          <h2 className="text-xl font-bold text-gray-800 text-center">{section.title}</h2>
          <div
            className={`mt-4 text-gray-700 text-center ${visibleSections[section.id] ? "" : "hidden"}`}
          >
            {section.content}
          </div>
          <button
            onClick={() => toggleSection(section.id)}
            className="mt-6 w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition-colors flex justify-center items-center mx-auto"
          >
            {visibleSections[section.id] ? "Hide" : "Open"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default GrammarPage;
