const Testimonials = () => (
    <section className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial name="Jane Doe" feedback="Amazing courses! I learned so much." />
          <Testimonial name="John Smith" feedback="The helpline is incredibly supportive." />
          <Testimonial name="Alice Johnson" feedback="Great platform to improve English skills!" />
        </div>
      </div>
    </section>
  );
  
  const Testimonial = ({ name, feedback }) => (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <p className="text-gray-700 italic mb-4">“{feedback}”</p>
      <h4 className="text-lg font-semibold">{name}</h4>
    </div>
  );
  
  export default Testimonials;
  