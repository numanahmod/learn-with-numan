import Link from 'next/link';

const PopularCourses = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">Popular Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sample course card */}
        <CourseCard title="English for Beginners" author="Numan Ahmod" />
        <CourseCard title="Advanced Grammar" author="Numan Ahmod" />
        <CourseCard title="Business English" author="Numan Ahmod" />
      </div>
    </div>
  </section>
);

const CourseCard = ({ title, author }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">by {author}</p>
    <Link href="/courses" className="text-purple-600 hover:text-purple-800 mt-4 block">View Details</Link>
  </div>
);

export default PopularCourses;
