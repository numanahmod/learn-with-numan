import Head from 'next/head';

export default function PronounsAndVerbs() {
  return (
    <>
      <Head>
        <title>Pronouns & Verbs Guide</title>
        <meta name="description" content="Learn about Pronouns, Auxiliary Verbs, and Modal Verbs" />
      </Head>

      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-6">Pronouns & Verbs Guide</h1>

        {/* Pronouns Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Pronouns</h2>
          <p><strong>Use of pronoun:</strong></p>
          <ul>
            <li>1. Tawhid Hriddoy is a cricketer. <span className="text-blue-500">He</span> plays for Bangladesh.</li>
            <li>2. There are many kinds of pollution in Bangladesh such as air pollution, soil pollution, and sound pollution. These <span className="text-blue-500">pollutions</span> are very harmful to our country.</li>
            <li>3. I saw Zakir, Rakib, and Fahad in the field. <span className="text-blue-500">They</span> haven’t gone back home yet.</li>
          </ul>
        </section>

        {/* Personal Pronouns Table Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Personal Pronouns with Person & Number</h2>
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Person</th>
                <th className="border border-gray-300 px-4 py-2">Number</th>
                <th className="border border-gray-300 px-4 py-2">Subjective Pronouns</th>
                <th className="border border-gray-300 px-4 py-2">Objective Pronouns</th>
                <th className="border border-gray-300 px-4 py-2">Possessive Adjectives</th>
                <th className="border border-gray-300 px-4 py-2">Possessive Pronouns</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1st Person</td>
                <td className="border border-gray-300 px-4 py-2">Singular</td>
                <td className="border border-gray-300 px-4 py-2">I</td>
                <td className="border border-gray-300 px-4 py-2">Me</td>
                <td className="border border-gray-300 px-4 py-2">My</td>
                <td className="border border-gray-300 px-4 py-2">Mine</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1st Person</td>
                <td className="border border-gray-300 px-4 py-2">Plural</td>
                <td className="border border-gray-300 px-4 py-2">We</td>
                <td className="border border-gray-300 px-4 py-2">Us</td>
                <td className="border border-gray-300 px-4 py-2">Our</td>
                <td className="border border-gray-300 px-4 py-2">Ours</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">2nd Person</td>
                <td className="border border-gray-300 px-4 py-2">Singular & Plural</td>
                <td className="border border-gray-300 px-4 py-2">You</td>
                <td className="border border-gray-300 px-4 py-2">You</td>
                <td className="border border-gray-300 px-4 py-2">Your</td>
                <td className="border border-gray-300 px-4 py-2">Yours</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">3rd Person</td>
                <td className="border border-gray-300 px-4 py-2">Singular</td>
                <td className="border border-gray-300 px-4 py-2">He/She/It</td>
                <td className="border border-gray-300 px-4 py-2">Him/Her/It</td>
                <td className="border border-gray-300 px-4 py-2">His/Her/Its</td>
                <td className="border border-gray-300 px-4 py-2">His/Hers/Its</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">3rd Person</td>
                <td className="border border-gray-300 px-4 py-2">Plural</td>
                <td className="border border-gray-300 px-4 py-2">They</td>
                <td className="border border-gray-300 px-4 py-2">Them</td>
                <td className="border border-gray-300 px-4 py-2">Their</td>
                <td className="border border-gray-300 px-4 py-2">Theirs</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Auxiliary Verbs Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Auxiliary Verbs</h2>
          <p><strong>Types of Auxiliary Verbs:</strong></p>
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Primary Auxiliary Verbs</th>
                <th className="border border-gray-300 px-4 py-2">Modal Auxiliary Verbs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">To be: am, is, are, was, were, been</td>
                <td className="border border-gray-300 px-4 py-2">Shall, should, will, would, can, could, may, might, need, ought to, must</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Modal Verbs Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Modal Verbs with Simple Meaning</h2>
          <ul>
            <li>Can – পারা</li>
            <li>Could – পারতাম</li>
            <li>Should – উচিত</li>
            <li>Would – (অতীতের অভ্যাস)</li>
            <li>May – সম্ভাবনা, প্রার্থনা, অনুমতি</li>
            <li>Might – (কম সম্ভাবনা)</li>
            <li>Must – অবশ্যই, নিশ্চয়তা</li>
            <li>Ought to – উচিত</li>
            <li>Need to – প্রয়োজন</li>
            <li>Used to – প্রায় (অতীতের অভ্যাস)</li>
            <li>Have/has to – (কোনো কিছু করতে হবে)</li>
            <li>Had to – (কোনো কাজ করতে বাধ্য ছিল)</li>
          </ul>
        </section>
      </div>
    </>
  );
}
