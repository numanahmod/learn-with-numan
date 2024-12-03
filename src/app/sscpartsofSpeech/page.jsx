"use client"; // Client-side rendering for interactivity

import React from "react";

const PartsofSpeech = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-8 pt-28">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Basic English Grammar</h1>

        {/* Letters Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Letters (বর্ণ)</h2>
          <p className="text-gray-700 mb-2">
            ইংরেজি ২৬ টি letter কে দুই ভাগে ভাগ করা হয়। যথাঃ
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>
              <strong>Vowel [5টি]:</strong> a, e, i, o, u
            </li>
            <li>
              <strong>Consonant [21টি]:</strong> b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w,
              x, y, z
            </li>
          </ul>
          <p className="text-gray-700">
            <strong>Note:</strong> Semi-vowel: w, y.
          </p>
        </section>

        {/* Syllables Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Syllables (শব্দাংশ)</h2>
          <p className="text-gray-700">
            কোনো word কে আমরা যত খন্ডে বিভক্ত করে উচ্চারণ করি তার প্রতিটি খন্ডকে এক একটি
            Syllable বলে।
          </p>
          <p className="text-gray-700 mt-2">
            Examples: Boy, new, bas+ket=basket, fa+ther=father, edu+ca+tion=education,
            exa+mi+na+tion=examination.
          </p>
        </section>

        {/* Parts of Speech Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Parts of Speech</h2>
          <p className="text-gray-700 mb-4">
            Sentence এর প্রত্যেকটি অংশকে Parts of Speech বলে। উদাহরণস্বরূপ:
          </p>
          <p className="bg-gray-100 p-4 rounded mb-4">
            <code>
              Bah! Abir and Asif are good friends and they go to school regularly.
            </code>
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Parts of Speech:</strong> Int. (Interjection), N. (Noun), Con. (Conjunction), V.
            (Verb), Adj. (Adjective), Adv. (Adverb), Pr. (Pronoun), P. (Preposition)
          </p>
          <p className="text-gray-700">
            Parts of Speech আট প্রকার:   </p>
            <ol className="list-decimal list-inside mt-2 text-gray-700">
              <li>Noun (বিশেষ্য)</li>
              <li>Pronoun (সর্বনাম)</li>
              <li>Adjective (বিশেষণ)</li>
              <li>Verb (ক্রিয়া)</li>
              <li>Adverb (ক্রিয়া বিশেষণ)</li>
              <li>Preposition (অব্যয়)</li>
              <li>Conjunction (সংযোজক)</li>
              <li>Interjection (বিস্ময়সূচক শব্দ)</li>
            </ol>
        
        </section>

        {/* Detailed Parts of Speech */}
        <section>
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Detailed Parts of Speech</h3>
          <div className="space-y-6">
            {/* Example Section */}
            {[
              {
                title: "Noun (বিশেষ্য)",
                definition:
                  "যে word দ্বারা কোন কিছুর নাম প্রকাশ করা হয় তাকে Noun বলে।",
                subtypes: [
                  {
                    name: "Proper Noun",
                    definition: "নির্দিষ্ট নাম (e.g., Padma, Sylhet, English Grammar)",
                  },
                  {
                    name: "Common Noun",
                    definition: "সাধারণ নাম (e.g., man, river, book)",
                  },
                  {
                    name: "Collective Noun",
                    definition: "সমষ্টিগত নাম (e.g., team, jury)",
                  },
                  {
                    name: "Material Noun",
                    definition: "পদার্থের নাম (e.g., water, gold, milk)",
                  },
                  {
                    name: "Abstract Noun",
                    definition: "অনুভূতি বা গুণ (e.g., honesty, kindness, truth)",
                  },
                ],
              },
              {
                title: "Pronoun (সর্বনাম)",
                definition: "নামের পরিবর্তে বসা word কে Pronoun বলে।",
                examples: ["I", "we", "you", "he", "she", "they"],
              },
              {
                title: "Verb (ক্রিয়া)",
                definition:
                  "যে word দ্বারা কোনো কাজ করা বা হওয়া বুঝায় তাকে Verb বলে।",
                examples: ["do", "go", "read", "eat"],
              },
              {
                title: "Conjunction (সংযোজক)",
                definition:
                  "একাধিক word বা sentence সংযুক্ত করার জন্য ব্যবহৃত শব্দ।",
                examples: ["and", "but", "if"],
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-lg p-4 shadow-sm"
              >
                <h4 className="text-lg font-bold text-blue-600">{item.title}</h4>
                <p className="text-gray-700 mt-2">{item.definition}</p>
                {item.subtypes && (
                  <ul className="mt-4 list-disc list-inside text-gray-700">
                    {item.subtypes.map((sub, subIdx) => (
                      <li key={subIdx}>
                        <strong>{sub.name}:</strong> {sub.definition}
                      </li>
                    ))}
                  </ul>
                )}
                {item.examples && (
                  <p className="mt-2 text-gray-800">
                    <span className="font-semibold">Examples:</span>{" "}
                    {item.examples.join(", ")}.
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PartsofSpeech;
