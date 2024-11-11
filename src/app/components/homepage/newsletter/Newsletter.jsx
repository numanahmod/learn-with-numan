const Newsletter = () => (
    <section className="py-20 bg-white text-gray-800 text-center shadow-md">
      <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
      <p className="text-lg mb-6">Subscribe to receive the latest news and updates.</p>
      <form className="flex justify-center space-x-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 border border-gray-300 rounded-lg text-gray-800 focus:border-purple-500 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 via-teal-500 to-green-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
  
  export default Newsletter;
  