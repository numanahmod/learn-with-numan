import Link from 'next/link';

const PopularCourses = () => {
  const courses = [
    { title: "SSC", author: "Numan Ahmod", path: "/ssc" },
    { title: "Spoken", author: "Numan Ahmod", path: "/spoken" },
    { title: "Basic Grammar", author: "Numan Ahmod", path: "/basic-grammar" }
  ];

  return (
    <section className="py-20 bg-gray-50 text-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Popular Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CourseCard = ({ course }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition hover:opacity-60">
    <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
    <p className="text-gray-600">by {course.author}</p>
    <Link href={course.path} className="text-purple-600 hover:text-purple-800 mt-4 block">
      View Details
    </Link>
  </div>
);

export default PopularCourses;
