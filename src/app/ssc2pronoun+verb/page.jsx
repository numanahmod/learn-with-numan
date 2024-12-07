// PronounsAndVerbsPage.js

import React from 'react';

const PronounsAndVerbsPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">Pronouns & Verbs</h1>

      {/* Pronouns Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Pronouns</h2>
        <p className="text-lg mt-2">
          A pronoun is a word used to replace a noun in order to avoid repetition.
        </p>
        <h3 className="text-xl font-semibold mt-4">Use of Pronouns</h3>
        <ul className="list-disc pl-8">
          <li><strong>Tawhid Hriddoy</strong> is a cricketer. <strong>He</strong> plays for Bangladesh.</li>
          <li>There are many kinds of pollution in Bangladesh like air, soil, and sound pollution. These <strong>pollutions</strong> are harmful.</li>
          <li>I saw Zakir, Rakib, and Fahad in the field. <strong>They</strong> haven’t come back home yet.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Personal Pronouns</h3>
        <table className="min-w-full table-auto mt-4 border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Person</th>
              <th className="border border-gray-300 p-2">Number</th>
              <th className="border border-gray-300 p-2">Subjective Pronouns</th>
              <th className="border border-gray-300 p-2">Objective Pronouns</th>
              <th className="border border-gray-300 p-2">Possessive Adjectives</th>
              <th className="border border-gray-300 p-2">Possessive Pronouns</th>
            </tr>
          </thead>
          <tbody>
            {/* First Person */}
            <tr>
              <td className="border border-gray-300 p-2">1st Person</td>
              <td className="border border-gray-300 p-2">Singular</td>
              <td className="border border-gray-300 p-2">I - আমি</td>
              <td className="border border-gray-300 p-2">Me - আমাকে</td>
              <td className="border border-gray-300 p-2">My - আমার</td>
              <td className="border border-gray-300 p-2">Mine - আমার</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">1st Person</td>
              <td className="border border-gray-300 p-2">Plural</td>
              <td className="border border-gray-300 p-2">We - আমরা</td>
              <td className="border border-gray-300 p-2">Us - আমাদেরকে</td>
              <td className="border border-gray-300 p-2">Our - আমাদের</td>
              <td className="border border-gray-300 p-2">Ours - আমাদের</td>
            </tr>
            {/* Second Person */}
            <tr>
              <td className="border border-gray-300 p-2">2nd Person</td>
              <td className="border border-gray-300 p-2">Singular/Plural</td>
              <td className="border border-gray-300 p-2">You - তুমি/তোমরা</td>
              <td className="border border-gray-300 p-2">You - তোমাকে/তোমাদেরকে</td>
              <td className="border border-gray-300 p-2">Your - তোমার/তোমাদের</td>
              <td className="border border-gray-300 p-2">Yours - তোমার/তোমাদের</td>
            </tr>
            {/* Third Person */}
            <tr>
              <td className="border border-gray-300 p-2">3rd Person</td>
              <td className="border border-gray-300 p-2">Singular</td>
              <td className="border border-gray-300 p-2">He - সে</td>
              <td className="border border-gray-300 p-2">Him - তাকে</td>
              <td className="border border-gray-300 p-2">His - তার</td>
              <td className="border border-gray-300 p-2">His - তার</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Other Pronouns Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold">Other Pronouns</h3>
        <ul className="list-disc pl-8">
          <li>All – সব/সবাই</li>
          <li>Any – কোন</li>
          <li>Anyone/Anybody – যে কেউ</li>
          <li>Anything – কোন কিছু</li>
          <li>Everybody/Everyone – সবাই/প্রত্যেকেই</li>
          {/* Add other pronouns as per the original content */}
        </ul>
      </section>

      {/* Verb Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Verb Classification</h2>
        <p className="text-lg mt-2">
          Verbs are words that express actions or states of being. They can be classified into different types, such as action verbs, linking verbs, and auxiliary verbs.
        </p>
      </section>

      {/* Auxiliary Verbs Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Auxiliary Verbs</h2>
        <ul className="list-disc pl-8">
          <li><strong>Primary Auxiliary Verbs:</strong> To be, to do, to have.</li>
          <li><strong>Modal Auxiliary Verbs:</strong> Shall, should, will, would, can, could, may, might, need, ought to, must.</li>
        </ul>
      </section>

      {/* Modal Verbs Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Modal Verbs</h2>
        <p className="text-lg mt-2">
          Modal verbs are auxiliary verbs that express necessity, possibility, or permission. Example sentences:
        </p>
        <ul className="list-disc pl-8">
          <li>I <strong>can</strong> speak English.</li>
          <li>He <strong>could</strong> stand against you.</li>
          <li>We <strong>must</strong> go to class.</li>
        </ul>
      </section>
    </div>
  );
};

export default PronounsAndVerbsPage;
