import { FiBook, FiPenTool, FiHelpCircle, FiEdit } from 'react-icons/fi';

const Features = () => (
  <section className="py-20 bg-white text-gray-900">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Feature icon={<FiBook />} title="Interactive Courses" description="Structured, interactive courses for every level." />
        <Feature icon={<FiPenTool />} title="Expert Blogs" description="Gain insights from expert-written blogs." />
        <Feature icon={<FiHelpCircle />} title="24/7 Helpline" description="Always available support for your learning journey." />
        <Feature icon={<FiEdit />} title="Personalized Tests" description="Assess your progress with tailored quizzes." />
      </div>
    </div>
  </section>
);

const Feature = ({ icon, title, description }) => (
  <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
    <div className="text-4xl text-purple-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default Features;
